// src/components/slides/UserRegistrationSlide.jsx
import React from 'react';

const UserRegistrationSlide = () => (
    <div>
        <h2>User Registration</h2>
        <p>A user visits the signup page, fills out their username, email, password, and uploads a profile picture. After submitting, they are redirected to the login page.</p>
        
        <h3>Frontend Route:</h3>
        <ul>
            <li><strong>Frontend Route:</strong> /signup</li>
        </ul>

        <h3>API Route:</h3>
        <ul>
            <li><strong>POST /api/users/signup</strong> - Registers a new user.</li>
        </ul>

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

export default UserRegistrationSlide;
