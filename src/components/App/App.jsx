import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import Section from 'components/Section/Section';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from '../Filter/Filter';
import styles from './App.module.scss';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <div className={styles.appContainer}>
      <Section title="Phonebook" level="1">
        <ContactForm />
      </Section>
      <Section title="Contacts" level="2">
        {contacts.length > 0 ? <Filter /> : <p>There are no contacts yet</p>}
        <ContactList />
      </Section>
    </div>
  );
}
