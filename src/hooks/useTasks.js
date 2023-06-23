import { useState, useEffect } from 'react'
import { getTasks, saveTasks } from '../services/tasks'

export function useTasks () {
  const [tasks, setTasks] = useState(getTasks)
  const [newTask, setNewTask] = useState({
    name: '',
    completed: false
  })

  useEffect(() => {
    saveTasks(tasks)
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
    if (name) {
      setTasks([...tasks, task])
      setNewTask({
        name: '',
        completed: false
      })
    }
  }

  const handleChangeNewTask = (event) => {
    setNewTask({ ...newTask, name: event.target.value })
  }

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const handleClearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed))
  }

  const itemsLeft = tasks.filter(task => !task.completed).length

  return {
    tasks,
    newTask,
    handleAddTask,
    handleChangeNewTask,
    handleCompleteTask,
    handleDeleteTask,
    handleClearCompleted,
    itemsLeft
  }
}
