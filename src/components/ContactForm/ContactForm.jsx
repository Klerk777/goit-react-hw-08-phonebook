import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'shared/Button/Button';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import styles from './ContactForm.module.scss';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmitForm = e => {
    e.preventDefault();
    const normalizedName = name.toLowerCase();
    if (
      contacts.some(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (contacts.some(contact => contact.number === number)) {
      alert('This phone number already exists');
      return;
    }

    const newContact = {
      name,
      number,
    };

    dispatch(addContact(newContact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmitForm}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          placeholder="enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onInputChange}
        />
      </label>

      <label>
        Phone number
        <input
          type="tel"
          name="number"
          value={number}
          placeholder="enter phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onInputChange}
        />
      </label>

      <Button text="Add contact" />
    </form>
  );
}
