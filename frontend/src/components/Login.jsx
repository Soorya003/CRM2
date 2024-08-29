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
      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
          <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?ga=GA1.1.717387301.1724856270&semt=ais_hybrid"
                className="img-fluid" alt="Sample image" />
                </div>

    </div>
  );
};

export default Login;
