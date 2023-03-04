import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Section from 'components/Section/Section';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from '../Filter/Filter';
import styles from './App.module.scss';

export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = (name, number) => {
    const normalizedName = name.toLowerCase();

    if (
      contacts.some(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (contacts.some(contact => contact.number === number)) {
      alert('This number already exists');
      return;
    }

    const contact = {
      id: nanoid(7),
      name,
      number,
    };

    setContacts(prev => [...prev, contact]);
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className={styles.appContainer}>
      <Section title="myPhonebook" level="1">
        <ContactForm onSubmit={addNewContact} />
      </Section>
      <Section title="Contacts" level="2">
        {contacts.length > 0 ? (
          <Filter value={filter} onChangeFilter={changeFilter} />
        ) : (
          <p>There are no contacts yet</p>
        )}
        <ContactList
          contacts={filteredContacts}
          onClickHandler={deleteContact}
        />
      </Section>
    </div>
  );
}
