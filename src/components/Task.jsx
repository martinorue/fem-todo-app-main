import { useId } from 'react'
export function Task ({ task }) {
  const taskId = useId()
  return (
    <li>
        <label htmlFor={taskId}>
            <input type='checkbox' id={taskId} />
            <span>{task.name}</span>
        </label>
    </li>
  )
}
