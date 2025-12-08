import React from 'react';
import { Outlet, useLocation, useOutlet } from 'react-router-dom';
import ProfileSidebar from './ProfileSidebar';
import { motion, AnimatePresence } from 'framer-motion';

const ProfileLayout: React.FC = () => {
    const location = useLocation();
    const element = useOutlet(); // Capture element for animation

    // Simple logic: About is "left" (index 0), Skills is "right" (index 1)
    const isSkills = location.pathname.includes('skills');
    const direction = isSkills ? 1 : -1;

    // Override direction for initial load or if we want smarter logic
    // But simply: if moving TO skills (next), direction 1. If TO about (prev), direction -1.
    // We can just rely on the key change triggering animation. 
    // Since we only have 2 subpages here, simple logic works.

    // Better logic: reference previous path like Layout
    const prevPathRef = React.useRef(location.pathname);
    const directionRef = React.useRef(0);

    if (prevPathRef.current !== location.pathname) {
        if (location.pathname.includes('skills') && prevPathRef.current.includes('about')) {
            directionRef.current = 1; // slide left
        } else if (location.pathname.includes('about') && prevPathRef.current.includes('skills')) {
            directionRef.current = -1; // slide right
        } else {
            directionRef.current = 0; // default/cross-fade
        }
        prevPathRef.current = location.pathname;
    }

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '50%' : '-50%',
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? '-50%' : '50%',
            opacity: 0,
        }),
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            <ProfileSidebar />
            <div className="flex-1 bg-slate-50 dark:bg-slate-950 p-6 lg:p-12 overflow-y-auto h-screen relative transition-colors duration-300 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800">
                <AnimatePresence mode="wait" custom={directionRef.current}>
                    <motion.div
                        key={location.pathname}
                        custom={directionRef.current}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="w-full max-w-4xl mx-auto"
                    >
                        {element}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ProfileLayout;
