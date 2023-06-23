import { Task } from './Task'
import { TaskSummary } from './TaskSummary'

export function TaskList ({ tasks, onCompleteTask, onDeleteTask, itemsLeft, onClearCompleted }) {
  return (
        <form className='task-list-form' onSubmit={(event) => event.preventDefault()}>
            <ul>
                {tasks?.map(task =>
                <Task key={task.id}
                task={task}
                onCompleteTask={() => onCompleteTask(task.id)}
                onDeleteTask={onDeleteTask}
                />)}
            </ul>
            <TaskSummary itemsLeft={itemsLeft} onClearCompleted={onClearCompleted} />
        </form>
  )
}
