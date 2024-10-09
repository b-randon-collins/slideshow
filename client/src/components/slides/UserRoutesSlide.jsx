import React from 'react';
import CodeBlockComponent from '../uiUtilities.jsx/codeBlock/CodeBlock';
import ClassModelsSlideSQLiteModel from '../uiUtilities.jsx/models/ClassModelsSlideSQLiteModel';
import ClassModelsSlideSqlAlchemyModel from '../uiUtilities.jsx/models/ClassModelsSlideSqlAlchemyModel';

const UserRoutesSlide = ({ openModal }) => (
  <div id="user-routes-slide" className="slide-container">
    <div className="content-container">
      <div className="tech-integration">
        <img src="/assets/sqlalchemy.png" alt="SQLAlchemy Logo" 
          onClick={() => openModal(<ClassModelsSlideSqlAlchemyModel />)} />
        <img src="/assets/sqlite.png" alt="SQLite Logo" 
          onClick={() => openModal(<ClassModelsSlideSQLiteModel />)} />
      </div>

      <h2>User API Routes</h2>

      <h3>GET /users</h3>
      <p>Fetches all users from the database using <code>query.all()</code>.</p>
      <CodeBlockComponent code={`@users_bp.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users])`} />

      <h3>POST /users</h3>
      <p>Creates a new user using SQLAlchemy's <code>add()</code> and <code>commit()</code> methods.</p>
      <CodeBlockComponent code={`@users_bp.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    new_user = User(**data)
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.to_dict())`} />
    </div>
  </div>
);

export default UserRoutesSlide;
