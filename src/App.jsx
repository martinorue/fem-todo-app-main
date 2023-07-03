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
import { Footer } from './components/Footer'

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
    itemsLeft,
    onDragEnd,
    handleEditTask,
    onSort
  } = useTasks()

  const { filteredTasks, handleChangeFilter, filter } = useFilters(tasks)

  return (
    <div className={`${!isDark ? 'is-light-theme' : ''} app`}>
      <div>
      <Header />
        <main>
          <TaskForm
            newTask={newTask.name}
            onAddTask={handleAddTask}
            onChangeNewTask={handleChangeNewTask}
            onSort={onSort}
            />
          <TaskList
            tasks={filteredTasks}
            onCompleteTask={handleCompleteTask}
            onDeleteTask={handleDeleteTask}
            itemsLeft={itemsLeft}
            onClearCompleted={handleClearCompleted}
            onDragEnd={onDragEnd}
            onEditTask={handleEditTask}
          />
          <div className='summary-filters-wrapper'>
            <TaskSummary itemsLeft={itemsLeft} onClearCompleted={handleClearCompleted} />
            <TaskFilters onChangeFilter={handleChangeFilter} filter={filter} />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default App
