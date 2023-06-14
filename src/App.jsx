import { useContext, useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header'
import { TaskForm } from './components/TaskForm'
import { ThemeContext } from './context/ThemeContext'
import { TaskList } from './components/TaskList'
import { initialTasks } from './data'

function App () {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) ?? initialTasks)
  const { isDark } = useContext(ThemeContext)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className={`${!isDark ? 'is-light-theme' : ''} app`}>
      <Header />
      <TaskForm />
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default App
