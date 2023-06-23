import { useContext } from 'react'
import './App.css'
import { Header } from './components/Header'
import { TaskForm } from './components/TaskForm'
import { ThemeContext } from './context/ThemeContext'
import { TaskList } from './components/TaskList'
import { useTasks } from './hooks/useTasks'
import { TaskSummary } from './components/TaskSummary'
import { TaskFilters } from './components/TaskFilters'
import { useFilters } from './hooks/useFilters'

function App () {
  const { isDark } = useContext(ThemeContext)
  const {
    tasks,
    newTask,
    handleAddTask,
    handleChangeNewTask,
    handleCompleteTask,
    handleDeleteTask,
    handleClearCompleted,
    itemsLeft
  } = useTasks()

  const { filteredTasks, handleChangeFilter } = useFilters(tasks)

  return (
    <div className={`${!isDark ? 'is-light-theme' : ''} app`}>
      <Header />
      <main>
        <TaskForm newTask={newTask.name} onAddTask={handleAddTask} onChangeNewTask={handleChangeNewTask} />
        <TaskList tasks={filteredTasks} onCompleteTask={handleCompleteTask} onDeleteTask={handleDeleteTask} />
        <TaskSummary itemsLeft={itemsLeft} onClearCompleted={handleClearCompleted} />
      </main>
        <TaskFilters onChangeFilter={handleChangeFilter} />
    </div>
  )
}

export default App
