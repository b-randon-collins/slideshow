import React from 'react';
import CodeBlockComponent from '../uiUtilities.jsx/codeBlock/CodeBlock';

const SQLAlchemyQueriesSlide = () => (
  <div>
    <h2>SQLAlchemy Queries Overview</h2>
    <p>
      For each API route, we utilize SQLAlchemy's ORM methods to query the database. Here are some common SQLAlchemy methods used in our API routes:
    </p>
    
    <ul>
      <li>
        <strong>query.all():</strong> Retrieves all records from a table.
        <CodeBlockComponent code={`@example_bp.route('/example', methods=['GET'])
def get_examples():
    examples = Example.query.all()  # Fetch all records from Example table
    return jsonify([example.to_dict() for example in examples])`} />
      </li>
      <li>
        <strong>query.filter_by():</strong> Filters records based on conditions.
        <CodeBlockComponent code={`@example_bp.route('/example/<int:id>', methods=['GET'])
def get_example_by_id(id):
    example = Example.query.filter_by(id=id).first()  # Fetch record with specific id
    return jsonify(example.to_dict()) if example else ('', 404)`} />
      </li>
      <li>
        <strong>add():</strong> Adds a new object to the session for insertion into the database.
        <CodeBlockComponent code={`@example_bp.route('/example', methods=['POST'])
def create_example():
    data = request.get_json()
    new_example = Example(**data)  # Create new Example object
    db.session.add(new_example)  # Add to session
    db.session.commit()  # Commit transaction
    return jsonify(new_example.to_dict()), 201`} />
      </li>
      <li>
        <strong>commit():</strong> Commits the current transaction to make the changes persistent.
        <CodeBlockComponent code={`@example_bp.route('/example/<int:id>', methods=['PUT'])
def update_example(id):
    data = request.get_json()
    example = Example.query.filter_by(id=id).first()
    if example:
        for key, value in data.items():
            setattr(example, key, value)  # Update attributes
        db.session.commit()  # Commit changes
        return jsonify(example.to_dict())
    return ('', 404)`} />
      </li>
      <li>
        <strong>delete():</strong> Deletes a record from the database.
        <CodeBlockComponent code={`@example_bp.route('/example/<int:id>', methods=['DELETE'])
def delete_example(id):
    example = Example.query.filter_by(id=id).first()
    if example:
        db.session.delete(example)  # Delete from session
        db.session.commit()  # Commit transaction
        return ('', 204)  # No content response
    return ('', 404)`} />
      </li>
    </ul>
  </div>
);

export default SQLAlchemyQueriesSlide;
