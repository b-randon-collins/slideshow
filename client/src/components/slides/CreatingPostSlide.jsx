// src/components/slides/CreatingPostSlide.jsx
import React from 'react';

const CreatingPostSlide = () => (
    <div>
        <h2>Creating a Post</h2>
        <p>After login, the user can create a new post by visiting the "Create Post" page and filling out a form.</p>
        
        <h3>Frontend Route:</h3>
        <ul>
            <li><strong>Route:</strong> /create-post</li>
            <li><strong>Component:</strong> CreatePostPage.js</li>
        </ul>

        <h3>API Route:</h3>
        <ul>
            <li><strong>POST /api/posts</strong> - Creates a new post.</li>
        </ul>

        <h3>Tables Involved:</h3>
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
                    <tr>
                        <td>id</td><td>Integer</td><td>Primary Key</td>
                    </tr>
                    <tr>
                        <td>content</td><td>Text</td><td>Post content</td>
                    </tr>
                    <tr>
                        <td>created_at</td><td>DateTime</td><td>Timestamp for creation</td>
                    </tr>
                    <tr>
                        <td>user_id</td><td>Integer</td><td>Foreign key to User</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

export default CreatingPostSlide;
