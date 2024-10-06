import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import UserModelSlide from './slides/UserModelSlide';
import PostModelSlide from './slides/PostModelSlide';
import CommentModelSlide from './slides/CommentModelSlide';
import FriendshipModelSlide from './slides/FriendshipModelSlide';
import FileStructureSlide from './slides/FileStructureSlide';
import UserStoriesSlide from './slides/UserStoriesSlide';
import TitleSlide from './slides/TitleSlide';
import ProjectOverviewSlide from './slides/ProjectOverviewSlide';
import TaskCalendarSlide from './slides/TaskCalendarSlide';
import ReactFileStructureSlide from './slides/ReactFileStructureSlide';
import APIRoutesSlide from './slides/APIRoutesSlide';
import DatabaseModelSlide from './slides/DatabaseModelSlide';
import AnimatedDatabaseSlide from './slides/AnimatedDatabaseSlide';
import UserRegistrationSlide from './slides/UserRegistrationSlide';
import UserLoginSlide from './slides/UserLoginSlide';
import CreatingPostSlide from './slides/CreatingPostSlide';
import MainFeedSlide from './slides/MainFeedSlide';
import CommentingAndLikingSlide from './slides/CommentingAndLikingSlide';
import LikeModelSlide from './slides/LikeModelSlide';
import ModelRelationshipsSlide from './slides/ModelRelationshipsSlide';
import SQLiteSlide from './slides/SQLiteSlide.jsx';
import ProfileViewSlide from './slides/ProfileViewSlide';
import DatabaseMigrationSlide from './slides/DatabaseMigrationSlide';

const slides = [
    { title: 'Social Network', component: <TitleSlide /> },
    { title: 'Project Overview', component: <ProjectOverviewSlide /> },

    { title: 'Database Models', component: <DatabaseModelSlide /> },
        { title: 'User Model', component: <UserModelSlide /> },
        { title: 'Post Model', component: <PostModelSlide /> },
        { title: 'Comment Model', component: <CommentModelSlide /> },
        { title: 'Like Model', component: <LikeModelSlide /> },
        { title: 'Model Relationships', component: <ModelRelationshipsSlide /> },

        { title: 'File Structure', component: <FileStructureSlide /> },
        { title: 'React File Structure', component: <ReactFileStructureSlide /> },
        { title: 'SQLite Database', component: <SQLiteSlide /> },
        { title: 'API Routes', component: <APIRoutesSlide /> },

    { title: 'User Stories', component: <UserStoriesSlide /> },
        { title: 'User Registration', component: <UserRegistrationSlide /> },
        { title: 'User Login', component: <UserLoginSlide /> },
        { title: 'Creating a Post', component: <CreatingPostSlide /> },
        { title: 'Viewing the Main Feed', component: <MainFeedSlide /> },
        { title: 'Commenting and Liking', component: <CommentingAndLikingSlide /> },
        { title: 'Profile View', component: <ProfileViewSlide /> },

    { title: 'Task Calendar', component: <TaskCalendarSlide /> },
];

const SlideShow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

    const jumpToSlide = (index) => {
        if (index >= 0 && index < slides.length) {
            gsap.to(slideRef.current, { opacity: 0, duration: 0.5, onComplete: () => {
                setCurrentSlide(index);
                gsap.to(slideRef.current, { opacity: 1, duration: 0.5 });
            }});
        }
    };

    useEffect(() => {
        gsap.fromTo(slideRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    }, []);

    return (
        <div className='slideshow-display'>
            <div id="left-column-slides" style={{ width: '200px', borderRight: '1px solid #ccc' }}>
            {/* <div >
                <button 
                    onClick={() => jumpToSlide((currentSlide - 1 + slides.length) % slides.length)}
                    disabled={currentSlide === 0}
                >
                    Previous
                </button>
                <button 
                    onClick={() => jumpToSlide((currentSlide + 1) % slides.length)}
                    disabled={currentSlide === slides.length - 1}
                >
                    Next
                </button>
            </div> */}
                <ul>
                    {slides.map((slide, index) => (
                        <li
                            key={index}
                            onClick={() => jumpToSlide(index)}
                            className={currentSlide === index ? 'active' : ''}
                            style={{
                                cursor: 'pointer',
                                padding: '10px',
                            }}
                        >
                            {slide.title}
                        </li>
                    ))}
                </ul>
            </div>

            <div id="right-column-slides" >
                <div ref={slideRef} style={{ opacity: 1 }}>
                    {slides[currentSlide].component}
                </div>
            </div>
        </div>
    );
};

export default SlideShow;
