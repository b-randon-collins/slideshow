// src/components/slides/ProfileViewSlide.jsx
import React from 'react';

const ProfileViewSlide = () => (
  <div>
    <h2>Profile View</h2>
    <p>A user can visit their profile page to see their own posts and update their information.</p>
    
    <h3>Frontend Route:  /profile/:userId</h3>

    
    <ul>
    </ul>


    <span><h3>API Routes:</h3><strong>GET /api/users/:id</strong> - Retrieves user profile data.</span>


    <div className="user-profile">
      <h4>User Profile Data (GET Request):</h4>
      <pre style={{color: 'black',  background: '#f5f5f5', padding: '10px', borderRadius: '4px' }}>
        {JSON.stringify({
          id: 1,
          username: 'john_doe',
          email: 'john.doe@example.com',
          createdAt: '2023-01-01T12:00:00Z'
        }, null, 2)}
      </pre>
    </div>

    <span><strong>PUT /api/users/:id</strong> - Updates user profile information.</span>

    <div className="update-profile">
      <h4>Profile Update Result (PUT Request):</h4>
      <pre style={{ color: 'black', background: '#f5f5f5', padding: '10px', borderRadius: '4px' }}>
        {JSON.stringify({
          message: 'Profile updated successfully',
          updatedUser: {
            id: 1,
            username: 'john_doe_updated',
            email: 'john.doe_updated@example.com',
            createdAt: '2023-01-01T12:00:00Z'
          }
        }, null, 2)}
      </pre>
    </div>

    <h3>Posts Created by User:</h3>
    <div className="user-posts">
      <h4>Posts:</h4>
      <ul>
        <li>
          <strong>Post ID:</strong> 1 <br />
          <strong>Content:</strong> This is my first post! <br />
          <strong>Created At:</strong> 2023-01-02T10:00:00Z
        </li>
        <li>
          <strong>Post ID:</strong> 2 <br />
          <strong>Content:</strong> Just enjoying the day! <br />
          <strong>Created At:</strong> 2023-01-03T11:30:00Z
        </li>
      </ul>
    </div>
  </div>
);

export default ProfileViewSlide;
