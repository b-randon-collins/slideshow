import React from 'react';
import CodeBlockComponent from '../uiUtilities.jsx/codeBlock/CodeBlock';
import ClassModelsSlideSQLiteModel from '../uiUtilities.jsx/models/ClassModelsSlideSQLiteModel';
import ClassModelsSlideSqlAlchemyModel from '../uiUtilities.jsx/models/ClassModelsSlideSqlAlchemyModel';

const CommentRouteSlide = ({ openModal }) => (
  <div id="comment-route-slide" className="slide-container">
    <div className="content-container">
      <div className="tech-integration">
        <img src="/assets/sqlalchemy.png" alt="SQLAlchemy Logo" 
          onClick={() => openModal(<ClassModelsSlideSqlAlchemyModel />)} />
        <img src="/assets/sqlite.png" alt="SQLite Logo" 
          onClick={() => openModal(<ClassModelsSlideSQLiteModel />)} />
      </div>

      <h2>Comment Route</h2>
      <p>The "comment" route handles the creation and retrieval of comments on posts.</p>

      <h3>POST /api/comments</h3>
      <p>Allows a user to comment on a post by creating a new "Comment" record in the database using <code>add()</code> and <code>commit()</code>.</p>
      <CodeBlockComponent code={`@comments_blueprint.route('/api/comments', methods=['POST'])
def create_comment():
    data = request.get_json()
    new_comment = Comment(user_id=data['user_id'], post_id=data['post_id'], text=data['text'])
    db.session.add(new_comment)
    db.session.commit()
    return jsonify(new_comment.to_dict()), 201`} />
    </div>
  </div>
);

export default CommentRouteSlide;
