import React from 'react';

const DatabaseMigrationSlide = () => (
    <div>
        <h2>Database Migration and Seeding</h2>
        <p>The social network project uses a relational database to store user, post, comment, like, and friendship data. Database migrations help manage schema changes over time, and the seeding process populates the database with initial demo data.</p>

        <h3>Migration Tool:</h3>
        <ul>
            <li><strong>Alembic:</strong> Used for handling database migrations in the Flask application, allowing for version control of the database schema.</li>
        </ul>

        <h3>Migration Commands:</h3>
        <ul>
            <li><strong>Flask Migrate:</strong> A command-line tool for database migrations.</li>
            <li><strong>Commands:</strong></li>
            <ul>
                <li><code>flask db init</code> - Initializes the migration environment.</li>
                <li><code>flask db migrate</code> - Generates a new migration file based on model changes.</li>
                <li><code>flask db upgrade</code> - Applies the migration to the database schema.</li>
            </ul>
        </ul>

        <h3>Seed Data:</h3>
        <p>After setting up the database, the `seed.py` script is used to populate it with demo data, including users, posts, and comments, for testing and demonstration purposes.</p>

        <h3>Seed.py Script:</h3>
        <ul>
            <li><strong>Purpose:</strong> Populates the database with initial demo data.</li>
            <li><strong>Example Entries:</strong></li>
            <ul>
                <li>Users: Demo users with username, email, and password hashes.</li>
                <li>Posts: Sample posts linked to demo users.</li>
                <li>Comments: Comments tied to specific posts.</li>
            </ul>
        </ul>

        <h3>Example Seed Data:</h3>
        <div className="model SeedTable" id="SeedTable">
            <h3>Sample Users</h3>
            <table className="model-attributes">
                <thead>
                    <tr>
                        <th>Username</th><th>Email</th><th>Password Hash</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>johndoe</td><td>johndoe@example.com</td><td>hashed_password_123</td></tr>
                    <tr><td>janedoe</td><td>janedoe@example.com</td><td>hashed_password_456</td></tr>
                </tbody>
            </table>

            <h3>Sample Posts</h3>
            <table className="model-attributes">
                <thead>
                    <tr>
                        <th>Content</th><th>Author</th><th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Hello, world!</td><td>johndoe</td><td>2024-01-01</td></tr>
                    <tr><td>This is my first post!</td><td>janedoe</td><td>2024-01-02</td></tr>
                </tbody>
            </table>
        </div>

        <h3>Key Commands:</h3>
        <ul>
            <li><code>python seed.py</code> - Populates the database with demo data after migrations.</li>
        </ul>
    </div>
);

export default DatabaseMigrationSlide;
