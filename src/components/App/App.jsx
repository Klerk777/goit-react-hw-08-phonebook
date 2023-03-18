import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from '../../redux/auth/operations';
import SharedLayout from '../SharedLayout/SharedLayout';
import { RestrictedRoute } from '../Route/RestrictedRoute';
import { PrivateRoute } from '../Route/PrivateRoute';
import { useAuth } from 'hooks/useAuth';
import styles from './App.module.scss';

const HomePage = lazy(() => import('../../pages/Home/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const Contacts = lazy(() => import('../../pages/Contacts'));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b className={styles.refreshingNote}>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
}
