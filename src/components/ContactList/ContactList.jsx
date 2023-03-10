import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getContacts, deleteContact } from 'redux/contactsSlice';
import styles from './ContactList.module.scss';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

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
