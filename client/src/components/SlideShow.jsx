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
import ViewProfileSlide from './slides/ViewProfileSlide';
import ProfileViewSlide from './slides/ProfileViewSlide';
import DatabaseMigrationSlide from './slides/DatabaseMigrationSlide';
import './slides/SlideStyle.css';
import SQLAlchemyQueriesSlide from './slides/SQLAlchemyQueriesSlide.jsx';
import UserRoutesSlide from './slides/UserRoutesSlide.jsx';
import PostRoutesSlide from './slides/PostRoutesSlide.jsx';
import CommentRouteSlide from './slides/CommentRouteSlide.jsx';
import LikeRouteSlide from './slides/LikeRouteSlide.jsx';
import ReactUIRoutingSlide from './slides/ReactUIRoutingSlide.jsx';
import ReactUISlide from './slides/ReactUISlide.jsx';
import RegistrationFormSlide from './slides/RegistrationFormSlide.jsx';
import LoginFormSlide from './slides/LoginFormSlide.jsx';
import CreatePostFormSlide from './slides/CreatePostFormSlide.jsx';
import SocketIOLiveUpdatesSlide from './slides/SocketIOLiveUpdatesSlide.jsx';
import ReduxStateManagementSlide from './slides/SocketIo/ReduxStateManagementSlide.jsx';

import Modal from './uiUtilities.jsx/Modal.jsx';
import ReduxStoreSetupSlide from './slides/ReduxStoreSetupSlide.jsx';
import UserSliceSlide from './slides/UserSliceSlide.jsx';
import PostSliceSlide from './slides/PostSliceSlide.jsx';
import CommentSliceSlide from './slides/ReduxToolKit/CommentSliceSlide.jsx';
import DatabaseModelSlide from './slides/DatabaseModelSlide.jsx';
import SocketClientSlide from './slides/SocketClientSlide.jsx';
import SocketServerSlide from './slides/SocketIo/SocketServerSlide.jsx';
import SocketContextSlide from './slides/SocketIo/SocketContextSlide.jsx';
import SocketEventsSlide from './slides/SocketIo/SocketEventsSlide.jsx';
import ChatComponentSlide from './slides/SocketIo/ChatComponentSlide.jsx';
import CommentBlockSlide from './slides/ReactUI/CommentBlockSlide.jsx';
import LikeButtonSlide from './slides/ReactUI/LikeButtonSlide.jsx';
import ViewMainFeedSlide from './slides/ReactUI/ViewMainFeedSlide.jsx';
import NotificationSlide from './slides/ReactUI/NotificationSlide.jsx';


