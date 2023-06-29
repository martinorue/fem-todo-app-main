import iconSortAlpha from '../assets/images/sort-a-z.svg'
import iconSortDownUp from '../assets/images/sort-down-up.svg'

export function TaskSort ({ onSort }) {
  return (
    <aside className='sort-buttons-wrapper'>
        <button onClick={onSort} className='button-sort' value={'alphabetical'}>
            <img className='button-sort__icon-alpha' src={iconSortAlpha} alt='sort alphabetically icon'/>
        </button>
        <button onClick={onSort} className='button-sort' value={'reverse'}>
            <img className='button-sort__icon-down-up' src={iconSortDownUp} alt='revert order icon'/>
        </button>
    </aside>
  )
}
