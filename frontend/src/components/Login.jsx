import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../redux/userSlice';
import { login } from '../services/api';

const Login = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: async (values) => {
      try {
        const response = await login(values);
        dispatch(setUserInfo(response.data));
        window.location.href = '/dashboard';
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
