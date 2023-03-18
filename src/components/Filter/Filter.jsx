import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/filterSlice';
import { selectFilter } from '../../redux/contacts/selectors';

import styles from './Filter.module.scss';

const Filter = () => {
  const filter = useSelector(selectFilter);
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
