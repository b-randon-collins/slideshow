// src/components/slides/NotificationSlide.jsx
import React, { useState } from 'react';

const sampleNotifications = [
    { id: 1, type: "post", message: "Dave made a new post", timestamp: "2024-10-08 14:01" },
    { id: 2, type: "like", message: "Alice liked your post.", timestamp: "2024-10-08 14:32" },
    { id: 3, type: "comment", message: "Bob commented on your post.", timestamp: "2024-10-08 12:15" },
];

const NotificationSlide = () => {
    const [notifications] = useState(sampleNotifications);

    return (
        <div>
            <h2>Notifications</h2>
            <p>Users receive notifications for posts, likes, comments, etc. Here are a few sample notifications:</p>
            
            <div className="notifications-list">
                {notifications.length > 0 ? (
                    notifications.map((notification) => (
                        <div key={notification.id} className="notification-item">
                            <p><strong>{notification.message}</strong></p>
                            <p style={{ color: 'gray', fontSize: '12px' }}>{notification.timestamp}</p>
                        </div>
                    ))
                ) : (
                    <p>No notifications yet.</p>
                )}
            </div>
        </div>
    );
};

export default NotificationSlide;
