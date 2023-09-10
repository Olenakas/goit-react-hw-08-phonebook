import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';


import styles from './Appbar.module.css';

const Appbar = () => {
  return (
    <header className={styles.appBar}>
      <div className={styles.container}>
        <Link to="/">
          <p className={styles.logo}>Phonebook</p>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Appbar;


