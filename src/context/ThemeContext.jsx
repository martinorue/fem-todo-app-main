import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export function ThemeContextProvider ({ children }) {
  const [isDark, setIsDark] = useState(true)

  const handleChangeTheme = () => {
    setIsDark(!isDark)
  }

  return (
        <ThemeContext.Provider value={{
          isDark, handleChangeTheme
        }}>
            {children}
        </ThemeContext.Provider>
  )
}
