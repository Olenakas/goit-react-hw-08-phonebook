import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Appbar.module.css'; 

const Appbar = () => {
  return (
    <header className="appBar">
      <div className="container">
        <Link to="/">
          <h1 className="Logo">Phonebook</h1>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Appbar;


