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
import ClassModelsSlide from './slides/ClassModelsSlide';
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
import './slides/SlideStyle.css';

const slides = [
    { id: 1, title: 'Social Network', component: <TitleSlide />, parentId: null },
    { id: 2, title: 'Project Overview', component: <ProjectOverviewSlide />, parentId: null },
    { id: 3, title: 'SQLite Database', component: <SQLiteSlide />, parentId: null },
    { id: 4, title: 'Class Models', component: <ClassModelsSlide />, parentId: null },
        { id: 5, title: 'User Model', component: <UserModelSlide />, parentId: 4 },
        { id: 6, title: 'Post Model', component: <PostModelSlide />, parentId: 4 },
        { id: 7, title: 'Comment Model', component: <CommentModelSlide />, parentId: 4 },
        { id: 8, title: 'Like Model', component: <LikeModelSlide />, parentId: 4 },
        { id: 9, title: 'Model Relationships', component: <ModelRelationshipsSlide />, parentId: 4 },
    { id: 10, title: 'API Routes', component: <APIRoutesSlide />, parentId: null },
    { id: 11, title: 'File Structure', component: <FileStructureSlide />, parentId: null },
    { id: 12, title: 'React File Structure', component: <ReactFileStructureSlide />, parentId: null },
    { id: 13, title: 'User Stories', component: <UserStoriesSlide />, parentId: null },
        { id: 14, title: 'User Registration', component: <UserRegistrationSlide />, parentId: 13 },
        { id: 15, title: 'User Login', component: <UserLoginSlide />, parentId: 13 },
        { id: 16, title: 'Creating a Post', component: <CreatingPostSlide />, parentId: 13 },
        { id: 17, title: 'Viewing the Main Feed', component: <MainFeedSlide />, parentId: 13 },
        { id: 18, title: 'Commenting and Liking', component: <CommentingAndLikingSlide />, parentId: 13 },
        { id: 19, title: 'Profile View', component: <ProfileViewSlide />, parentId: 13 },
    { id: 20, title: 'Task Calendar', component: <TaskCalendarSlide />, parentId: null },
];

const SlideShow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [expandedParents, setExpandedParents] = useState([]);
    const slideRef = useRef(null);
    const containerRef = useRef(null);

    const jumpToSlide = (index) => {
        if (index === currentSlide) return;
        if (index >= 0 && index < slides.length) {
            gsap.to(slideRef.current, {
                opacity: 0, duration: 0.5, onComplete: () => {
                    setCurrentSlide(index);
                    gsap.to(slideRef.current, { opacity: 1, duration: 0.5 });
                }
            });
        }
    };

    const openParent = (parentId) => {
        if (!expandedParents.includes(parentId)) {
            setExpandedParents([...expandedParents, parentId]);
        }
    };

    const toggleParent = (parentId) => {
        setExpandedParents(
            expandedParents.includes(parentId)
                ? expandedParents.filter(id => id !== parentId)
                : [...expandedParents, parentId]
        );
    };

    useEffect(() => {
        gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
        return () => {
            gsap.to(containerRef.current, { opacity: 0, duration: 1 });
        };
    }, []);

    useEffect(() => {
        gsap.fromTo(slideRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    }, [currentSlide]);

    return (
        <div ref={containerRef} className='slideshow-display'>
            <div id="left-column-slides" style={{ width: '200px', borderRight: '1px solid #ccc' }}>
                <ul>
                    {slides
                        .filter(slide => !slide.parentId)
                        .map((slide, index) => {
                            const children = slides.filter(child => child.parentId === slide.id);

                            return (
                                <li key={slide.id} style={{ cursor: 'pointer', padding: '10px' }}>
                                    <div
                                        onClick={() => {
                                            jumpToSlide(slides.findIndex(s => s.id === slide.id));
                                            openParent(slide.id); // Always open when clicked
                                        }}
                                        className={expandedParents.includes(slide.id) ? 'expanded' : ''}
                                        style={{ display: 'flex', alignItems: 'center' }}
                                    >
                                        {children.length > 0 && (
                                            <span
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleParent(slide.id); // Toggle only with +/- icon
                                                }}
                                                style={{ marginRight: '8px', fontWeight: 'bold', cursor: 'pointer' }}
                                            >
                                                {expandedParents.includes(slide.id) ? '-' : '+'}
                                            </span>
                                        )}
                                        {slide.title}
                                    </div>

                                    {expandedParents.includes(slide.id) && (
                                        <ul>
                                            {children.map((child) => (
                                                <li
                                                    key={child.id}
                                                    onClick={() => jumpToSlide(slides.findIndex(s => s.id === child.id))}
                                                    className={currentSlide === slides.findIndex(s => s.id === child.id) ? 'active' : ''}
                                                    style={{ cursor: 'pointer', padding: '5px 20px' }}
                                                >
                                                    {child.title}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                </ul>
            </div>

            <div id="right-column-slides">
                <div ref={slideRef} style={{ opacity: 1 }}>
                    {slides[currentSlide].component}
                </div>
            </div>
        </div>
    );
};

export default SlideShow;
