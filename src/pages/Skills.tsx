import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import ProgressBar from '../components/ProgressBar';

const Skills: React.FC = () => {
    return (
        <div className="space-y-8 pb-8">
            <header>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500 dark:from-cyan-400 dark:to-purple-400">
                    Detailed Skills
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-2">Proficiency breakdown.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Frontend</h3>
                    <ProgressBar label="React.js" score={10} />
                    <ProgressBar label="TypeScript" score={10} />
                    <ProgressBar label="Tailwind CSS" score={10} />
                    <ProgressBar label="HTML5" score={9} />
                    <ProgressBar label="CSS3" score={9} />
                    <ProgressBar label="JavaScript" score={8} />
                    <ProgressBar label="C#" score={6} />
                    <ProgressBar label="C++" score={6} />
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Backend Basics</h3>
                    <ProgressBar label="Java" score={7} />
                    <ProgressBar label="Node.js" score={5} />

                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Databases</h3>
                        <ProgressBar label="PostgreSQL" score={6} />
                        <ProgressBar label="MySQL" score={5} />
                        <ProgressBar label="Oracle" score={4} />
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Tools & Platforms</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                    <div>
                        <ProgressBar label="Visual Studio" score={9} />
                        <ProgressBar label="IntelliJ" score={6} />
                        <ProgressBar label="GitHub" score={6} />
                    </div>
                    <div>
                        <ProgressBar label="Docker Hub" score={4} />
                        <ProgressBar label="Android Studio" score={6} />
                        <ProgressBar label="Unity" score={6} />
                    </div>
                </div>
            </div>

            <div className="flex justify-between mt-8">
                <Link
                    to="/profile/about"
                    className="group flex items-center gap-2 text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium uppercase tracking-wider">View About</span>
                </Link>

                <Link
                    to="/projects"
                    className="group flex items-center gap-2 text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                    <span className="text-sm font-medium uppercase tracking-wider">View Projects</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

export default Skills;
