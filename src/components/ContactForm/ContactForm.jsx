import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;

    if (contacts.some((contact) => contact.name === name)) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          pattern="^([A-Za-zА-Яа-я'\- ]{1,50})$"
          title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          sx={{ mb: 2 }}
        />
      </div>
      <div>
        <label htmlFor="tel">Number:</label>
        <input
          id="tel"
          name="number"
          label="Number"
          variant="outlined"
          title="Please enter a valid phone number"
          required
          sx={{ mb: 2 }}
        />
      </div>
      <button
        variant="contained"
        type="submit"
        sx={{
          mb: 4,
          color: '#FFD700',
          fontWeight: '700',
          bgcolor: '#0057B8',
        }}
      >
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
