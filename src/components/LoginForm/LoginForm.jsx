import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { selectIsRefreshed } from 'redux/auth/authSelectors';
import Loader from '../Loader/Loader';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [passwordError, setPasswordError] = useState(false);
  const isRefreshed = useSelector(selectIsRefreshed);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (password.length < 8) {
      setPasswordError(true);
      return;
    }

    setPasswordError(false);
    dispatch(login({ email, password }));
    setFormData({ email: '', password: '' });
  };

  return (
    <>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              sx={{ mb: 2 }}
            />
          </div>
          <div>
            <label htmlFor="password">Password *</label>
            <input
              id="password"
              error={passwordError}
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              sx={{ mb: 2 }}
            />
          </div>
          {passwordError && (
            <p>
              Password must be at least 8 characters long.
            </p>
          )}
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

