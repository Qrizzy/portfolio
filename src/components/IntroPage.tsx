import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import NavigationMenu from '../components/NavigationMenu';

const IntroPage: React.FC = () => {
    return (
        <div className="h-screen flex flex-col justify-between items-center p-8 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <NavigationMenu />
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
            </div>

            <div className="flex-1 flex flex-col justify-center items-center text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                        Hello, Welcome
                    </h1>
                    <h2 className="text-2xl md:text-4xl mt-4 text-slate-600 dark:text-slate-300 font-light">to my introduction page!</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <Link
                        to="/profile/about"
                        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-900 overflow-hidden rounded-full transition-all hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 shadow-lg dark:shadow-none"
                    >
                        <span className="text-lg font-medium text-slate-700 dark:text-slate-200 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">View</span>
                        <ArrowRight className="w-5 h-5 text-slate-500 dark:text-slate-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 rounded-full ring-2 ring-slate-900/5 dark:ring-white/10 group-hover:ring-cyan-500/20 transition-all" />
                    </Link>
                </motion.div>

            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="flex gap-8 pb-8">
                <h3 className="text-md md:text-md mt-4 text-slate-600 dark:text-slate-300 font-light">Made by Anas Rizqin Bin Nordin with React.js and TypeScript</h3>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="flex gap-8 pb-8"
            >
                <a href="https://www.linkedin.com/in/anas-rizqin-bin-nordin-055372332/" target="_blank" rel="noopener noreferrer" className="p-3 text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-slate-800/50 rounded-full transition-all">
                    <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:anazrizqin@gmail.com" className="p-3 text-slate-500 dark:text-slate-400 hover:text-purple-500 dark:hover:text-purple-400 hover:bg-slate-200 dark:hover:bg-slate-800/50 rounded-full transition-all">
                    <Mail className="w-6 h-6" />
                </a>
                <a href="https://github.com/Qrizzy" target="_blank" rel="noopener noreferrer" className="p-3 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800/50 rounded-full transition-all">
                    <Github className="w-6 h-6" />
                </a>
            </motion.div>
        </div>
    );
};

export default IntroPage;
