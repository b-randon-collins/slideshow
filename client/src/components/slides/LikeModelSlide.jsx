// src/components/slides/LikeModelSlide.jsx
import React from 'react';
import './ModelSlides.css';
import CodeBlockComponent from '../uiUtilities.jsx/codeBlock/CodeBlock';
const LikeModelSlide = () => {
    const modelExample = `class Like(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    user = db.relationship('User', backref='likes', lazy=True)
    post = db.relationship('Post', backref='likes', lazy=True)
`;
    return (
    <div id="like-model-slide">
        <div className="top-row">
            <div className="text-section">
                <h2>Like Model</h2>
                <p>The Like model represents the "likes" that users give to posts within the social network. This feature allows users to express approval or support for specific posts.</p>

                <h3>Attributes:</h3>
                <ul>
                    <li><strong>id:</strong> Unique identifier for each like.</li>
                    <li><strong>user_id:</strong> References the user who liked the post (Foreign Key).</li>
                    <li><strong>post_id:</strong> References the post that received the like (Foreign Key).</li>
                    <li><strong>created_at:</strong> Timestamp when the like was made.</li>
                </ul>

                <h3>Relationships:</h3>
                <ul>
                    <li>Many-to-One with User: Each like belongs to one user who liked the post.</li>
                    <li>Many-to-One with Post: Each like is associated with a specific post.</li>
                </ul>
            </div>

            <div className="table-section">
                <div className="model LikeTable" id="LikeTable">
                    <h3>Like</h3>
                    <table className="model-attributes">
                        <thead>
                            <tr>
                                <th>Attribute</th>
                                <th>Type</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="LikeTable_id">
                                <td>id</td><td>Integer</td><td>Primary Key</td>
                            </tr>
                            <tr>
                                <td>user_id</td><td>Integer</td><td>Foreign Key (User)</td>
                            </tr>
                            <tr>
                                <td>post_id</td><td>Integer</td><td>Foreign Key (Post)</td>
                            </tr>
                            <tr>
                                <td>created_at</td><td>DateTime</td><td>Timestamp</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>



        <p>The Like model serves as a join table, connecting users and posts with many-to-one relationships on both sides. Each user can like multiple posts, and each post can be liked by many users.</p>
        <CodeBlockComponent code={modelExample} />
    </div>
);
}
export default LikeModelSlide;
