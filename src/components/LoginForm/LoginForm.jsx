
import { useState } from 'react';
import { passwordValidator } from 'utils/validators';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { selectIsRefreshed } from 'redux/auth/authSelectors';


import Loader from '../Loader/Loader';



const LoginForm = () => {
  const dispatch = useDispatch();
  const [passwordError, setPasswordError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isRefreshed = useSelector(selectIsRefreshed);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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

  const handleSubmit = e => {
    e.preventDefault();

    if (!passwordValidator(password)) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);

      dispatch(login({ email, password }));

      setEmail('');
      setPassword('');
    }
  };

  return (
    <>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            label="E-mail"
            name="email"
            variant="outlined"
            type="email"
            value={email}
            onChange={handleChange}
            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            title="Email may contain only letters, apostrophe, dash and spaces."
            required
            sx={{ mb: 2 }}
          />
          <input
            error={passwordError}
            label="Password *"
            name="password"
            variant="outlined"
            type="password"
            value={password}
            onChange={handleChange}
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            helperText={
              passwordError
                ? 'Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
                : ''
            }
            sx={{ mb: 2 }}
          />
          <button variant="contained" type="submit">
            Sign in
          </button>
        </form>
      </div>
      {isRefreshed && <Loader />}
    </>
  );
};

export default LoginForm;