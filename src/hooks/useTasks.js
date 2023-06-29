import { useState, useEffect } from 'react'
import { getTasks, saveTasks } from '../services/tasks'

export function useTasks () {
  const [tasks, setTasks] = useState(getTasks)
  const [newTask, setNewTask] = useState({
    name: '',
    completed: false
  })

  const alphabeticalOrder = () => {
    console.log('alphab...')
    const tasksCopy = [...tasks]
    const sortedTasks = tasksCopy.sort((a, b) => a.name.localeCompare(b.name))
    setTasks(sortedTasks)
  }

  const reverseOrder = () => {
    console.log('reverse...')
    const tasksCopy = [...tasks]
    const sortedTasks = tasksCopy.reverse()
    setTasks(sortedTasks)
  }

  const sortTypes = {
    alphabetical: () => alphabeticalOrder(),
    reverse: () => reverseOrder()
  }

  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  const handleCompleteTask = (taskId) => {
    const nextTasks = tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task)
    setTasks(nextTasks)
  }

  const handleAddTask = (event) => {
    event.preventDefault()
    const id = crypto.randomUUID()
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

  const onDragEnd = (result) => {
    const { destination, source } = result
    if (!destination) return
    const items = [...tasks]
    const [reorderedItem] = items.splice(source.index, 1)
    items.splice(destination.index, 0, reorderedItem)
    setTasks(items)
  }

  const handleEditTask = (value, taskId) => {
    const nextTasks = tasks.map(task => task.id === taskId ? { ...task, name: value } : task)
    setTasks(nextTasks)
  }

  const onSort = (event) => {
    sortTypes[event.currentTarget.value]()
  }

  return {
    tasks,
    newTask,
    handleAddTask,
    handleChangeNewTask,
    handleCompleteTask,
    handleDeleteTask,
    handleClearCompleted,
    itemsLeft,
    onDragEnd,
    handleEditTask,
    onSort
  }
}
