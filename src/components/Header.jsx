import iconSun from '../assets/images/icon-sun.svg'
import iconMoon from '../assets/images/icon-moon.svg'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export function Header () {
  const { isDark, handleChangeTheme } = useContext(ThemeContext)
  return (
    <header className='header'>
        <h1 className='header__title'>TODO</h1>
        <button type='checkbox' onClick={handleChangeTheme} className='header__toggle-theme'>
            <img src={`${isDark ? iconSun : iconMoon}`} alt='' />
        </button>
    </header>
  )
}
