import React from 'react';
import CodeBlockComponent from '../uiUtilities.jsx/codeBlock/CodeBlock';
import ClassModelsSlideSQLiteModel from '../uiUtilities.jsx/models/ClassModelsSlideSQLiteModel';
import ClassModelsSlideSqlAlchemyModel from '../uiUtilities.jsx/models/ClassModelsSlideSqlAlchemyModel';

const PostRoutesSlide = ({ openModal }) => (
  <div id="post-routes-slide" className="slide-container">
    <div className="content-container">
      <div className="tech-integration">
        <img src="/assets/sqlalchemy.png" alt="SQLAlchemy Logo" 
          onClick={() => openModal(<ClassModelsSlideSqlAlchemyModel />)} />
        <img src="/assets/sqlite.png" alt="SQLite Logo" 
          onClick={() => openModal(<ClassModelsSlideSQLiteModel />)} />
      </div>

      <h2>Post API Routes</h2>

      <h3>GET /posts</h3>
      <p>Retrieves all posts from the database using the SQLAlchemy method <code>query.all()</code>.</p>
      <CodeBlockComponent code={`@posts_bp.route('/posts', methods=['GET'])
def get_posts():
    posts = Post.query.all()
    return jsonify([post.to_dict() for post in posts])`} />

      <h3>POST /posts</h3>
      <p>Creates a new post using SQLAlchemy's <code>add()</code> and <code>commit()</code> methods.</p>
      <CodeBlockComponent code={`@posts_bp.route('/posts', methods=['POST'])
def create_post():
    data = request.get_json()
    new_post = Post(**data)
    db.session.add(new_post)
    db.session.commit()
    return jsonify(new_post.to_dict())`} />
    </div>
  </div>
);

export default PostRoutesSlide;
