import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CodeBlockComponent from '../../uiUtilities.jsx/codeBlock/CodeBlock';

const CommentBlockSlide = () => {
  const commentSchema = Yup.object({
    comment: Yup.string().required('Comment is required'),
  });

  const handleCommentSubmit = (values) => {
    console.log('Comment submitted:', values);
    // API call to submit the comment
  };

  const commentExample = `<Formik
  initialValues={{ comment: '' }}
  validationSchema={commentSchema}
  onSubmit={handleCommentSubmit}
>
  {({ isSubmitting }) => (
    <Form>
      <Field name="comment" placeholder="Write a comment..." />
      <ErrorMessage name="comment" component="div" style={{ color: 'red' }} />
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  )}
</Formik>`;

  return (
    <div>
      <h2>Comment Block</h2>
      <p>Users can leave comments on posts to express their thoughts and feedback.</p>

      <h3>Comment Form Example:</h3>
      <CodeBlockComponent code={commentExample} />

      <p>This form allows users to submit comments, which will be displayed under each post.</p>
    </div>
  );
};

export default CommentBlockSlide;
