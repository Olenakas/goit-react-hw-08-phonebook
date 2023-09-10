import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { selectIsRefreshed } from 'redux/auth/authSelectors';
import Loader from '../Loader/Loader';
import styles from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [passwordError, setPasswordError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isRefreshed = useSelector(selectIsRefreshed);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);

      dispatch(register({ name, email, password }));

      setName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <>
      <div className={styles.registerWrapper}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={handleChange}              
              pattern="^([A-Za-z'-]{1,50})|([А-Яа-я'-]{1,50})$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              sx={{ mb: 2 }}
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              pattern="^[\w\.\-]+@([\w\-]+\.)+[\w\-]{2,4}$"
              title="Email may contain only letters, apostrophe, dash and spaces."
              required
              sx={{ mb: 2 }}
            />
          </div>
          <div>
            <label htmlFor="password">Password *</label>
            <input
              aria-invalid={passwordError ? 'true' : 'false'}
              aria-describedby={passwordError ? 'password-error' : null}
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
          </div>
          {passwordError && (
            <p id="password-error">
              Password must be at least 8 characters long.
            </p>
          )}
          <button variant="contained" type="submit">
            Sign up
          </button>
        </form>
      </div>
      {isRefreshed && <Loader />}
    </>
  );
};

export default RegisterForm;

