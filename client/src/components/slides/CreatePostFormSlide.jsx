// src/components/slides/CreatePostFormSlide.jsx
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CodeBlockComponent from '../uiUtilities.jsx/codeBlock/CodeBlock';
import ClassModelsSlideSQLiteModel from '../uiUtilities.jsx/models/ClassModelsSlideSQLiteModel';
import ClassModelsSlideSqlAlchemyModel from '../uiUtilities.jsx/models/ClassModelsSlideSqlAlchemyModel';

const validationSchema = Yup.object({
  content: Yup.string().required('Content is required')
});

const handleCreatePost = (values) => {
  console.log('Post created with content:', values.content);
};

const CreatePostFormSlide = ({ openModal }) => (
  <div>
    <div className="content-container">
      <img src="/assets/react.png" alt="React Logo" />

      <div className="tech-integration">
        <img 
          src="/assets/formik.png" 
          alt="Formik Logo" 
          onClick={() => openModal(<ClassModelsSlideSqlAlchemyModel />)} 
        />
        <img 
          src="/assets/yup.png" 
          alt="Yup Logo" 
          onClick={() => openModal(<ClassModelsSlideSQLiteModel />)} 
        />
      </div>

      <h2>Create Post Form</h2>
      <p>This form allows users to create a new post. Formik handles the form state, while Yup enforces validation on the content field.</p>

      <h3>Validation Schema:</h3>
      <CodeBlockComponent code={`const validationSchema = Yup.object({
  content: Yup.string().required('Content is required')
});`} />

      <Formik
        initialValues={{ content: '' }}
        validationSchema={validationSchema}
        onSubmit={handleCreatePost}
      >
        {({ isSubmitting }) => (
          <Form style={{ textAlign: 'center', color: 'black', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', width: '400px', margin: '0 auto', background: '#f9f9f9' }}>
            <label htmlFor="content" style={{ fontWeight: 'bold' }}>Post Content</label>
            <Field
              name="content"
              as="textarea"
              placeholder="What's on your mind?"
            />
            <ErrorMessage name="content" component="div" style={{ color: 'red', fontSize: '12px' }} />

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
              {isSubmitting ? 'Creating...' : 'Create Post'}
            </button>
          </Form>
        )}
      </Formik>

      <h3 style={{ marginTop: '20px' }}>Formik Example:</h3>
      <CodeBlockComponent code={`<Formik
  initialValues={{ content: '' }}
  validationSchema={validationSchema}
  onSubmit={handleCreatePost}
>
  <Form>
    <Field name="content" as="textarea" />
    <ErrorMessage name="content" />
    <button type="submit">Create Post</button>
  </Form>
</Formik>`} />
    </div>
  </div>
);

export default CreatePostFormSlide;
