import { Task } from './Task'

export function TaskList ({ tasks }) {
  return (
    <div>
        <form>
            <ul>
                {tasks.map(task => <Task key={task.id} task={task} />)}
            </ul>
        </form>
    </div>
  )
}
