import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CodeBlockComponent from '../uiUtilities.jsx/codeBlock/CodeBlock';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required')
});

const handleLogin = (values) => {
  console.log('Login attempted with values:', values);
};

const LoginFormSlide = () => (
  <div>
    <div className="content-container">
      <img src="/assets/react.png" alt="React Logo" />

      <div className="tech-integration">
        <img src="/assets/formik.png" alt="Formik Logo" />
        <img src="/assets/yup.png" alt="Yup Logo" />
      </div>

      <h2>Login Form</h2>
      <p>The login form is similarly handled with <strong>Formik</strong> for state and <strong>Yup</strong> for validation.</p>

      <h3>Validation Schema:</h3>
      <CodeBlockComponent code={`const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required')
});`} />

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ isSubmitting }) => (
          <Form style={{ textAlign: 'center', color: 'black', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', width: '400px', margin: '0 auto', background: '#f9f9f9' }}>
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
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </Form>
        )}
      </Formik>

      <h3 style={{ marginTop: '20px' }}>Formik Example:</h3>
      <CodeBlockComponent code={`<Formik
  initialValues={{ email: '', password: '' }}
  validationSchema={validationSchema}
  onSubmit={handleLogin}
>
  <Form>
    <Field name="email" />
    <ErrorMessage name="email" />
    <Field name="password" type="password" />
    <ErrorMessage name="password" />
    <button type="submit">Login</button>
  </Form>
</Formik>`} />

    </div>
  </div>
);

export default LoginFormSlide;
