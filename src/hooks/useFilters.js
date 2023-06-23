import { useState } from 'react'

export function useFilters (tasks) {
  const [filter, setFilter] = useState('all')

  const filterTypes = {
    all: tasks,
    active: tasks.filter(task => !task.completed),
    completed: tasks.filter(task => task.completed)
  }

  const filteredTasks = filterTypes[filter]

  const handleChangeFilter = (event) => {
    const selectedFilter = event.target.value
    setFilter(selectedFilter)
  }

  return { filteredTasks, handleChangeFilter, filter }
}
