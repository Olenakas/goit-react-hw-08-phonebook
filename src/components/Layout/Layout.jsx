import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Appbar from '../Appbar/Appbar';
import AppFooter from '../AppFooter/AppFooter';
import Loader from '../Loader/Loader';

const Layout = () => {
  return (
    <>
      <Appbar />
      <main>
        <Suspense>
          <Outlet fallback={<Loader />} />
        </Suspense>
      </main>
      <AppFooter />
    </>
  );
};

export default Layout;
