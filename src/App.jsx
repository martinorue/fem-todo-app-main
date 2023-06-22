import { useContext } from 'react'
import './App.css'
import { Header } from './components/Header'
import { TaskForm } from './components/TaskForm'
import { ThemeContext } from './context/ThemeContext'
import { TaskList } from './components/TaskList'
import { useTasks } from './hooks/useTasks'
import { TaskSummary } from './components/TaskSummary'

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

  return (
    <div className={`${!isDark ? 'is-light-theme' : ''} app`}>
      <Header />
      <main>
        <TaskForm newTask={newTask.name} onAddTask={handleAddTask} onChangeNewTask={handleChangeNewTask} />
        <TaskList tasks={tasks} onCompleteTask={handleCompleteTask} onDeleteTask={handleDeleteTask} />
        <TaskSummary itemsLeft={itemsLeft} onClearCompleted={handleClearCompleted} />
      </main>
    </div>
  )
}

export default App
