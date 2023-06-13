import { useContext } from 'react'
import './App.css'
import { Header } from './components/Header'
import { TaskForm } from './components/TaskForm'
import { ThemeContext } from './context/ThemeContext'

function App () {
  const { isDark } = useContext(ThemeContext)
  return (
    <div className={`${!isDark ? 'is-light-theme' : ''} app`}>
      <Header />
      <TaskForm />
    </div>
  )
}

export default App
