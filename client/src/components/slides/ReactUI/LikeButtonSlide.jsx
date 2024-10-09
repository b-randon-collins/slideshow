import React from 'react';
import CodeBlockComponent from '../../uiUtilities.jsx/codeBlock/CodeBlock';

const LikeButtonSlide = () => {
  const likeButtonExample = `const LikeButton = ({ postId }) => {
  const [likes, setLikes] = React.useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
    // Call API to update the like count in the backend
    fetch(\`/api/posts/\${postId}/like\`, { method: 'POST' });
  };

  return (
    <button onClick={handleLike}>
      Like {likes > 0 && \`(\${likes})\`}
    </button>
  );
};`;

  return (
    <div>
      <h2>Like Button</h2>
      <p>Users can like posts, enhancing user engagement.</p>

      <h3>Like Button Component:</h3>
      <CodeBlockComponent code={likeButtonExample} />

      <p>This component tracks the number of likes and updates both the state and the backend.</p>
    </div>
  );
};

export default LikeButtonSlide;
