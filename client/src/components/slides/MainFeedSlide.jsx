// src/components/slides/MainFeedSlide.jsx
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const samplePosts = [
    { id: 1, username: "Alice", content: "First post - Hello World!", likes: 2 },
    { id: 2, username: "Bob", content: "Second post - React is awesome!", likes: 5 },
    { id: 3, username: "Charlie", content: "Third post - Learning about UI and forms!", likes: 3 }
  ];

const MainFeedSlide = () => {

    const [likeCounts, setLikeCounts] = useState(samplePosts.map(post => post.likes));

    const handleLike = (index) => {
      const newLikeCounts = [...likeCounts];
      newLikeCounts[index] += 1;
      setLikeCounts(newLikeCounts);
    };
    return (

    <div>
         <h3>Viewing the Main Feed</h3>
         <p>The main feed shows all posts from users. Posts have like buttons and comment sections.</p>
      <p>Here is an example of the main feed displaying posts:</p>
      
      <div className="main-feed">
        {samplePosts.map((post, index) => (
          <div key={post.id} >
            <p><strong>{post.username}</strong></p>
            <p>{post.content}</p>
            

            <Formik
              initialValues={{ comment: '' }}
              validationSchema={Yup.object({
                comment: Yup.string().required('Comment cannot be empty')
              })}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form className='form'>
                  <Field name="comment" as="textarea" placeholder="Write a comment..." />
                  <ErrorMessage name="comment" component="div" style={{ color: 'red', fontSize: '12px' }} />
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
                    {isSubmitting ? 'Submitting...' : 'Comment'}
                  </button>
                  <p>Likes: {likeCounts[index]}</p>
            <button
              onClick={() => handleLike(index)}
              style={{ 
                marginTop: '10px', 
                backgroundColor: '#007BFF', 
                color: 'white', 
                padding: '5px 10px', 
                border: 'none', 
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Like
            </button>
                </Form>
              )}
            </Formik>
          </div>
        ))}
      </div>

    </div>
    )
};

export default MainFeedSlide;
