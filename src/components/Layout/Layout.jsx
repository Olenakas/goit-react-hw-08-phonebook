import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Appbar from '../Appbar/Appbar';
import AppFooter from '../AppFooter/AppFooter';
import Loader from '../Loader/Loader';
import styles from './Layout.module.css'; 

const Layout = () => {
  return (
    <div className={styles.container}> 
      <Appbar />
      <main>
        <Suspense>
          <Outlet fallback={<Loader />} />
        </Suspense>
      </main>
      <AppFooter />
    </div>
  );
};

export default Layout;

