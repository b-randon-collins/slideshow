// src/components/slides/UserLoginSlide.jsx
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const handleUserLogin = (values) => {
  console.log('User logged in:', values);
};

const UserLoginSlide = () => (
  <div>
    <h2>User Login</h2>
    <p>The user logs in with their credentials and gets redirected to the home page (main feed).</p>

    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleUserLogin}
    >
      {({ isSubmitting }) => (
        <Form className={"form"}>
          <label htmlFor="username">Username</label>
          <Field name="username" type="text" placeholder="Enter your username" />
          <ErrorMessage name="username" component="div" style={{ color: 'red', fontSize: '12px' }} />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" placeholder="Enter your password" />
          <ErrorMessage name="password" component="div" style={{ color: 'red', fontSize: '12px' }} />

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer',
              marginTop: '10px',
            }}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default UserLoginSlide;
