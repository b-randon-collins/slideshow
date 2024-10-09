import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema for forms
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  postContent: Yup.string().required('Post content is required'),
  comment: Yup.string().required('Comment cannot be empty')
});



const UserStoriesSlide = () => {


  return (
    <div>
      <h3>User Stories / Walkthrough</h3>
      <p>Let's examine how users interact with the application through key steps in their journey:</p>
    <br/>
      <h3>User Registration</h3>
      <p>New users can register by filling out this form.</p>
      <br/>
      <h3>User Login</h3>
      <p>Returning users log in using their credentials.</p>
      <br/>
      <h3>Create a New Post</h3>
      <p>The post creation form also leverages <strong>Formik</strong> and <strong>Yup</strong> for state management and validation.</p>
      <br/>
      <h2>View Main Feed</h2>
      <p>The main feed shows all posts from users. Posts have like buttons and comment sections.</p>
      <h2>View Profile</h2>
      <p>The users vie profile shoes all post form logged in user. The user can edit their bio.</p>
      <h2>Commenting and Liking</h2>
      <p>Users can comment on posts or like them. </p>


      <br/>



    </div>
  );
};

export default UserStoriesSlide;
