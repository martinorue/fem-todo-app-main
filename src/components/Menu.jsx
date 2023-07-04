import React, { useState, useEffect, useRef, useContext } from 'react'
import { BiSortAlt2 } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineSortAscending } from 'react-icons/ai'
import { ThemeContext } from '../context/ThemeContext'

export function Menu ({ onSort }) {
  const [isOpen, setIsOpen] = useState(false)
  const { isDark } = useContext(ThemeContext)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="kebab-menu" ref={menuRef}>
      <button type='button' className="menu-toggle" onClick={toggleMenu}>
        <BsThreeDotsVertical size={16} color={`${isDark ? 'hsl(236, 33%, 92%)' : 'hsl(235, 19%, 35%)'}`} />
      </button>
      {isOpen && (
        <div className="menu-content">
          <button onClick={onSort} className="menu-item" value={'alphabetical'}>
            <AiOutlineSortAscending size={16} color="currentColor" />
            <span>Alphabetical</span>
          </button>
          <button onClick={onSort} className="menu-item" value={'reverse'}>
            <BiSortAlt2 size={16} color="currentColor" />
            <span>Asc/Desc</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default Menu
