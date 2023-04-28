import { addFilter } from 'redux/filterSlicer';
import { useDispatch } from 'react-redux';

import css from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();

  return (
    <label className={css.filterEl}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={e => dispatch(addFilter(e.currentTarget.value))}
        className={css.filterInput}
      />
    </label>
  );
}

export default Filter;
