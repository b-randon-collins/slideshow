// src/components/slides/UserModelSlide.jsx
import React from 'react';
import './ModelSlides.css';
import CodeBlockComponent from '../uiUtilities.jsx/codeBlock/CodeBlock';

const UserModelSlide = () => {
    const modelExample = `class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)
    profile_picture = db.Column(db.String(255), default='default_profile.png')

    posts = db.relationship('Post', backref='author', lazy=True)
    friendships = db.relationship('Friendship', foreign_keys='Friendship.user_id', backref='user', lazy='dynamic')
    friends = db.relationship('Friendship', foreign_keys='Friendship.friend_id', backref='friend', lazy='dynamic')

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)
`;
return (
    <div id="user-model-slide">
        <div className="top-row">
            <div className="text-section">
                <h2>User Model</h2>
                <p>The User model represents the individuals who use the social network platform.</p>

                <h3>Attributes:</h3>
                <ul>
                    <li><strong>id:</strong> Unique identifier for each user.</li>
                    <li><strong>username:</strong> Unique username for each user.</li>
                    <li><strong>email:</strong> Email address of the user.</li>
                    <li><strong>password:</strong> User's password (hashed).</li>
                </ul>

                <h3>Relationships:</h3>
                <ul>
                    <li>One-to-Many with Posts: A user can create many posts.</li>
                    <li>Many-to-Many with Friendships: Users can have multiple friends.</li>
                </ul>
                
            </div>

            <div className="table-section">
                <div className="model UserTable" id="UserTable">
                    <h3>User</h3>
                    <table className="model-attributes">
                        <thead>
                            <tr>
                                <th>Attribute</th>
                                <th>Type</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="UserTable_id">
                                <td>id</td><td>Integer</td><td>Primary Key</td>
                            </tr>
                            <tr>
                                <td>username</td><td>String</td><td>Unique</td>
                            </tr>
                            <tr>
                                <td>email</td><td>String</td><td>Unique</td>
                            </tr>
                            <tr>
                                <td>password</td><td>String</td><td>Hashed</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Relationships: One-to-Many (Posts), Many-to-Many (Friendships)</p>
                </div>
            </div>
        </div>
        <CodeBlockComponent code={modelExample} />
    </div>
);
}

export default UserModelSlide;
