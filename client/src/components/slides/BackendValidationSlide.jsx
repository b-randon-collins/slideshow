// src/components/slides/BackendValidationSlide.jsx
import React from 'react';

const BackendValidationSlide = () => (
    <div>
        <h2>Backend Validation</h2>
        <p>Backend validation ensures that data submitted by the client is correct and safe before it's stored in the database. This is the final layer of protection for data integrity and security.</p>
        
        <h3>Technologies Used:</h3>
        <ul>
            <li><strong>Flask:</strong> Web framework used for building the backend.</li>
            <li><strong>SQLAlchemy:</strong> ORM used for managing the database and enforcing constraints.</li>
        </ul>

        <h3>Example: User Registration</h3>
        <p>On the backend, the following validation is performed when a new user tries to register:</p>
        <ul>
            <li><strong>Username:</strong> Required, must be unique.</li>
            <li><strong>Email:</strong> Required, must be unique, valid email format.</li>
            <li><strong>Password:</strong> Required, must be hashed before storing.</li>
            <li><strong>Profile Picture:</strong> Optional, must be a valid URL format if provided.</li>
        </ul>

        <h3>Code Example (Flask + SQLAlchemy):</h3>
        <pre>
            {`
            from flask import request, jsonify
            from werkzeug.security import generate_password_hash
            from models import User
            from app import db

            @app.route('/api/users/signup', methods=['POST'])
            def signup():
                data = request.get_json()
                if not data['username'] or not data['email'] or not data['password']:
                    return jsonify({'error': 'All fields are required'}), 400
                
                if User.query.filter_by(username=data['username']).first():
                    return jsonify({'error': 'Username already exists'}), 400

                if User.query.filter_by(email=data['email']).first():
                    return jsonify({'error': 'Email already exists'}), 400

                # Hash password
                hashed_password = generate_password_hash(data['password'])

                new_user = User(username=data['username'], email=data['email'], password=hashed_password)
                db.session.add(new_user)
                db.session.commit()

                return jsonify({'message': 'User created successfully'}), 201
            `}
        </pre>
    </div>
);

export default BackendValidationSlide;
