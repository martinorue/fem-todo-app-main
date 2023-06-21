export function TaskForm ({ newTask, onAddTask, onChangeNewTask }) {
  return (
        <form onSubmit={onAddTask}>
            <span className="new-task-icon"></span>
            <input placeholder="Create a new todo..." className="new-task-input"
            value={newTask.name} onChange={onChangeNewTask} />
        </form>
  )
}
