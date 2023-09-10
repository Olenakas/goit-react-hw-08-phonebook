import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthorized } from 'redux/auth/authSelectors';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { NavLink } from 'react-router-dom'; 
import styles from './Navigation.module.css'; 

const Navigation = () => {
  const isAuthorized = useSelector(selectIsAuthorized);

  return (
    <>
      <nav>
        <NavLink to="/" className={styles.linkMenu}>          
        </NavLink>
        {isAuthorized && (
          <NavLink to="/contacts" className={styles.linkMenu}>
            Contacts
          </NavLink>
        )}
        {isAuthorized ? <UserMenu /> : <AuthNav />}
      </nav>
    </>
  );
};

export default Navigation;
