import React from 'react';
import CodeBlockComponent from '../uiUtilities.jsx/codeBlock/CodeBlock';
import ClassModelsSlideSQLiteModel from '../uiUtilities.jsx/models/ClassModelsSlideSQLiteModel';
import ClassModelsSlideSqlAlchemyModel from '../uiUtilities.jsx/models/ClassModelsSlideSqlAlchemyModel';

const LikeRouteSlide = ({ openModal }) => (
  <div id="like-route-slide" className="slide-container">
    <div className="content-container">
      <div className="tech-integration">
        <img src="/assets/sqlalchemy.png" alt="SQLAlchemy Logo" 
          onClick={() => openModal(<ClassModelsSlideSqlAlchemyModel />)} />
        <img src="/assets/sqlite.png" alt="SQLite Logo" 
          onClick={() => openModal(<ClassModelsSlideSQLiteModel />)} />
      </div>

      <h2>Like Route</h2>
      <p>The "like" route handles liking posts.</p>

      <h3>POST /api/likes</h3>
      <p>Allows a user to like a post by creating a new "Like" record in the database using <code>add()</code> and <code>commit()</code>.</p>
      <CodeBlockComponent code={`@likes_blueprint.route('/api/likes', methods=['POST'])
def create_like():
    data = request.get_json()
    new_like = Like(user_id=data['user_id'], post_id=data['post_id'])
    db.session.add(new_like)
    db.session.commit()
    return jsonify(new_like.to_dict()), 201`} />
    </div>
  </div>
);

export default LikeRouteSlide;
