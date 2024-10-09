// src/components/slides/CommentingAndLikingSlide.jsx
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const samplePosts = [
    { id: 1, username: "Alice", content: "First post - Hello World!", likes: 2, comments: ["Nice post!", "Welcome!"] },
];

const CommentingAndLikingSlide = () => {
    const [likeCounts, setLikeCounts] = useState(samplePosts.map(post => post.likes));
    const [comments, setComments] = useState(samplePosts.map(post => post.comments));

    const handleLike = (index) => {
        const newLikeCounts = [...likeCounts];
        newLikeCounts[index] += 1;
        setLikeCounts(newLikeCounts);
    };

    const handleComment = (index, newComment) => {
        const updatedComments = [...comments];
        updatedComments[index].push(newComment);
        setComments(updatedComments);
    };

    return (
        <div>
            <h2>Commenting and Liking</h2>
            <p>Users can comment on posts or like them. Comments and likes are updated in real-time.</p>

            <div className="posts-section">
                {samplePosts.map((post, index) => (
                    <div key={post.id} className="post-card">
                        <p><strong>{post.username}</strong></p>
                        <p>{post.content}</p>

                        <Formik
                            initialValues={{ comment: '' }}
                            validationSchema={Yup.object({
                                comment: Yup.string().required('Comment cannot be empty')
                            })}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                handleComment(index, values.comment);
                                resetForm();
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
                                </Form>
                            )}
                        </Formik>

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

                        <div className="comments-section">
                            <h4>Comments</h4>
                            {comments[index].map((comment, i) => (
                                <p key={i}>{comment}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentingAndLikingSlide;
