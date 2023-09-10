import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { selectUserEmail, selectUserName } from 'redux/auth/authSelectors';
import styles from './MenuContainer.module.css';

const MenuContainer = ({ anchorEl, onCloseMenu }) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail); 

  const handleMenuItemClick = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.menu}>
      <div>
        <p className={styles.userName}>Hello, {userName}</p>
        <p className={styles.userEmail}>{userEmail ? userEmail : 'test-user@gmail.com'}</p>
      </div>
      <hr className={styles.divider} />
      <button className={styles.logoutButton} onClick={handleMenuItemClick}>
        Logout
      </button>
    </div>
  );
};

export default MenuContainer;

