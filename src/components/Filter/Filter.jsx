import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, getFilter } from 'redux/contactsSlice';

import styles from './Filter.module.scss';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label className={styles.filter}>
      Filter
      <input
        type="text"
        name="filter"
        placeholder="add a filter to sort contacts"
        value={filter}
        onChange={onChangeFilter}
      />
    </label>
  );
};

export default Filter;
