// src/components/slides/ViewProfileSlide.jsx
import React, { useState } from 'react';

const sampleUser = {
    username: "JohnDoe",
    bio: "Full-stack developer and tech enthusiast.",
    posts: [
        { id: 1, content: "Excited to start my new project!" },
        { id: 2, content: "Just deployed my app with React and Node.js." },
        { id: 3, content: "Learning about Docker and containers today." }
    ]
};

const ViewProfileSlide = () => {
    const [bio, setBio] = useState(sampleUser.bio);
    const [editingBio, setEditingBio] = useState(false);
    const [newBio, setNewBio] = useState(bio);

    const handleEditBio = () => {
        setEditingBio(!editingBio);
        if (editingBio && newBio !== bio) {
            setBio(newBio);
        }
    };

    return (
        <div>
            <h2>View Profile</h2>

            <div className="profile-info">
                <p><strong>Username:</strong> {sampleUser.username}</p>
                
                <div className="bio-section">
                    <p><strong>Bio:</strong></p>
                    {editingBio ? (
                        <textarea
                            value={newBio}
                            onChange={(e) => setNewBio(e.target.value)}
                            style={{
                                width: '100%',
                                height: '60px',
                                padding: '10px',
                                marginBottom: '10px'
                            }}
                        />
                    ) : (
                        <p>{bio}</p>
                    )}
                    <button
                        onClick={handleEditBio}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: '#007BFF',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        {editingBio ? 'Save Bio' : 'Edit Bio'}
                    </button>
                </div>
            </div>

            <div className="user-posts">
                <h3>User's Posts</h3>
                {sampleUser.posts.length > 0 ? (
                    sampleUser.posts.map((post) => (
                        <div key={post.id} className="post">
                            <p>{post.content}</p>
                        </div>
                    ))
                ) : (
                    <p>No posts yet.</p>
                )}
            </div>
        </div>
    );
};

export default ViewProfileSlide;
