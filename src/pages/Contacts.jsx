import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';

import { Container } from '@mui/material';

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import Loader from '../components/Loader/Loader';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container className="container" maxWidth="sm" sx={{ pt: 2, pb: 2 }}>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {!error && <ContactList />}
        {isLoading && !error && <Loader />}
      </Container>
    </>
  );
};

export default Contacts;