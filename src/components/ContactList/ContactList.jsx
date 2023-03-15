import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

import styles from './ContactList.module.scss';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(({ id, name, phone }) => (
        <li key={id}>
          <span className={styles.name}>{name}</span>
          <span className={styles.number}>{phone}</span>
          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
