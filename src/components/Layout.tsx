import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Layout: React.FC = () => {
    const location = useLocation();
    const element = useOutlet();
    const prevPathRef = React.useRef(location.pathname);
    const directionRef = React.useRef(1);

    const routes = ['/', '/profile/about', '/profile/skills', '/projects'];

    const currentPathIndex = routes.indexOf(location.pathname);
    const prevPathIndex = routes.indexOf(prevPathRef.current);

    if (currentPathIndex !== prevPathIndex) {
        if (currentPathIndex > prevPathIndex) {
            directionRef.current = 1; // Slide Left (Next)
        } else {
            directionRef.current = -1; // Slide Right (Back)
        }
        prevPathRef.current = location.pathname;
    }

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? '-100%' : '100%',
            opacity: 0,
        }),
    };

    const getAnimationKey = () => {
        if (location.pathname.startsWith('/profile')) {
            return 'profile-section';
        }
        return location.pathname;
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white overflow-hidden font-sans selection:bg-cyan-500/30 transition-colors duration-300">
            <div className="fixed top-4 right-4 z-50">
                <ThemeToggle />
            </div>
            <AnimatePresence mode="wait" custom={directionRef.current}>
                <motion.div
                    key={getAnimationKey()}
                    custom={directionRef.current}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="h-full w-full"
                >
                    {element}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Layout;
