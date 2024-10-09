import React from 'react';
import CodeBlockComponent from '../../uiUtilities.jsx/codeBlock/CodeBlock';

const ViewMainFeedSlide = () => {
  const feedExample = `const PostList = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    // Fetch posts from the API
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};`;

  return (
    <div>
      <h2>View Main Feed</h2>
      <p>The main feed displays posts from users, allowing for an engaging interaction.</p>

      <h3>Post List Component:</h3>
      <CodeBlockComponent code={feedExample} />

      <p>This component fetches posts from the server and displays them in a list format.</p>
    </div>
  );
};

export default ViewMainFeedSlide;
