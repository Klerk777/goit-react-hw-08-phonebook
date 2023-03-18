import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { fetchContacts } from '../redux/contacts/operations';
import Section from 'shared/Section/Section';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import {
  selectIsLoading,
  selectError,
  selectContacts,
} from '../redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Section title="Add new contact" level="2">
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
    </>
  );
}
