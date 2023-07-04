import { useId } from 'react'
import { Menu } from './Menu'
export function TaskForm ({ newTask, onAddTask, onChangeNewTask, onSort }) {
  const inputId = useId()
  return (
        <form className='new-task-form'
              onSubmit={onAddTask}
              onKeyDown={(e) => { e.key === 'Enter' && e.stopPropagation() }}>
            <span className="new-task-icon"></span>
            <input
              placeholder="Create a new todo..."
              className="new-task-input"
              value={newTask}
              onChange={onChangeNewTask}
              id={inputId} />
            <Menu onSort={onSort}/>
        </form>
  )
}
