import { useId } from 'react'
import iconCross from '../assets/images/icon-cross.svg'
import EasyEdit, { Types } from 'react-easy-edit'

export function Task ({ task, onCompleteTask, onDeleteTask }) {
  const taskId = useId()
  const save = () => {
    console.log('save')
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

  return (

    <li className='task'>
        <label className='task-label' htmlFor={taskId}>
          <div className="checkbox-border-wrap">
            <input type='checkbox' id={taskId} onChange={onCompleteTask} checked={task.completed} />
          </div>
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
