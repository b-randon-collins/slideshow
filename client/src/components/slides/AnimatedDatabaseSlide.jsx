import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const AnimatedDatabaseSlide = () => {
    const [currentTable, setCurrentTable] = useState('UserTable');
    
    const tables = {
        UserTable: { /* User table data */ },
        PostTable: { /* Post table data */ },
        // Other tables...
    };

    useEffect(() => {
        const animateTable = async () => {
            // Show the current table
            gsap.from(`#${currentTable}`, { opacity: 0, duration: 1 });
            
            // Move the current table out
            gsap.to(`#${currentTable}`, { x: -100, duration: 1 });
            
            // Wait for a second and then show the next table
            setTimeout(() => {
                setCurrentTable('PostTable'); // Change to the next table
                gsap.from(`#PostTable`, { opacity: 0, duration: 1 });
            }, 2000); // Adjust timing as necessary
        };
        
        animateTable();
    }, [currentTable]);

    return (
        <div>
            <div id="UserTable" className="table"> {/* User Table */} </div>
            <div id="PostTable" className="table" style={{ display: currentTable === 'PostTable' ? 'block' : 'none' }}> {/* Post Table */} </div>
            {/* Additional tables */}
        </div>
    );
};

export default AnimatedDatabaseSlide;
