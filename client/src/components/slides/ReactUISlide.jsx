import React from 'react';
import CodeBlockComponent from '../uiUtilities.jsx/codeBlock/CodeBlock';

const ReactUISlide = () => {
  return (
    <div>
      <h2>React UI Overview</h2>
      <p>
        In our React application, we leverage several powerful libraries and tools to enhance the user interface and manage application state effectively. Here's how we integrate them:
      </p>

      <h3>1. Formik & Yup</h3>
      <p>
        Formik is used to manage form state in React applications, making it easier to handle form submissions and validation. We use Yup for schema validation, ensuring that the data entered by users is in the correct format.
      </p>
      <CodeBlockComponent code={`import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const MyForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
  });

  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle form submission
        console.log(values);
      }}
    >
      {() => (
        <Form>
          <Field name="name" placeholder="Name" />
          <ErrorMessage name="name" component="div" />
          <Field name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};`} />

     

    </div>
  );
}

export default ReactUISlide;