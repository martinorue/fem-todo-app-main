import { useContext } from 'react'
import { Task } from './Task'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { ThemeContext } from '../context/ThemeContext'

export function TaskList ({ tasks, onCompleteTask, onDeleteTask, onDragEnd, onEditTask, onSort }) {
  const { isDark } = useContext(ThemeContext)
  const getItemStyle = (isDragging, draggableStyle) => {
    const background = isDark ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 98%)'
    const draggingBg = isDark ? 'hsl(235, 19%, 35%)' : 'hsl(236, 33%, 92%)'
    const styles = {
      listStyleType: 'none',
      // some basic styles to make the items look a bit nicer
      userSelect: 'none',

      // change background colour if dragging
      background: isDragging ? draggingBg : background,

      // styles we need to apply on draggables
      ...draggableStyle
    }
    return styles
  }

  const getListStyle = isDraggingOver => {
    const background = isDark ? 'hsl(235, 21%, 11%)' : 'hsl(0, 0%, 98%)'
    const styles = {
      background: isDraggingOver ? background : ''
    }

    return styles
  }
  return (
    <>
        <div className='list-container'>
          <form className='task-list-form' onSubmit={(event) => event.preventDefault()}>
            {tasks.length > 0
              ? <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId='tasks'>
                    {(provided, snapshot) => (
                      <section {...provided.droppableProps} ref={provided.innerRef}
                      style={getListStyle(snapshot.isDraggingOver)}>
                        {tasks?.map((task, index) =>
                        <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                          {(provided, snapshot) => (
                            <li
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              )}>
                              <div
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                role='button'
                                >
                              </div>
                              <Task
                                task={task}
                                onCompleteTask={() => onCompleteTask(task.id)}
                                onDeleteTask={onDeleteTask}
                                onEditTask={onEditTask}
                                />
                            </li>
                          )}
                        </Draggable>
                        )}
                        {provided.placeholder}
                      </section>
                    )}
                  </Droppable>
                </DragDropContext>
              : <p className='no-items-message'>No items on the list</p>
            }
          </form>
      </div>
    </>
  )
}
