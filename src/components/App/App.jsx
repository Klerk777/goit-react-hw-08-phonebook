import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/operations';
import {
  selectIsLoading,
  selectError,
  selectContacts,
} from '../../redux/selectors';
import Section from 'components/Section/Section';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from '../Filter/Filter';
import styles from './App.module.scss';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.appContainer}>
      <Section title="Phonebook" level="1">
        <ContactForm />
      </Section>
      <Section title="Contacts" level="2">
        {isLoading && !error && <b>Request in progress...</b>}
        {!isLoading && contacts.length > 0 && <Filter />}
        {!isLoading && contacts.length === 0 && (
          <p>There are no contacts yet</p>
        )}
        <ContactList />
      </Section>
    </div>
  );
}
