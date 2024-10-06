// src/components/slides/FriendshipModelSlide.jsx
import React from 'react';

const FriendshipModelSlide = () => (
    <div>
        <h2>Friendship Model</h2>
        <p>The Friendship model represents the connections between users.</p>
        <h3>Attributes:</h3>
        <ul>
            <li><strong>id:</strong> Unique identifier for each friendship.</li>
            <li><strong>user_id:</strong> Identifier for the user who initiated the friendship.</li>
            <li><strong>friend_id:</strong> Identifier for the user who is the friend.</li>
        </ul>
        <h3>Relationships:</h3>
        <ul>
            <li>Many to Many between Users: Users can have multiple friends.</li>
        </ul>
    </div>
);

export default FriendshipModelSlide;