const slides = [
    { id: 1, title: 'Welcome', component: <TitleSlide />, parentId: null },
    { id: 2, title: 'Project Overview', component: <ProjectOverviewSlide />, parentId: null },
    // { id: 3, title: 'SQLite Database', component: <SQLiteSlide />, parentId: null },

    { id: 29, title: 'User Stories', component: <UserStoriesSlide />, parentId: null },
        { id: 14, title: 'Registration', component: <UserRegistrationSlide />, parentId: 29 },
        { id: 15, title: 'Login', component: <UserLoginSlide />, parentId: 29 },
        { id: 16, title: 'Create Posts', component: <CreatingPostSlide />, parentId: 29 },
        { id: 17, title: 'Main Feed', component: <MainFeedSlide />, parentId: 29 },
        { id: 18, title: 'Commenting and Liking', component: <CommentingAndLikingSlide />, parentId: 29 },
        { id: 19, title: 'View Profile', component: <ViewProfileSlide />, parentId: 29 },


    { id: 4, title: 'Class Models', component: <ClassModelsSlide />, parentId: null },
        { id: 5, title: 'User', component: <UserModelSlide />, parentId: 4 },
        { id: 6, title: 'Post', component: <PostModelSlide />, parentId: 4 },
        { id: 7, title: 'Comment', component: <CommentModelSlide />, parentId: 4 },
        { id: 8, title: 'Like', component: <LikeModelSlide />, parentId: 4 },
        { id: 9, title: 'Relationships', component: <ModelRelationshipsSlide />, parentId: 4 },
        { id: 42, title: 'Database', component: <DatabaseModelSlide />, parentId: 4 },

    { id: 10, title: 'API Routes', component: <APIRoutesSlide />, parentId: null },
        { id: 21, title: 'SQLAlchemy Queries', component: <SQLAlchemyQueriesSlide />, parentId: 10 },
        // { id: 22, title: 'API Routes', component: <APIRoutesSlide />, parentId: 10 },
        { id: 23, title: 'User', component: <UserRoutesSlide />, parentId: 10 },
        { id: 24, title: 'Post', component: <PostRoutesSlide />, parentId: 10 },
        { id: 25, title: 'Comment', component: <CommentRouteSlide />, parentId: 10 },
        { id: 26, title: 'Likes', component: <LikeRouteSlide />, parentId: 10 },

    // { id: 34, title: 'File Structure', component: <FileStructureSlide />, parentId: null },
    { id: 27, title: 'React UI', component: <ReactUISlide />, parentId: null },
    { id: 30, title: 'URL Routing', component: <ReactUIRoutingSlide />, parentId: 27 },
    { id: 32, title: 'Registartion', component: <RegistrationFormSlide />, parentId: 27 },
    { id: 33, title: 'Login', component: <LoginFormSlide />, parentId: 27 },
    { id: 34, title: 'Create Post', component: <CreatePostFormSlide />, parentId: 27 },
    { id: 48, title: 'View Main Feed', component: <ViewMainFeedSlide />, parentId: 27 },
    { id: 35, title: 'View Profile', component: <ProfileViewSlide />, parentId: 27 },
    { id: 50, title: 'Comment Block', component: <CommentBlockSlide />, parentId: 27 },
    { id: 49, title: 'Like Button', component: <LikeButtonSlide />, parentId: 27 },
    { id: 51, title: 'Notifications', component: <NotificationSlide />, parentId: 27 },

    
    
    


    { id: 47, title: 'Socket IO', component: <SocketIOLiveUpdatesSlide />, parentId: null },
    { id: 36, title: 'Client', component: <SocketClientSlide />, parentId: 47 },
    { id: 43, title: 'Server', component: <SocketServerSlide />, parentId: 47 },
    { id: 44, title: 'Context', component: <SocketContextSlide />, parentId: 47 },
    { id: 45, title: 'Events', component: <SocketEventsSlide />, parentId: 47 },
    { id: 46, title: 'Chat Component', component: <ChatComponentSlide />, parentId: 47 },



    
    



    { id: 37, title: 'Redux: Toolkit', component: <ReduxStateManagementSlide />, parentId: null },
    { id: 38, title: 'Store Setup', component: <ReduxStoreSetupSlide />, parentId: 37 },
    { id: 39, title: 'User Slice', component: <UserSliceSlide />, parentId: 37 },
    { id: 40, title: 'Post Slice', component: <PostSliceSlide />, parentId: 37 },
    { id: 41, title: 'Comment Slice', component: <CommentSliceSlide />, parentId: 37 },

    { id: 20, title: 'Task Calendar', component: <TaskCalendarSlide />, parentId: null },
];

const SlideShow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [expandedParents, setExpandedParents] = useState([]);
    const slideRef = useRef(null);
    const containerRef = useRef(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (Component) => {
        setModalContent(() => Component);
        setIsModalOpen(true);
      };
    
    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
      };

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
            <div id="left-column-slides" style={{ borderRight: '1px solid #ccc' }}>
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
        if (children.length > 0) {
            openParent(slide.id); // Only open when clicked if the parent has children
        }
    }}
    className={expandedParents.includes(slide.id) && children.length > 0 ? 'expanded' : ''}
    style={{ display: 'flex', alignItems: 'center' }}
>
    {children.length > 0 && (
        <span
            onClick={(e) => {
                e.stopPropagation();
                toggleParent(slide.id); // Toggle only with +/- icon if there are children
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
                <div ref={slideRef}>
                    {React.cloneElement(slides[currentSlide].component, { openModal })}
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>{modalContent}</Modal>
        </div>
    );
};

export default SlideShow;
