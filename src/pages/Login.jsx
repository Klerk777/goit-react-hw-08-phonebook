import { Helmet } from 'react-helmet-async';
import { LoginForm } from '../components/LoginForm/LoginForm';

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </>
  );
}
