import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/contactsSelectors';
import styles from './ContactList.module.css'; 

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isNotEmptyList = contacts?.length > 0;


  const contactFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  return (
    <ul className={styles.list}>
      {isNotEmptyList &&
        contactFilter().map(contact => {
          return <ContactItem key={contact.id} contact={contact} />;
        })}
    </ul>
  );
};

export default ContactList;
