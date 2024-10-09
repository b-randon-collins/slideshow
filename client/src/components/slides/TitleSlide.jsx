import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const TitleSlide = () => {
    const title = "Welcome"; // Title constant



    return (
        <div >
            <h1>{title}</h1>
            <h2>Your Name</h2>
            <h3>Course Name / Instructor’s Name</h3>
        </div>
    );
};

export default TitleSlide;
