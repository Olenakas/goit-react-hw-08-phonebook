import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthorized } from 'redux/auth/authSelectors';
import styles from './HomeContent.module.css'; 

const HomeContent = () => {
  const isRegistered = useSelector(selectIsAuthorized);

  return (
    <div className={styles.textHomeContent}>
      <p className={styles.inviteBoxText}>Welcome to the Phonebook</p>
 
      {!isRegistered && (
        <p className={styles.inviteAddText}>Please login or register to continue</p>
      )}
    </div>
  );
};

export default HomeContent;
