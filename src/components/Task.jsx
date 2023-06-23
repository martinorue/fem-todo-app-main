import { useId } from 'react'
import iconCross from '../assets/images/icon-cross.svg'

export function Task ({ task, onCompleteTask, onDeleteTask }) {
  const taskId = useId()
  return (
    <li className='task'>
        <label className='task-label' htmlFor={taskId}>
            <input type='checkbox' id={taskId} onChange={onCompleteTask} checked={task.completed} />
            <span className={`${task.completed ? 'task--completed' : ''}`}>{task.name}</span>
        </label>
        <button className='button-delete-task' onClick={() => onDeleteTask(task.id)}>
          <img src={iconCross} />
        </button>
    </li>
  )
}
