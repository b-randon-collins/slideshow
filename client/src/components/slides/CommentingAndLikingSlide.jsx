// src/components/slides/CommentingAndLikingSlide.jsx
import React from 'react';

const CommentingAndLikingSlide = () => (
    <div>
        <h2>Commenting and Liking</h2>
        <p>A user can comment on a post or like a post. Comments and likes are updated in real-time.</p>
        
        <h3>Frontend Route:</h3>
        <ul>
            <li><strong>Route:</strong> /post/:id</li>
            <li><strong>Component:</strong> PostDetailsPage.js</li>
        </ul>

        <h3>API Route:</h3>
        <ul>
            <li><strong>POST /api/comments</strong> - Creates a new comment.</li>
            <li><strong>GET /api/comments/:post_id</strong> - Fetches comments for a specific post.</li>
        </ul>

        <h3>Tables Involved:</h3>
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
                    <tr>
                        <td>id</td><td>Integer</td><td>Primary Key</td>
                    </tr>
                    <tr>
                        <td>content</td><td>Text</td><td>Comment content</td>
                    </tr>
                    <tr>
                        <td>created_at</td><td>DateTime</td><td>Timestamp for creation</td>
                    </tr>
                    <tr>
                        <td>post_id</td><td>Integer</td><td>Foreign key to Post</td>
                    </tr>
                    <tr>
                        <td>user_id</td><td>Integer</td><td>Foreign key to User</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

export default CommentingAndLikingSlide;
