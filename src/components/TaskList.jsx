import { Task } from './Task'
import { TaskSummary } from './TaskSummary'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
export function TaskList ({ tasks, onCompleteTask, onDeleteTask, itemsLeft, onClearCompleted, onDragEnd }) {
  return (
  <form className='task-list-form' onSubmit={(event) => event.preventDefault()}>
      <ul>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='tasks'>
            {(provided) => (
              <section {...provided.droppableProps} ref={provided.innerRef}>
                {tasks?.map((task, index) =>
                <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                  {(provided) => (
                    <article
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}>
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
