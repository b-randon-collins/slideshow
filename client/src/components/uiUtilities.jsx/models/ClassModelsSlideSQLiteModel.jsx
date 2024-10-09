// src/components/slides/ClassModelsSlideSQLiteModel.jsx
import React from 'react';

const ClassModelsSlideSQLiteModel = () => (
    <div id="class-models-sqlite-slide" className="slide-container">
        <div className="content-container">
            <h2>SQLite Interaction</h2>
            <p>
                SQLite serves as the lightweight database solution for our application, allowing for easy data storage and retrieval.
                When you define your class models in Python, SQLAlchemy takes care of mapping these classes to the SQLite tables. 
                This mapping enables seamless interaction, meaning that any changes made to the Python classes are directly reflected in the SQLite database structure.
            </p>
            <p>
                Furthermore, SQLite's simplicity allows for quick setup and testing of the database during development. 
                It supports transactions and various SQL operations, which can be leveraged through SQLAlchemy queries to efficiently manage the underlying data.
            </p>
        </div>
    </div>
);

export default ClassModelsSlideSQLiteModel;
