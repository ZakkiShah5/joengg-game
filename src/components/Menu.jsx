import { NavLink } from 'react-router-dom'

import home from '../assets/menu/home.png'
import wallet from '../assets/menu/wallet.png'
import ranking from '../assets/menu/ranking.png'
import my from '../assets/menu/my.png'
import rewards from '../assets/menu/rewards.png'

import menuSound from '../assets/sounds/menu.mp3'

const Menu = () => {
  const activeClass = 'text-white bg-mypurple-600 '
  const normalClass = 'text-mypurple-600 bg-white'

  const handleMenuTap = ()=>{
    const audio = new Audio(menuSound);
    audio.load();
        audio.play();
  }
  

  return (
    <div className=' flex justify-center absolute left-1/2 transform -translate-x-1/2 bottom-2'>
      <nav className='flex text-sm text-center bg-white rounded-md overflow-hidden'>
        <NavLink
          to='/'
          onClick={handleMenuTap}
          className={({ isActive }) => (isActive ? activeClass : normalClass)}
        >
          <div className='py-1 px-1 w-[70px] flex justify-center flex-col items-center'>
            <img className='w-10' src={home} alt='' />
            Home
          </div>
        </NavLink>
        <NavLink
          onClick={handleMenuTap}
          to='/wallet'
          className={({ isActive }) => (isActive ? activeClass : normalClass)}
        >
          <div className='py-1 px-1 w-[70px] border-r-[1.5px] flex justify-center flex-col items-center'>
            <img className='w-10' src={wallet} alt='' />
            Wallet
          </div>
        </NavLink>
        <NavLink
          onClick={handleMenuTap}
          to='/ranking'
          className={({ isActive }) => (isActive ? activeClass : normalClass)}
        >
          <div className='py-1 px-1 w-[70px] border-r-[1.5px] flex justify-center flex-col items-center'>
            <img className='w-10' src={ranking} alt='' />
            Ranking
          </div>
        </NavLink>
        <NavLink
          onClick={handleMenuTap}
          to='/my'
          className={({ isActive }) => (isActive ? activeClass : normalClass)}
        >
          <div className='px-1 py-1 w-[70px] border-r-[1.5px] flex justify-center flex-col items-center'>
            <img className='w-10' src={my} alt='' />
            My
          </div>
        </NavLink>
        <NavLink
          onClick={handleMenuTap}
          to='/rewards'
          className={({ isActive }) => (isActive ? activeClass : normalClass)}
        >
          <div className='py-1 px-1 w-[70px] flex justify-center flex-col items-center'>
            <img className='w-10' src={rewards} alt='' />
            Rewards
          </div>
        </NavLink>
      </nav>
    </div>
  )
}

export default Menu
