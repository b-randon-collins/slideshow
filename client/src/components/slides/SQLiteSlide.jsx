// src/components/slides/SQLiteSlide.jsx
import React from 'react';
import './ModelSlides.css';
import './SQLiteSlides.css';

const SQLiteSlide = () => (
    <div id="sqlite-slide" className="slide-container">
        <div className="content-container">  
                <img src="/assets/sqlite.png" alt="SQLite Logo" />

                <div className="tech-integration">
                    <img src="/assets/flask.png" alt="Flask Logo" />
                    <img src="/assets/sqlalchemy.png" alt="SQLAlchemy Logo" />
                </div>
                <h2>SQLite Integration</h2>
                <p>
                    SQLite is used as a lightweight database to store data for users, posts, comments, and likes. It integrates smoothly with Flask and SQLAlchemy.
                </p>

        </div>

             <table className="models-container">
                <tr>
                    <td colSpan={3}>
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
                                    <tr id="UserTable_id">
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
                            <p>Relationships: One-to-Many (Posts), Many-to-Many (Likes)</p>
                        </div>
                    </td>
                </tr>
               
                <tr>
                    <td>
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
                    </td>
                    <td>
                        <div className="model LikesTable" id="LikesTable">
                        <h3>Likes</h3>
                        <table className="model-attributes">
                            <thead>
                                <tr>
                                    <th>Attribute</th>
                                    <th>Type</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr id="LikesTable_id">
                                    <td>id</td><td>Integer</td><td>Primary Key</td>
                                </tr>
                                <tr id="LikesTable_user_id">
                                    <td>user_id</td><td>Integer</td><td>Foreign Key (User)</td>
                                </tr>
                                <tr id="LikesTable_post_id">
                                    <td>post_id</td><td>Integer</td><td>Foreign Key (Post)</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Relationships: Many-to-Many (Users and Posts)</p>
                        </div>
                    </td>
                    <td>
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
                                    <tr id="CommentTable_post_id">
                                        <td>post_id</td><td>Integer</td><td>Foreign Key (Post)</td>
                                    </tr>
                                    <tr id="CommentTable_user_id">
                                        <td>user_id</td><td>Integer</td><td>Foreign Key (User)</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Relationships: Many-to-One (Post, User)</p>
                        </div>
                    </td>
                </tr>
            </table>
            <div className="relationship-canvas" id="relationshipCanvas"></div>

     
    </div>
);

export default SQLiteSlide;
