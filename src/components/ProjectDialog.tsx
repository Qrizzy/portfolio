import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Lock, Download } from 'lucide-react';
import ImageCarousel, { type CarouselImage } from './ImageCarousel';

export interface ProjectData {
    id: number;
    title: string;
    subtitle: string;
    description: string; // Overall project description
    layout: 'horizontal' | 'vertical'; // Maps to ImageCarousel 'mode'
    images: CarouselImage[];
    githubUrl?: string;
    isPrivate?: boolean;
    downloadUrl?: string;
    tags?: string[];
}

interface ProjectDialogProps {
    project: ProjectData | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({ project, isOpen, onClose }) => {
    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 lg:p-8"
                    >
                        {/* Dialog Content */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-slate-900 w-full max-w-6xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col relative border border-slate-200 dark:border-slate-800"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors z-[60]"
                            >
                                <X className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                            </button>

                            {/* Header Section */}
                            <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 z-10">
                                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500 dark:from-cyan-400 dark:to-purple-400">
                                    {project.title}
                                </h2>
                                <div className="flex items-center gap-2 mt-1 text-lg text-slate-500 dark:text-slate-400 flex-wrap">
                                    <span>{project.subtitle}</span>
                                    {project.githubUrl && (
                                        <>
                                            <span className="opacity-50">|</span>
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 hover:text-cyan-500 transition-colors"
                                            >
                                                <Github className="w-5 h-5" />
                                                <span className="text-base font-medium underline decoration-2 decoration-transparent hover:decoration-cyan-500 transition-all">
                                                    View on GitHub
                                                </span>
                                            </a>
                                        </>
                                    )}
                                    {project.isPrivate && (
                                        <>
                                            <span className="opacity-50">|</span>
                                            <span className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 cursor-help" title="Code not available publicly">
                                                <Lock className="w-4 h-4" />
                                                <span className="text-base font-medium italic">
                                                    Private company assets
                                                </span>
                                            </span>
                                        </>
                                    )}
                                    {project.downloadUrl && (
                                        <>
                                            <span className="opacity-50">|</span>
                                            <a
                                                href={project.downloadUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 hover:text-cyan-500 transition-colors"
                                            >
                                                <Download className="w-5 h-5" />
                                                <span className="text-base font-medium underline decoration-2 decoration-transparent hover:decoration-cyan-500 transition-all">
                                                    Download APK
                                                </span>
                                            </a>
                                        </>
                                    )}
                                </div>
                                {/* Tags */}
                                {project.tags && project.tags.length > 0 && (
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 rounded-full text-sm font-medium bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Main Content Area */}
                            <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50 dark:bg-slate-950/50">
                                <div className="mb-8 w-full">
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Carousel Area */}
                                <div className="w-full">
                                    <ImageCarousel
                                        images={project.images}
                                        mode={project.layout}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectDialog;
