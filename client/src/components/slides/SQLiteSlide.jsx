// src/components/slides/SQLiteSlide.jsx
import React, { useState } from 'react';
import './ModelSlides.css';
import './SQLiteSlides.css';
import SQLiteSlideFlaskModel from '../uiUtilities.jsx/models/SQLiteSlideFlaskModel';
import SQLiteSQLAlchemyModel from '../uiUtilities.jsx/models/SQLiteSQLAlchemyModel';

const SQLiteSlide = ({ openModal }) => {
  return (
    <div id="sqlite-slide" className="slide-container">
      <div className="content-container">
        <img
          src="/assets/sqlite.png"
          alt="SQLite Logo"
          onClick={() => handleImageClick(<p>This is SQLite Integration</p>)}
        />

        <div className="tech-integration">
            <img
                src="/assets/flask.png"
                alt="Flask Logo"
                onClick={() => openModal(<SQLiteSlideFlaskModel />)}
            />
            <img
                src="/assets/sqlalchemy.png"
                alt="SQLAlchemy Logo"
                onClick={() => openModal(<SQLiteSQLAlchemyModel />)}
            />
        </div>

        <h2>SQLite Integration</h2>
        <p>
          SQLite is used as a lightweight database to store data for users, posts, comments,
          and likes. It integrates smoothly with Flask and SQLAlchemy.
        </p>
      </div>



      <table className="models-container">
  <tbody>
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
                <td>id</td>
                <td>Integer</td>
                <td>Primary Key</td>
              </tr>
              <tr>
                <td>username</td>
                <td>String</td>
                <td>Unique</td>
              </tr>
              <tr>
                <td>email</td>
                <td>String</td>
                <td>Unique</td>
              </tr>
              <tr>
                <td>password</td>
                <td>String</td>
                <td>Hashed</td>
              </tr>
            </tbody>
          </table>
          <p>Relationships: One-to-Many (Posts), Many-to-Many (Likes)</p>
        </div>
      </td>
    </tr>
    </tbody>
    </table>
      <div className="relationship-canvas" id="relationshipCanvas"></div>
    </div>
  );
};

export default SQLiteSlide;
