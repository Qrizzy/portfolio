import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Zap, FolderGit2, Mail } from 'lucide-react';

const NavigationMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Prevent body scroll when menu is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const links = [
        { path: '/', label: 'Home', icon: Home },
        { path: '/profile/about', label: 'About Me', icon: User },
        { path: '/profile/skills', label: 'Skills', icon: Zap },
        { path: '/projects', label: 'Projects', icon: FolderGit2 },
        { path: '/contact', label: 'Contact Me', icon: Mail },
    ];

    return (
        <>
            {/* Burger Trigger */}
            <button
                onClick={() => setIsOpen(true)}
                className="absolute top-6 left-6 p-2 rounded-full bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all shadow-sm z-30 group"
                aria-label="Open Menu"
            >
                <Menu className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>

            {/* Backdrop & Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                        />

                        {/* Sidebar Drawer */}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 bottom-0 w-72 bg-white dark:bg-slate-900 shadow-2xl z-[70] p-6 flex flex-col"
                        >
                            {/* Header / Close */}
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500">
                                    Navigation
                                </h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                >
                                    <X className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                                </button>
                            </div>

                            {/* Links */}
                            <nav className="flex-1 space-y-2">
                                {links.map((link) => {
                                    const Icon = link.icon;
                                    const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));

                                    return (
                                        <NavLink
                                            key={link.path}
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={({ isActive: linkActive }) => `
                                                flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300
                                                ${isActive || linkActive
                                                    ? 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-semibold'
                                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200'}
                                            `}
                                        >
                                            <Icon className={`w-5 h-5 ${isActive ? 'text-cyan-500' : 'text-slate-400'}`} />
                                            <span>{link.label}</span>
                                        </NavLink>
                                    );
                                })}
                            </nav>

                            {/* Footer */}
                            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                                <p className="text-xs text-center text-slate-400 dark:text-slate-500">
                                    © 2025 Anas Rizqin
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default NavigationMenu;
