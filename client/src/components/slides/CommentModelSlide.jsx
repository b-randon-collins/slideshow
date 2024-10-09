// src/components/slides/CommentModelSlide.jsx
import React from 'react';
import './ModelSlides.css';
import CodeBlockComponent from '../uiUtilities.jsx/codeBlock/CodeBlock';

const CommentModelSlide = () => {
    const modelExample =`class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    user = db.relationship('User', backref='comments', lazy=True)
`;

    return (
    <div id="comment-model-slide">
        <div className="top-row">
            <div className="text-section">
                <h2>Comment Model</h2>
                <p>The Comment model allows users to engage with posts by leaving comments.</p>

                <h3>Attributes:</h3>
                <ul>
                    <li><strong>id:</strong> Unique identifier for each comment.</li>
                    <li><strong>content:</strong> Text content of the comment.</li>
                    <li><strong>created_at:</strong> Timestamp of when the comment was made.</li>
                    <li><strong>post_id:</strong> Identifier for the post that the comment belongs to.</li>
                    <li><strong>user_id:</strong> Identifier for the user who made the comment.</li>
                </ul>

                <h3>Relationships:</h3>
                <ul>
                    <li>Many-to-One with Posts: Each comment is associated with one post.</li>
                    <li>Many-to-One with Users: Each comment is made by one user.</li>
                </ul>
            </div>

            <div className="table-section">
                <div className="model CommentTable" id="CommentTable">
                    <h3>Comment</h3>
                    <table className="model-attributes">
                        <thead>
                            <tr>
                                <th>Attribute</th>
                                <th>Type</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="CommentTable_id">
                                <td>id</td><td>Integer</td><td>Primary Key</td>
                            </tr>
                            <tr>
                                <td>content</td><td>Text</td><td></td>
                            </tr>
                            <tr>
                                <td>created_at</td><td>DateTime</td><td></td>
                            </tr>
                            <tr id="CommentTable_user_id">
                                <td>user_id</td><td>Integer</td><td>Foreign Key (User)</td>
                            </tr>
                            <tr id="CommentTable_post_id">
                                <td>post_id</td><td>Integer</td><td>Foreign Key (Post)</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Relationships: Many-to-One (Post), Many-to-One (User)</p>
                </div>
            </div>
        </div>
        <CodeBlockComponent code={modelExample} />

    </div>
    );
};
export default CommentModelSlide;
