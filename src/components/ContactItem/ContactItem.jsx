import React from 'react';
import PropTypes from 'prop-types';

import { AiFillDelete } from "react-icons/ai";
import styles from './ContactItem.module.css'; 

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <p>{name}:</p>
      <p>{number}</p>
      <button
        aria-label="delete"
        onClick={() => dispatch(deleteContact(id))}
      > Delete
        <AiFillDelete />
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
