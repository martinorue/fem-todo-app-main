import { useId, useState } from 'react'
import iconCross from '../assets/images/icon-cross.svg'
import EasyEdit, { Types } from 'react-easy-edit'

export function Task ({ task, onCompleteTask, onDeleteTask, onEditTask }) {
  const [showBorder, setShowBorder] = useState(false)

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

  return (

    <li className='task'
    onMouseEnter={hoverEnter}
    onMouseLeave={hoverLeave}>
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
                attributes={{ name: 'awesome-input', id: 1 }}
                displayComponent={displayComponent}
              >
            </EasyEdit>
        <button className='button-delete-task' onClick={() => onDeleteTask(task.id)}>
          <img src={iconCross} />
        </button>
    </li>
  )
}
