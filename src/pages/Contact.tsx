import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import NavigationMenu from '../components/NavigationMenu';

const Contact: React.FC = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
            </div>

            <NavigationMenu />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-8 max-w-2xl"
            >
                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                    Get in Touch
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light">
                    I'm always open to new opportunities and interesting projects.
                </p>

                <div className="flex flex-col md:flex-row gap-6 mt-12 justify-center items-center">
                    <a
                        href="mailto:anazrizqin@gmail.com"
                        className="group flex items-center gap-4 px-8 py-4 bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:shadow-cyan-500/20 transition-all duration-300 w-full md:w-auto min-w-[200px]"
                    >
                        <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl group-hover:scale-110 transition-transform">
                            <Mail className="w-6 h-6 text-purple-500 dark:text-purple-400" />
                        </div>
                        <div className="text-left relative">
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Email Me</p>
                            <p className="text-slate-900 dark:text-white font-semibold break-all">Outlook</p>

                            {/* Hover Tooltip */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 shadow-lg">
                                anazrizqin@gmail.com
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800" />
                            </div>
                        </div>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/anas-rizqin-bin-nordin-055372332/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 px-8 py-4 bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:shadow-cyan-500/20 transition-all duration-300 w-full md:w-auto min-w-[200px]"
                    >
                        <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl group-hover:scale-110 transition-transform">
                            <Linkedin className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <div className="text-left relative">
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Connect</p>
                            <p className="text-slate-900 dark:text-white font-semibold">LinkedIn</p>

                            {/* Hover Tooltip */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 shadow-lg">
                                Anas Rizqin Bin Nordin
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800" />
                            </div>
                        </div>
                    </a>

                    <a
                        href="https://github.com/Qrizzy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 px-8 py-4 bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:shadow-cyan-500/20 transition-all duration-300 w-full md:w-auto min-w-[200px]"
                    >
                        <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl group-hover:scale-110 transition-transform">
                            <Github className="w-6 h-6 text-slate-900 dark:text-white" />
                        </div>
                        <div className="text-left relative">
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Follow</p>
                            <p className="text-slate-900 dark:text-white font-semibold">GitHub</p>

                            {/* Hover Tooltip */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 shadow-lg">
                                Qrizzy
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800" />
                            </div>
                        </div>
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
