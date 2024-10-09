import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CodeBlockComponent from '../uiUtilities.jsx/codeBlock/CodeBlock';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

const handleSubmit = (values) => {
  console.log('Registration form submitted with values:', values);
};

const RegistrationFormSlide = () => (
  <div>
    <div className="content-container">
      <img src="/assets/react.png" alt="React Logo" />

      <div className="tech-integration">
        <img src="/assets/formik.png" alt="Formik Logo" />
        <img src="/assets/yup.png" alt="Yup Logo" />
      </div>

      <h2>Registration Form</h2>
      <p>The registration form uses <strong>Formik</strong> to manage form state and <strong>Yup</strong> for validation.</p>
      <p>Formik helps manage form state while Yup enforces validation rules for required fields.</p>

      <h3>Yup Validation Schema:</h3>
      <CodeBlockComponent code={`const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});`} />

      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='form'>
            <label htmlFor="username" style={{ fontWeight: 'bold' }}>Username</label>
            <Field name="username" placeholder="Enter your username" />
            <ErrorMessage name="username" component="div" style={{ color: 'red', fontSize: '12px' }} />

            <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email</label>
            <Field name="email" type="email" placeholder="Enter your email" />
            <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '12px' }} />

            <label htmlFor="password" style={{ fontWeight: 'bold' }}>Password</label>
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
                marginTop: '10px'
              }}
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>

      <h3 style={{ marginTop: '20px' }}>Formik Example:</h3>
      <CodeBlockComponent code={`<Formik
  initialValues={{ username: '', email: '', password: '' }}
  validationSchema={validationSchema}
  onSubmit={handleSubmit}
>
  <Form>
    <Field name="username" />
    <ErrorMessage name="username" />
    <Field name="email" />
    <ErrorMessage name="email" />
    <Field name="password" type="password" />
    <ErrorMessage name="password" />
    <button type="submit">Register</button>
  </Form>
</Formik>`} />

    </div>
  </div>
);

export default RegistrationFormSlide;
