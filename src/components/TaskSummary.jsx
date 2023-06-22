export function TaskSummary ({ itemsLeft, onClearCompleted }) {
  return (
          <div className="task-summary-container">
              <span>{`${itemsLeft} ${itemsLeft === 1 ? 'item' : 'items'} left`}</span>
              <button onClick={onClearCompleted}>Clear Completed</button>
          </div>
  )
}
