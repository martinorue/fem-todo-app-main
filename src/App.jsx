import { useContext, useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header'
import { TaskForm } from './components/TaskForm'
import { ThemeContext } from './context/ThemeContext'
import { TaskList } from './components/TaskList'
import { initialTasks } from './data'

function App () {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) ?? initialTasks)
  const [newTask, setNewTask] = useState({
    name: '',
    completed: false
  })
  const { isDark } = useContext(ThemeContext)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleCompleteTask = (taskId) => {
    const nextTasks = tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task)
    setTasks(nextTasks)
  }

  const handleAddTask = (event) => {
    event.preventDefault()
    const id = tasks.length > 0 ? tasks.at(-1).id + 1 : 1
    const { name, completed } = newTask
    const task = {
      id,
      name,
      completed
    }
    setTasks([...tasks, task])
    setNewTask({
      name: '',
      completed: false
    })
  }

  const handleChangeNewTask = (event) => {
    setNewTask({ ...newTask, name: event.target.value })
  }

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    <div className={`${!isDark ? 'is-light-theme' : ''} app`}>
      <Header />
      <main>
        <TaskForm newTask={newTask.name} onAddTask={handleAddTask} onChangeNewTask={handleChangeNewTask}/>
        <TaskList tasks={tasks} onCompleteTask={handleCompleteTask} onDeleteTask={handleDeleteTask}/>
      </main>
    </div>
  )
}

export default App
