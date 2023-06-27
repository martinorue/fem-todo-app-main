import { useId, useState } from 'react'
import iconCross from '../assets/images/icon-cross.svg'
import EasyEdit, { Types } from 'react-easy-edit'

export function Task ({ task, onCompleteTask, onDeleteTask }) {
  const [showBorder, setShowBorder] = useState(false)

  const taskId = useId()
  const save = (value) => {
    console.log('Saved value:', value)
  }
  const cancel = () => {
    console.log('cancel')
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

    <li className='task'>
        <label className='task-label' htmlFor={taskId}>
          {/* <div className="checkbox-border-wrap"> */}
            <input
                type='checkbox'
                id={taskId}
                onChange={onCompleteTask}
                checked={task.completed}
                onMouseEnter={hoverEnter}
                onMouseLeave={hoverLeave}
              />
              <div className={`${showBorder ? 'gradient-border-wrapper' : ''}`}>
                <div className={`${showBorder ? 'gradient-border' : ''}`}></div>
              </div>
          {/* </div> */}
        </label>
            {/* <span className={`${task.completed ? 'task--completed' : ''} task-text`}>{task.name}</span> */}
              <EasyEdit
                type={Types.TEXTAREA}
                saveOnBlur
                value={task.name}
                onSave={save}
                onCancel={cancel}
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
