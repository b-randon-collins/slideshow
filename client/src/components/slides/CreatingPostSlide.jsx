import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CodeBlockComponent from '../uiUtilities.jsx/codeBlock/CodeBlock';

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  content: Yup.string().required('Content is required')
});

const handlePostCreation = (values) => {
  console.log('Post creation attempted with values:', values);
};

const CreatingPostFormSlide = () => (
  <div>
    <div className="content-container">
      <div className="tech-integration">
        <img src="/assets/formik.png" alt="Formik Logo" />
        <img src="/assets/yup.png" alt="Yup Logo" />
      </div>

      <h2>Create a New Post</h2>
      {/* <p>The post creation form also leverages <strong>Formik</strong> and <strong>Yup</strong> for state management and validation.</p> */}

      <p>Users create a post by filling in the following form:</p>
      <Formik
        initialValues={{ postContent: '' }}
        validationSchema={Yup.object({
          postContent: Yup.string().required('Post content is required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className='form'>
            <label htmlFor="postContent" style={{ fontWeight: 'bold' }}>Post Content</label>
            <Field name="postContent" as="textarea" placeholder="Write something..." />
            <ErrorMessage name="postContent" component="div" style={{ color: 'red', fontSize: '12px' }} />

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
              {isSubmitting ? 'Posting...' : 'Create Post'}
            </button>
          </Form>
        )}
      </Formik>

    </div>
  </div>
);

export default CreatingPostFormSlide;
