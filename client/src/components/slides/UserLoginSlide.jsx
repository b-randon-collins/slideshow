// src/components/slides/UserLoginSlide.jsx
import React from 'react';

const UserLoginSlide = () => (
    <div>
        <h2>User Login</h2>
        <p>The user logs in with their credentials and gets redirected to the home page (main feed).</p>
        
        <h3>Frontend Route:</h3>
        <ul>
            <li><strong>Route:</strong> /login</li>
            <li><strong>Component:</strong> LoginPage.js</li>
        </ul>

        <h3>API Route:</h3>
        <ul>
            <li><strong>POST /api/users/login</strong> - Logs in a user.</li>
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
        </div>
    </div>
);

export default UserLoginSlide;
