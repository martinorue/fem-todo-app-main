import { Task } from './Task'

export function TaskList ({ tasks, onCompleteTask }) {
  return (
        <form className='task-list-form' onSubmit={(event) => event.preventDefault()}>
            <ul>
                {tasks.map(task =>
                <Task key={task.id}
                task={task}
                onCompleteTask={() => onCompleteTask(task.id)} />)}
            </ul>
        </form>
  )
}
