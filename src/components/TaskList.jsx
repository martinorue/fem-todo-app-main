import { useContext } from 'react'
import { Task } from './Task'
import { TaskSummary } from './TaskSummary'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { ThemeContext } from '../context/ThemeContext'

export function TaskList ({ tasks, onCompleteTask, onDeleteTask, itemsLeft, onClearCompleted, onDragEnd }) {
  const { isDark } = useContext(ThemeContext)
  const getItemStyle = (isDragging, draggableStyle) => {
    const background = isDark ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 98%)'
    const draggingBg = isDark ? 'hsl(235, 19%, 35%)' : 'hsl(236, 33%, 92%)'
    const styles = {
      // some basic styles to make the items look a bit nicer
      userSelect: 'none',

      // change background colour if dragging
      background: isDragging ? draggingBg : background,

      // styles we need to apply on draggables
      ...draggableStyle
    }
    return styles
  }

  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'hsl(235, 21%, 11%)' : 'hsl(235, 21%, 11%'
  })
  return (
  <form className='task-list-form' onSubmit={(event) => event.preventDefault()}>
      <ul>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='tasks'>
            {(provided, snapshot) => (
              <section {...provided.droppableProps} ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}>
                {tasks?.map((task, index) =>
                <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                  {(provided, snapshot) => (
                    <article
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}>
                      <Task
                        task={task}
                        onCompleteTask={() => onCompleteTask(task.id)}
                        onDeleteTask={onDeleteTask}
                        />
                    </article>
                  )}
                </Draggable>
                )}
                {provided.placeholder}
              </section>
            )}
          </Droppable>

</DragDropContext>
      </ul>
      <TaskSummary itemsLeft={itemsLeft} onClearCompleted={onClearCompleted} />
  </form>
  )
}
