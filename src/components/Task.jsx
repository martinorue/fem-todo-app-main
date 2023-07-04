import { useId, useState, useRef } from 'react'
import iconCross from '../assets/images/icon-cross.svg'
import EasyEdit, { Types } from 'react-easy-edit'

export function Task ({ task, onCompleteTask, onDeleteTask, onEditTask }) {
  const [showBorder, setShowBorder] = useState(false)
  const taskRef = useRef(null)

  const taskId = useId()
  const save = (value) => {
    if (value.trim() === task.name) return
    onEditTask(value, task.id)
  }

  const displayComponent = (
    <span className={`${task.completed ? 'task--completed' : ''} task-text`}
    >
      {task.name}
    </span>
  )

  const hoverEnter = () => {
    setShowBorder(true)
  }
  const hoverLeave = () => {
    setShowBorder(false)
  }

  const deleteTask = () => {
    taskRef.current.classList.add('task-deleted')
    setTimeout(() => onDeleteTask(task.id), 350)
  }

  return (
    <li className='task'
        ref={taskRef}
        onMouseEnter={hoverEnter}
        onMouseLeave={hoverLeave}
        >
        <label className='task-label' htmlFor={taskId} >
            <input
                type='checkbox'
                id={taskId}
                onChange={onCompleteTask}
                checked={task.completed}
              />
              <div className={`${showBorder ? 'gradient-border-wrapper' : ''}`}>
                <div className={`${showBorder ? 'gradient-border' : ''}`}></div>
              </div>
        </label>
              <EasyEdit
                type={Types.TEXTAREA}
                saveOnBlur
                value={task.name}
                onSave={save}
                attributes={{ name: 'awesome-input', id: `${taskId}-${task.name}` }}
                displayComponent={displayComponent}
              >
            </EasyEdit>
        <button className='button-delete-task' onClick={() => deleteTask(task.id)}>
          <img src={iconCross} alt='delete task'/>
        </button>
    </li>
  )
}
