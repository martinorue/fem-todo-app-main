import { Menu } from './Menu'
export function TaskForm ({ newTask, onAddTask, onChangeNewTask, onSort }) {
  return (
        <form className='new-task-form' onSubmit={onAddTask}>
            <span className="new-task-icon"></span>
            <input placeholder="Create a new todo..." className="new-task-input"
            value={newTask} onChange={onChangeNewTask} />
            <Menu onSort={onSort}/>
        </form>
  )
}
