import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';

import styles from './ContactList.module.scss';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <span className={styles.name}>{name}</span>
          <span className={styles.number}>{number}</span>
          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
