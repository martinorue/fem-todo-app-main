export function TaskFilters ({ onChangeFilter, filter }) {
  return (
        <form className="filters-container" >
          <label className={filter === 'all' ? 'radio-checked' : ''}>
            <input name='filter' type="radio" value='all' checked={filter === 'all'} onChange={onChangeFilter} />All
          </label>
          <label className={filter === 'active' ? 'radio-checked' : ''}>
            <input name='filter' type="radio" value='active' checked={filter === 'active'} onChange={onChangeFilter} />Active
          </label>
          <label className={filter === 'completed' ? 'radio-checked' : ''}>
            <input name='filter' type="radio" value='completed' checked={filter === 'completed'} onChange={onChangeFilter} />Completed
          </label>
        </form>
  )
}
