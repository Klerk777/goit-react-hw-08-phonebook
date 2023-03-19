import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import styles from './RegisterForm.module.scss';
import Section from '../../shared/Section/Section';
import Button from 'shared/Button/Button';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Section title="Register new user" level="2">
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={styles.label}>
          Username
          <input
            type="text"
            name="name"
            placeholder="enter user name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={styles.label}>
          Email
          <input
            type="email"
            name="email"
            placeholder="enter email"
            title="Please enter your valid, existing email"
            required
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            type="password"
            name="password"
            placeholder="enter password"
            title="Password must be at least 8 characters long"
            required
          />
        </label>
        <Button text="Register" />
      </form>
    </Section>
  );
};
