import React from 'react';
import './APIRoutesSlide.css';

const APIRoutesSlide = () => (
    <div className='slide api-routes-slide'>
        <div className="api-card">
            <table>
                <thead>
                    <tr>
                        <th colSpan={3}>
                            <h3>User Routes</h3>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>POST</strong></td>
                        <td>/api/users/signup</td>
                        <td>Registers a new user.</td>
                    </tr>
                    <tr>
                        <td><strong>POST</strong></td>
                        <td>/api/users/login</td>
                        <td>Logs in a user.</td>
                    </tr>
                    <tr>
                        <td><strong>GET</strong></td>
                        <td>/api/users/</td>
                        <td>Retrieves user profile data.</td>
                    </tr>
                    <tr>
                        <td><strong>PUT</strong></td>
                        <td>/api/users/</td>
                        <td>Updates user profile.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="api-card">
            <table>
                <thead>
                    <tr>
                        <th colSpan={3}>
                            <h3>Post Routes</h3>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>GET</strong></td>
                        <td>/api/posts</td>
                        <td>Fetches all posts for the main feed.</td>
                    </tr>
                    <tr>
                        <td><strong>GET</strong></td>
                        <td>/api/posts/:id</td>
                        <td>Fetches a specific post and its comments.</td>
                    </tr>
                    <tr>
                        <td><strong>POST</strong></td>
                        <td>/api/posts</td>
                        <td>Creates a new post.</td>
                    </tr>
                    <tr>
                        <td><strong>PUT</strong></td>
                        <td>/api/posts/:id</td>
                        <td>Updates an existing post (owned by the user).</td>
                    </tr>
                    <tr>
                        <td><strong>DELETE</strong></td>
                        <td>/api/posts/:id</td>
                        <td>Deletes an existing post (owned by the user).</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="api-card">
            <table>
                <thead>
                    <tr>
                        <th colSpan={3}>
                            <h3>Comment Routes</h3>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>POST</strong></td>
                        <td>/api/comments</td>
                        <td>Creates a new comment on a post.</td>
                    </tr>
                    <tr>
                        <td><strong>GET</strong></td>
                        <td>/api/comments/:postId</td>
                        <td>Fetches comments for a specific post.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="api-card">
            <table>
                <thead>
                    <tr>
                        <th colSpan={3}>
                            <h3>Like Routes</h3>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>POST</strong></td>
                        <td>/api/likes</td>
                        <td>Likes a post.</td>
                    </tr>
                    <tr>
                        <td><strong>DELETE</strong></td>
                        <td>/api/likes/:id</td>
                        <td>Unlikes a post.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="api-card">
            <table>
                <thead>
                    <tr>
                        <th colSpan={3}>
                            <h3>Real-Time Updates (Socket.IO)</h3>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>POST</strong></td>
                        <td>/socket/post-updates</td>
                        <td>Used for broadcasting and receiving real-time post and comment updates.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

export default APIRoutesSlide;
