import { useDispatch } from 'react-redux';
import Button from 'shared/Button/Button';
import Section from '../../shared/Section/Section';
import { logIn } from '../../redux/auth/operations';
import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Section title="Log into your account" level="2">
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={styles.label}>
          Email
          <input type="email" name="email" placeholder="enter email" />
        </label>
        <label className={styles.label}>
          Password
          <input type="password" name="password" placeholder="enter password" />
        </label>
        <Button text="Log in" />
      </form>
    </Section>
  );
};
