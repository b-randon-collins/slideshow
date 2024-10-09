// src/components/slides/ClassModelsSlideSqlAlchemyModel.jsx
import React from 'react';

const ClassModelsSlideSqlAlchemyModel = () => (
    <div id="class-models-sqlalchemy-slide" className="slide-container">
        <div className="content-container">
            <h2>SQLAlchemy Integration</h2>
            <p>
                SQLAlchemy is a powerful ORM that allows developers to use Python classes as representations of database tables. 
                Each class can define attributes that correspond to columns in the database. 
                With SQLAlchemy, you can easily perform CRUD operations, build complex queries, and establish relationships between different models, simplifying database interactions.
            </p>
            <p>
                For instance, you can create a query to retrieve all records of a particular model with a single line of code, enhancing productivity and reducing the likelihood of errors in SQL syntax.
            </p>
        </div>
    </div>
);

export default ClassModelsSlideSqlAlchemyModel;
