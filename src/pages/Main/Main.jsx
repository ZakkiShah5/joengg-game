import { useState, useEffect } from 'react'
import { Menu } from '../../components'
import Character from './components/Character'
import Icons from './components/Icons'
import './Main.css'

import api from '../../api'
import logo from '../../assets/main/logo.png'

import chara from '../../assets/gif/3d-idle.gif'
import chara_fly from '../../assets/gif/chara-fly-bronze.gif'
import chara_land from '../../assets/gif/chara-landing.gif'
import chara_panic from '../../assets/gif/chara-fall-panic.gif'
import chara_crash from '../../assets/gif/chara-crash.gif'
import chara_dance from '../../assets/gif/chara-dance.gif'

import tapSound from '../../assets/sounds/1.touch.mp3'
import Loading from '../../components/Loading'
import { useMute } from '../../Context/VolumeContext'

const Main = () => {
  const { volume } = useMute()
  const [tapCount, setTapCount] = useState(0)
  const [logos, setLogos] = useState([])
  const [characterState, setCharacterState] = useState('idle')
  const [inactivityTimer, setInactivityTimer] = useState(null)
  const [wait, setWait] = useState(0);
  const [session, setSession] = useState(localStorage.getItem("authToken"));
  const [isLoading, setIsLoading] = useState(() => {
    return localStorage.getItem('hasVisited') ? false : true
  })
  const [canPlay, setCanPlay] = useState(true)

  useEffect(() => {
    if (session) {
      fetchGameStatus(session);
    } else {
      loginUser();
    }
  }, []);

  useEffect(() => {
    const lastPlayed = localStorage.getItem('lastPlayedTime')
    if (lastPlayed) {
      const timeElapsed = Date.now() - parseInt(lastPlayed, 10)
      if (timeElapsed < 24 * 60 * 60 * 1000) {
        setCanPlay(false)
      }
    }
  }, [])

  useEffect(() => {
    if (!localStorage.getItem('hasVisited')) {
      const timer = setTimeout(() => {
        setIsLoading(false)
        localStorage.setItem('hasVisited', 'true')
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [])

  const preloadAssets = (assetList) => {
    assetList.forEach((src) => {
      if (src.endsWith('.mp3')) {
        const audio = new Audio(src);
        audio.load();
      } else {
        const img = new Image();
        img.src = src;
      }
    });
  };

  useEffect(() => {
    const imagesToPreload = [
      chara,
      chara_fly,
      chara_land,
      chara_panic,
      chara_crash,
      chara_dance,
      logo
    ]

    imagesToPreload.forEach(src => {
      const img = new Image()
      img.src = src
    });
    preloadAssets(imagesToPreload)
  }, []) // Run once on component mount

  const loginUser = async () => {
    try {
      const response = await api.post("/auth/login", {
        security_code: "joasdf8921kljds",
        telegram_id: 10,
      });
  
      if (response.data.sessionId) {
        const sessionId = response.data.sessionId;
        localStorage.setItem("authToken", sessionId);
        console.log("✅ Stored New Session ID:", sessionId);
  
        fetchGameStatus(); // Fetch game status after logging in
      } else {
        console.error("❌ Login failed: No session ID returned.");
      }
    } catch (error) {
      console.error("❌ Login error:", error.response?.data || error.message);
    }
  };
  
  
  const fetchGameStatus = async (token) => {
    try {
      const response = await api.get("/game/current", {
        headers: { Authorization: token },
      });
  
      console.log("🔹 Game Status:", response.data);
  
      if (response.data.active) {
        setTapCount(response.data.active.taps);
      } else {
        const waitTime = response.data.waitTime;
        const hours = Math.floor(waitTime / 3600000);
        const minutes = Math.floor((waitTime % 3600000) / 60000);
        const seconds = Math.floor((waitTime % 60000) / 1000);
  
        setWait(waitTime);
        alert(`Game is not active. Please wait for: ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`);
        setCanPlay(false); // Disable playing until the game is active again
      }
    } catch (error) {
      console.error("❌ Error fetching game status:", error.response?.status, error.response?.data);
  
      if (error.response?.status === 401 || error.response?.data?.message === "Invalid session ID") {
        console.log("⚠️ Invalid session detected. Re-authenticating...");
        loginUser();
      }
    }
  };
  
  

  const handleTap = async (event) => {
    if (tapCount >= 60 || !session) return;

    if (volume) {
      const audio = new Audio(tapSound);
      audio.load();
      audio.play();
    }

    const { clientX, clientY } = event;

    setLogos(prev => [...prev, { id: Date.now(), x: clientX, y: clientY, isAnimating: true }]);

    setTapCount(prev => {
      const newTapCount = prev + 1;

      if (newTapCount === 60) {
        setCharacterState('land');
        setTimeout(() => setCharacterState('dance'), 500);
        localStorage.setItem('lastPlayedTime', Date.now().toString());
        setCanPlay(false);
      } else {
        setCharacterState('fly');
      }

      return newTapCount;
    });

    try {
      const response = await api.post("/game/tap", { taps: 1 }, { headers: { Authorization: session } });
      console.log("✅ Tap sent successfully!", response.data);
    } catch (error) {
      console.error("❌ Error sending tap:", error.response?.status, error.response?.data);
    }

    if (inactivityTimer) clearTimeout(inactivityTimer);

    const timer = setTimeout(() => {
      if (tapCount < 59) {
        setCharacterState('crash');
        setTimeout(() => setCharacterState('panic'), 1000);
      }
    }, 2000);

    setInactivityTimer(timer);
  };

  useEffect(() => {
    return () => {
      if (inactivityTimer) clearTimeout(inactivityTimer)
    }
  }, [inactivityTimer])

  const getCharacterGif = () => {
    switch (characterState) {
      case 'fly':
        return chara_fly
      case 'land':
        return chara_land
      case 'panic':
        return chara_panic
      case 'crash':
        return chara_crash
      case 'dance':
        return chara_dance
      default:
        return chara
    }
  }

  const characterStyles = {
    width: characterState === 'panic' ? '75%' : '100%',
    transform:
      characterState === 'panic'
        ? 'translate(30px, 30px)'
        : 'translate(0px, 0px)',
    transition: 'transform 0.5s ease, width 0.5s ease'
  }

  const getBackgroundStyle = () => {
    return {
      backgroundPosition:
        characterState === 'panic'
          ? '0px -1680px'
          : `${tapCount * -7.2}px ${tapCount * 0.067}px`,
      transition:
        characterState === 'panic'
          ? 'background-position 100s ease-out'
          : 'background-position 1s ease-out'
    }
  }

 
  
  const handleClaim = async () => {
    if (!session) {
      alert("⚠️ You must be logged in to claim rewards.");
      return;
    }
  console.log(wait)
    try {
      // Make the API call to claim the rewards
      const response = await api.post("/game/claim", {}, { headers: { Authorization: session } });
  
      if (response.data.success) {
        // Reward claimed successfully
        alert("🎉 Rewards claimed successfully!");
        setTapCount(0); // Reset tap count after claiming rewards
      } else if (response.data.error === 'No eligible round to claim') {
        // Handle case where there is no eligible round
        alert("❌ No eligible round to claim rewards. Please try again later.");
      } else {
        alert("❌ Error claiming rewards. Please try again.");
      }
    } catch (error) {
      console.error("❌ Error claiming rewards:", error);
    
      if (error.response) {
        console.log("🔍 Error Response Data:", error.response.data);
        console.log("📡 Status Code:", error.response.status);
        console.log("📄 Headers:", error.response.headers);
      } else if (error.request) {
        console.log("⏳ No Response Received:", error.request);
      } else {
        console.log("❗ Request Setup Error:", error.message);
      }
    
      if (error.response?.status === 401) {
        console.log("⚠️ Unauthorized request. Re-authenticating...");
        await loginUser(); // Handle re-authentication
      } else {
        alert("❌ Unexpected error. Please try again later.");
      }
    }
    
  };
  

  const handleAnimationEnd = id => {
    setLogos(prev => prev.filter(logo => logo.id !== id))
  }

  return (
    <div className='relative'>
      {isLoading && (
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50'>
          <Loading />
        </div>
      )}

      <div className={`main-container ${isLoading ? 'blur-sm' : ''}`}>
        <div
          className={`preload ${
            tapCount < 59 ? 'cursor-pointer' : 'cursor-not-allowed'
          }`}
          style={getBackgroundStyle()}
        >
          <Icons />
          <div>
            <Character
              handleTap={handleTap}
              tapCount={tapCount}
              setCharacterState={setCharacterState}
              setTapCount={setTapCount}
              getCharacterGif={getCharacterGif}
              characterStyles={characterStyles}
              canPlay={canPlay}
              handleClaim={handleClaim}
              wait={wait}
            />

            {/* Animated Logo */}
            {logos.map(logoItem => (
              <img
                key={logoItem.id}
                src={logo}
                alt=''
                className='animated-logo'
                style={{
                  position: 'absolute',
                  top: logoItem.y,
                  left: logoItem.x,
                  width: '50px',
                  height: '50px',
                  animation: `moveToCenter 0.8s ease`
                }}
                onAnimationEnd={() => handleAnimationEnd(logoItem.id)}
              />
            ))}
          </div>

          {/* Gauge */}
          <div
            className='h-96 w-6 flex flex-col justify-end bg-gray-200 absolute top-1/2 right-1 rounded-2xl transform -translate-x-1/2 -translate-y-1/2 overflow-hidden cursor-pointer'
            onClick={handleTap}
          >
            <div
              className='bg-mypurple-600 rounded-b-2xl transition-all duration-300'
              style={{ height: `${tapCount * 1.7}%` }}
            ></div>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  )
}

export default Main