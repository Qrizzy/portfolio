import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Box } from 'lucide-react';

const Projects: React.FC = () => {
    return (
        <div className="min-h-screen p-8 md:p-16 flex flex-col items-center justify-center text-center relative">
            <Link to="/" className="absolute top-6 left-6 p-2 rounded-full bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all shadow-sm z-30 group">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </Link>
            <div className="w-24 h-24 bg-cyan-100 dark:bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 animate-bounce">
                <Box className="w-12 h-12 text-cyan-600 dark:text-cyan-400" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500 dark:from-cyan-400 dark:to-purple-400 mb-4">
                Projects Showcase
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-12">
                This section is currently under development. Soon it will display a collection of my best frontend work.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {/* Project Placeholders */}
                {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-video rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 flex items-center justify-center group hover:border-cyan-500/50 transition-all cursor-pointer shadow-sm dark:shadow-none">
                        <span className="text-slate-500 dark:text-slate-400 font-medium group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">Project {i} Placeholder</span>
                    </div>
                ))}
            </div>

            <Link
                to="/profile/skills"
                className="mt-16 flex items-center gap-2 text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Skills</span>
            </Link>
        </div>
    );
};

export default Projects;
