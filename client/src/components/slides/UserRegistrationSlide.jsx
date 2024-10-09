// src/components/slides/UserRegistrationSlide.jsx
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation Schema for Registration Form
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

// Handle Submit Function
const handleSubmit = (values) => {
  console.log('User created:', values);
  // Simulate user creation success
  alert('User created successfully! You can now log in.');
};

const UserRegistrationSlide = () => {
  return (
    <div>
      <h2>User Registration</h2>
      <p>This form allows users to create a new account.</p>

      <h3>Registration Form Example:</h3>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form 
            className={"form"}
            > 
            <label htmlFor="username">Username</label>
            <Field name="username" placeholder="Enter your username" />
            <ErrorMessage name="username" component="div" style={errorStyle} />

            <label htmlFor="email">Email</label>
            <Field name="email" type="email" placeholder="Enter your email" />
            <ErrorMessage name="email" component="div" style={errorStyle} />

            <label htmlFor="password">Password</label>
            <Field name="password" type="password" placeholder="Enter your password" />
            <ErrorMessage name="password" component="div" style={errorStyle} />

            <button type="submit" disabled={isSubmitting} style={buttonStyle}>
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// Styles
const formStyle = {  };
const errorStyle = { color: 'red', fontSize: '12px' };
const buttonStyle = { padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '16px', cursor: 'pointer', marginTop: '10px' };

export default UserRegistrationSlide;
