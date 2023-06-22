export function TaskFilters ({ onChangeFilter }) {
  return (
        <div className="filters-container" onClick={onChangeFilter} >
            <button value={'all'}>All</button>
            <button value={'active'}>Active</button>
            <button value={'completed'}>Completed</button>
        </div>
  )
}
