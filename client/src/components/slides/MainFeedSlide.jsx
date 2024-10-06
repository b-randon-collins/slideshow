// src/components/slides/MainFeedSlide.jsx
import React from 'react';

const MainFeedSlide = () => (
    <div>
        <h2>Viewing the Main Feed</h2>
        <p>The main feed shows all posts from users. Posts have like buttons and comment sections.</p>
        
        <h3>Frontend Route:</h3>
        <ul>
            <li><strong>Route:</strong> /</li>
            <li><strong>Component:</strong> HomePage.js</li>
        </ul>

        <h3>API Route:</h3>
        <ul>
            <li><strong>GET /api/posts</strong> - Fetches all posts for the main feed.</li>
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

export default MainFeedSlide;
