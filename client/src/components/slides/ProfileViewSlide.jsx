// src/components/slides/ProfileViewSlide.jsx
import React from 'react';

const ProfileViewSlide = () => (
    <div>
        <h2>Profile View</h2>
        <p>A user can visit their profile page to see their own posts and update their information.</p>
        
        <h3>Frontend Route:</h3>
        <ul>
            <li><strong>Route:</strong> /profile/:userId</li>
            <li><strong>Component:</strong> ProfilePage.js</li>
        </ul>

        <h3>API Routes:</h3>
        <ul>
            <li><strong>GET /api/users/:id</strong> - Retrieves user profile data.</li>
            <li><strong>PUT /api/users/:id</strong> - Updates user profile information.</li>
        </ul>

        <h3>Tables Involved:</h3>
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
                    <tr>
                        <td>id</td><td>Integer</td><td>Primary Key</td>
                    </tr>
                    <tr>
                        <td>username</td><td>String</td><td>Unique username for each user.</td>
                    </tr>
                    <tr>
                        <td>email</td><td>String</td><td>Unique email address of the user.</td>
                    </tr>

                </tbody>
            </table>
        </div>

        <h3>Related Posts:</h3>
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
                        <td>content</td><td>Text</td><td>Post content created by the user.</td>
                    </tr>
                    <tr>
                        <td>created_at</td><td>DateTime</td><td>Timestamp for post creation.</td>
                    </tr>
                    <tr>
                        <td>user_id</td><td>Integer</td><td>Foreign key to User</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

export default ProfileViewSlide;
