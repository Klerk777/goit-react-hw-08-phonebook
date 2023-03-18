import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import styles from './SharedLayout.module.scss';

export const SharedLayout = () => {
  return (
    <div className={styles.appContainer}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
