// src/components/slides/ModelRelationshipsSlide.jsx
import React from 'react';

const ModelRelationshipsSlide = () => (
    <div>
        <h2>Model Relationships</h2>
        <p>In the social network project, the models are connected through various relationships that define how data is linked across the platform.</p>
        
        <h3>Key Relationships:</h3>
        <ul>
            <li><strong>User ↔ Post (One-to-Many):</strong> A user can create many posts, but each post belongs to only one user.</li>
            <li><strong>Post ↔ Comment (One-to-Many):</strong> Each post can have multiple comments, but each comment belongs to one post.</li>
            <li><strong>User ↔ Comment (One-to-Many):</strong> A user can write multiple comments, but each comment is tied to one user.</li>
            <li><strong>User ↔ Friendship (Many-to-Many):</strong> Users can have multiple friends, and friendships are mutual relationships between two users.</li>
        </ul>
        
        <div className="relationship-diagram">
            <div className="models-table">
                <div className="model UserTable" id="UserTable">
                    <h3>User</h3>
                    <table className="model-attributes">
                        <thead>
                            <tr>
                                <th>Attribute</th><th>Type</th><th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>id</td><td>Integer</td><td>Primary Key</td></tr>
                            <tr><td>username</td><td>String</td><td>Unique</td></tr>
                            <tr><td>email</td><td>String</td><td>Unique</td></tr>
                            <tr><td>password</td><td>String</td><td>Hashed</td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="model PostTable" id="PostTable">
                    <h3>Post</h3>
                    <table className="model-attributes">
                        <thead>
                            <tr>
                                <th>Attribute</th><th>Type</th><th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>id</td><td>Integer</td><td>Primary Key</td></tr>
                            <tr><td>content</td><td>String</td><td>Text of the post</td></tr>
                            <tr><td>user_id</td><td>Integer</td><td>Foreign Key (User)</td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="model CommentTable" id="CommentTable">
                    <h3>Comment</h3>
                    <table className="model-attributes">
                        <thead>
                            <tr>
                                <th>Attribute</th><th>Type</th><th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>id</td><td>Integer</td><td>Primary Key</td></tr>
                            <tr><td>text</td><td>String</td><td>Comment text</td></tr>
                            <tr><td>post_id</td><td>Integer</td><td>Foreign Key (Post)</td></tr>
                            <tr><td>user_id</td><td>Integer</td><td>Foreign Key (User)</td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="model FriendshipTable" id="FriendshipTable">
                    <h3>Friendship</h3>
                    <table className="model-attributes">
                        <thead>
                            <tr>
                                <th>Attribute</th><th>Type</th><th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>user_id_1</td><td>Integer</td><td>Foreign Key (User)</td></tr>
                            <tr><td>user_id_2</td><td>Integer</td><td>Foreign Key (User)</td></tr>
                            <tr><td>status</td><td>String</td><td>Status of friendship</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
);

export default ModelRelationshipsSlide;
