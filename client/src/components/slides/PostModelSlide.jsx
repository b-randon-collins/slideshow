// src/components/slides/PostModelSlide.jsx
import React from 'react';
import './ModelSlides.css';

const PostModelSlide = () => (
    <div id="post-model-slide">
        <div className="top-row">
            <div className="text-section">
                <h2>Post Model</h2>
                <p>The Post model represents the content shared by users on the platform.</p>

                <h3>Attributes:</h3>
                <ul>
                    <li><strong>id:</strong> Unique identifier for each post.</li>
                    <li><strong>content:</strong> Text content of the post.</li>
                    <li><strong>created_at:</strong> Timestamp of when the post was created.</li>
                    <li><strong>user_id:</strong> Identifier for the user who created the post.</li>
                </ul>

                <h3>Relationships:</h3>
                <ul>
                    <li>Many-to-One with Users: Each post is created by one user.</li>
                    <li>One-to-Many with Comments: A post can have many comments.</li>
                </ul>
            </div>

            <div className="table-section">
                <div className="model PostTable" id="PostTable">
                    <h3>Post</h3>
                    <table className="model-attributes">
                        <thead>
                            <tr>
                                <th>Attribute</th>
                                <th>Type</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="PostTable_id">
                                <td>id</td><td>Integer</td><td>Primary Key</td>
                            </tr>
                            <tr>
                                <td>content</td><td>Text</td><td></td>
                            </tr>
                            <tr>
                                <td>created_at</td><td>DateTime</td><td></td>
                            </tr>
                            <tr id="PostTable_user_id">
                                <td>user_id</td><td>Integer</td><td>Foreign Key (User)</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Relationships: One-to-Many (Comments), Many-to-One (User)</p>
                </div>
            </div>
        </div>
    </div>
);

export default PostModelSlide;
