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
  const [wait, setWait] = useState(0)
  const [session, setSession] = useState(localStorage.getItem('authToken'))
  const [isLoading, setIsLoading] = useState(() => {
    return localStorage.getItem('hasVisited') ? false : true
  })
  const [canPlay, setCanPlay] = useState(true)

  useEffect(() => {
    const storedSession = localStorage.getItem('authToken')
    if (storedSession) {
      setSession(storedSession)
    }
    loginUser()
  }, [])

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

  const preloadAssets = assetList => {
    assetList.forEach(src => {
      if (src.endsWith('.mp3')) {
        const audio = new Audio(src)
        audio.load()
      } else {
        const img = new Image()
        img.src = src
      }
    })
  }

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
    })
    preloadAssets(imagesToPreload)
  }, []) // Run once on component mount

  const loginUser = async () => {
    try {
      const response = await api.post('/auth/login', {
        security_code: 'joasdf8921kljds',
        telegram_id: 10
      })

      if (response.data.sessionId) {
        const sessionId = response.data.sessionId
        localStorage.setItem('authToken', sessionId)

        console.log('✅ Stored New Session ID:', sessionId)

        fetchGameStatus() // Fetch game status after logging in
      } else {
        console.error('❌ Login failed: No session ID returned.')
      }
    } catch (error) {
      console.error('❌ Login error:', error.response?.data || error.message)
    }
  }

  const fetchGameStatus = async () => {
    try {
      const storedSession = session || localStorage.getItem('authToken')
      if (!storedSession) {
        console.warn('⚠️ No session available. Logging in...')
        await loginUser()
        return
      }

      // Fetch the current game status
      const response = await api.get('/game/current', {
        headers: { Authorization: `Bearer ${storedSession}` }
      })

      console.log(
        '🔹 Game Status Response:',
        JSON.stringify(response.data, null, 2)
      )

      const { waitTime = 0, active } = response.data || {}

      // 🟡 Case 1: User has made taps but hasn't claimed yet
      if (active !== null) {
        console.log('🟢 Game session is active! User can tap or claim.')
        setCanPlay(true)
        return
      }

      // 🟠 Case 2: User must wait before playing again
      if (waitTime > 0) {
        console.log(`⏳ Wait Time (ms): ${waitTime}`)
        setWait(waitTime)
        alert(`Game is not active. Please wait.`)
        setCanPlay(false)
        return
      }

      // 🟢 Case 3: No active session & no wait time → Ready to tap
      console.log(
        '✅ No active session & no wait time. User can start a new round!'
      )
      setCanPlay(true)
    } catch (error) {
      console.error('❌ Error fetching game status:', error)

      if (error.response) {
        console.log('🔍 Error Response Data:', error.response.data)
        console.log('📡 Status Code:', error.response.status)

        if (
          error.response.status === 401 ||
          error.response?.data?.message === 'Invalid session ID'
        ) {
          console.log('⚠️ Invalid session detected. Re-authenticating...')
          await loginUser()
        }
      } else if (error.request) {
        console.log('⏳ No Response Received:', error.request)
      } else {
        console.log('🚨 Unexpected Error:', error.message)
      }
    }
  }

  const handleTap = async event => {
    if (tapCount >= 60 || !session) return

    if (volume) {
      const audio = new Audio(tapSound)
      audio.load()
      audio.play()
    }

    const { clientX, clientY } = event

    setLogos(prev => [
      ...prev,
      { id: Date.now(), x: clientX, y: clientY, isAnimating: true }
    ])

    setTapCount(prev => {
      const newTapCount = prev + 1

      if (newTapCount === 60) {
        setCharacterState('land')

        setTimeout(() => setCharacterState('dance'), 500)
        localStorage.setItem('lastPlayedTime', Date.now().toString())
        setCanPlay(false)
      } else {
        setCharacterState('fly')
      }

      const fetchCounts = async () => {
        if (newTapCount === 60) {
          try {
            const response = await api.post(
              '/game/tap',
              { taps: 60 },
              { headers: { Authorization: session } }
            )
            console.log('✅ Tap sent successfully!', response.data)
          } catch (error) {
            console.error(
              '❌ Error sending tap:',
              error.response?.status,
              error.response?.data
            )
          }
        }
      }
      console.log(newTapCount)
      fetchCounts()
      return newTapCount
    })

    if (inactivityTimer) clearTimeout(inactivityTimer)

    const timer = setTimeout(() => {
      if (tapCount < 59) {
        setCharacterState('crash')
        setTimeout(() => setCharacterState('panic'), 1000)
      }
    }, 2000)

    setInactivityTimer(timer)
  }

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
      alert('⚠️ You must be logged in to claim rewards.')
      return
    }

    if (tapCount < 60) {
      alert('⚠️ You need at least 60 taps to claim the reward!')
      return
    }
    fetchGameStatus()
    try {
      const response = await api.post(
        '/game/claim',
        {},
        { headers: { Authorization: session } }
      )

      console.log('📩 Claim Response:', response.data)

      if (response.status === 200 && response.data?.success) {
        alert('🎉 Rewards claimed successfully!')
        setTapCount(0) // Reset tap count after claiming
      } else if (response.data?.error) {
        alert(`❌ ${response.data.error}`)
      }
    } catch (error) {
      console.error('❌ Error claiming rewards:', error)

      if (error.response) {
        console.log('🔍 Error Response Data:', error.response.data)
        console.log('📡 Status Code:', error.response.status)

        if (
          error.response.status === 401 ||
          error.response?.data?.message === 'Invalid session ID'
        ) {
          console.log('⚠️ Unauthorized request. Re-authenticating...')
          await loginUser()
          return
        }
      } else if (error.request) {
        console.log('⏳ No Response Received:', error.request)
      } else {
        console.log('❗Request Setup Error:', error.message)
      }

      alert('❌ Unexpected error. Please try again later.')
    }
  }

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
            tapCount < 60 ? 'cursor-pointer' : 'cursor-not-allowed'
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
