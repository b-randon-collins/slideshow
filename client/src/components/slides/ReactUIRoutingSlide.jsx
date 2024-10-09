import React from 'react';
import CodeBlockComponent from '../uiUtilities.jsx/codeBlock/CodeBlock';

const ReactUIRoutingSlide = () => {
  const routingExample = `<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/profile/:id" element={<ProfilePage />} />
  <Route path="/create-post" element={<CreatePostPage />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/signup" element={<SignupPage />} />
</Routes>`;

  return (
    <div>
      <h2>React UI Routing</h2>
      <p>The application uses <strong>React Router</strong> to navigate between different pages of the social network.</p>
      
      <h3>Key Pages:</h3>
      <ul>
        <li><strong>Home Page:</strong> Main feed displaying posts from users.</li>
        <li><strong>Profile Page:</strong> User profile with personal posts and information.</li>
        <li><strong>Create Post Page:</strong> Page to create a new post.</li>
        <li><strong>Login and Signup Pages:</strong> Authentication forms for users.</li>
      </ul>

      <h3>Routing Example:</h3>
      <CodeBlockComponent code={routingExample} />

      <p>Each route corresponds to a specific page, ensuring users can navigate through different features of the app.</p>

      <div className="tech-integration">
        <img src="/assets/react-router.png" alt="React Router Logo" />
        <img src="/assets/react.png" alt="React Logo" />
      </div>
    </div>
  );
};

export default ReactUIRoutingSlide;
