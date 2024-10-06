import React from 'react';

const ReactFileStructureSlide = () => (
    <div>
        <h2>React File Structure</h2>
        <pre>
            <code>
                /src<br />
                &nbsp;&nbsp;&nbsp;&nbsp;/components<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Navbar.js - Navigation bar for the app<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PostList.js - Displays list of posts<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PostItem.js - Individual post with options to comment, like, etc.<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CommentSection.js - Displays comments on a post<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Profile.js - User profile page with details and posts<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CreatePostForm.js - Form to create a new post<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LoginForm.js - User login form<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SignupForm.js - User registration form<br />
                &nbsp;&nbsp;&nbsp;&nbsp;/pages<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home.js - Main feed displaying posts from all users<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ProfilePage.js - Page for viewing individual profiles<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PostDetailsPage.js - Page for viewing individual post details<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CreatePostPage.js - Page with form for creating new posts<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LoginPage.js - Login page<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SignupPage.js - Signup page<br />
                &nbsp;&nbsp;&nbsp;&nbsp;/redux<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;store.js - Redux store setup<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;userSlice.js - Redux slice for user authentication and data<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;postSlice.js - Redux slice for handling posts state<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;commentSlice.js - Redux slice for handling comments state<br />
                &nbsp;&nbsp;&nbsp;&nbsp;/api<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;api.js - Axios setup for API requests<br />
                &nbsp;&nbsp;&nbsp;&nbsp;/utils<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;validationSchema.js - Yup validation schema for forms<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;socket.js - Setup for Socket.IO client-side<br />
                &nbsp;&nbsp;&nbsp;&nbsp;App.js - Main app component<br />
                &nbsp;&nbsp;&nbsp;&nbsp;index.js - Entry point for React app<br />
            </code>
        </pre>
    </div>
);

export default ReactFileStructureSlide;