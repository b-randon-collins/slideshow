import React from 'react';
import './TaskCalendarSlide.css'; // Import your styles here

const TaskCalendarSlide = () => {
    // Define the task calendar data with estimated time
    const calendarData = [
        { date: '10/7/2024', tasks: [{ description: 'Set up project, design data models.', estimatedTime: '2 hours' }] },
        { date: '10/8/2024', tasks: [{ description: 'Develop User <span class="highlight">Authentication</span> (<span className="highlight">backend</span> and <span className="highlight">frontend</span>).', estimatedTime: '4 hours' }] },
        { date: '10/9/2024', tasks: [{ description: 'Set up <span class="highlight">API</span> routes for user registration.', estimatedTime: '3 hours' }] },
        { date: '10/10/2024', tasks: [{ description: 'Create <span class="highlight">React</span> form for user registration.', estimatedTime: '2 hours' }] },
        { date: '10/11/2024', tasks: [{ description: 'Develop posts class model, attributes, and relationships to user.', estimatedTime: '3 hours' }] },
        { date: '10/12/2024', tasks: [{ description: 'Set up <span class="highlight">API</span> routes for posts.', estimatedTime: '2 hours' }] },
        { date: '10/13/2024', tasks: [{ description: 'Implement <span class="highlight">front-end</span> Post creation and display.', estimatedTime: '4 hours' }] },
        { date: '10/14/2024', tasks: [{ description: 'Set up <span class="highlight">API</span> routes for comments.', estimatedTime: '2 hours' }] },
        { date: '10/15/2024', tasks: [{ description: 'Implement <span class="highlight">front-end</span> Comment creation and display.', estimatedTime: '3 hours' }] },
        { date: '10/16/2024', tasks: [{ description: 'Complete the profile page and navigation.', estimatedTime: '3 hours' }] },
        { date: '10/17/2024', tasks: [{ description: 'Set up <span class="highlight">Socket.IO</span> for real-time updates.', estimatedTime: '3 hours' }] },
        { date: '10/18/2024', tasks: [{ description: 'Final tweaks and adjustments to all components.', estimatedTime: '2 hours' }] },
        { date: '10/19/2024', tasks: [{ description: 'Testing and debugging of all features.', estimatedTime: '4 hours' }] },
        { date: '10/20/2024', tasks: [{ description: 'Prepare presentation materials and slides.', estimatedTime: '3 hours' }] },
        { date: '10/21/2024', tasks: [{ description: 'Practice presentation and get feedback.', estimatedTime: '2 hours' }] },
        { date: '10/22/2024', tasks: [{ description: 'Final review and polish of the application.', estimatedTime: '3 hours' }] },
        { date: '10/23/2024', tasks: [{ description: 'Code freeze: ensure everything is working and presentable.', estimatedTime: '1 hour' }] },
        { date: '10/24/2024', tasks: [{ description: 'Science Fair presentation preparation.', estimatedTime: '3 hours' }] },
        { date: '10/25/2024', tasks: [{ description: 'Graduation preparations.', estimatedTime: '2 hours' }] },
        { date: '10/26/2024', tasks: [{ description: 'No tasks', estimatedTime: '' }] }, // Extend the calendar for consistency
        { date: '10/27/2024', tasks: [{ description: 'No tasks', estimatedTime: '' }] }, // Extend the calendar for consistency
    ];

    // Get the starting day of the week for the calendar (10/7/2024 is a Monday)
    const startDate = new Date('10/7/2024');

    return (
        <div>
            <h2>Task Calendar (Development Timeline)</h2>
            <table className="calendar">
                <thead>
                    <tr className="header">
                        <th className="day">Sun</th>
                        <th className="day">Mon</th>
                        <th className="day">Tue</th>
                        <th className="day">Wed</th>
                        <th className="day">Thu</th>
                        <th className="day">Fri</th>
                        <th className="day">Sat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {Array.from({ length: 7 }, (_, i) => {
                            const currentDate = new Date(startDate);
                            currentDate.setDate(startDate.getDate() + i); // Increment the start date by the current index

                            // Find tasks for each day
                            const tasksForDay = calendarData.find(task => task.date === `${currentDate.getMonth() + 1}/${currentDate.getDate()}/2024`)?.tasks || [];

                            return (
                                <td key={i} className="cell">
                                    <div className="date">{currentDate.getDate()}</div>
                                    <div className="task-list">
                                        {tasksForDay.length > 0 ? (
                                            tasksForDay.map((task, index) => (
                                                <div key={index} className="task">
                                                    <span dangerouslySetInnerHTML={{ __html: task.description }} />
                                                    {task.estimatedTime && <span className="estimated-time">{task.estimatedTime}</span>}
                                                </div>
                                            ))
                                        ) : (
                                            <div>No tasks</div>
                                        )}
                                    </div>
                                </td>
                            );
                        })}
                    </tr>
                    {/* Continue filling in the rest of the weeks */}
                    {Array.from({ length: 3 }, (_, weekIndex) => (
                        <tr key={weekIndex}>
                            {Array.from({ length: 7 }, (_, dayIndex) => {
                                const currentDate = new Date(startDate);
                                currentDate.setDate(startDate.getDate() + (weekIndex * 7) + dayIndex); // Calculate the current date

                                // Find tasks for each day
                                const tasksForDay = calendarData.find(task => task.date === `${currentDate.getMonth() + 1}/${currentDate.getDate()}/2024`)?.tasks || [];

                                return (
                                    <td key={dayIndex} className="cell">
                                        <div className="date">{currentDate.getDate()}</div>
                                        <div className="task-list">
                                            {tasksForDay.length > 0 ? (
                                                tasksForDay.map((task, index) => (
                                                    <div key={index} className="task">
                                                        <span dangerouslySetInnerHTML={{ __html: task.description }} />
                                                        {task.estimatedTime && <span className="estimated-time">{task.estimatedTime}</span>}
                                                    </div>
                                                ))
                                            ) : (
                                                <div>No tasks</div>
                                            )}
                                        </div>
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskCalendarSlide;
