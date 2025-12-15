import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Lock, Download } from 'lucide-react';
import ImageCarousel, { type CarouselImage } from './ImageCarousel';

export interface ProjectTab {
    id: string;
    title: string;
    images: CarouselImage[];
}

export interface ProjectData {
    id: number;
    title: string;
    subtitle: string;
    description: string; // Overall project description
    layout: 'horizontal' | 'vertical'; // Maps to ImageCarousel 'mode'
    images: CarouselImage[];
    tabs?: ProjectTab[]; // Optional categories for images
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
    const [activeTabId, setActiveTabId] = React.useState<string | null>(null);

    // Lock body scroll when open and reset tabs
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setActiveTabId(null); // Always start with "Overview" (no tab selected)
        } else {
            document.body.style.overflow = 'unset';
            setActiveTabId(null); // Reset on close
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const handleTabChange = (id: string) => setActiveTabId(id);

    // Determine images to show
    const displayImages = React.useMemo(() => {
        if (!project) return [];
        if (project.tabs && activeTabId) {
            const tab = project.tabs.find(t => t.id === activeTabId);
            return tab ? tab.images : [];
        }
        return project.images;
    }, [project, activeTabId]);

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

                                {/* Tabs Navigation */}
                                {project.tabs && project.tabs.length > 0 && (
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                            Contributed Projects
                                            <span className="text-xs font-normal normal-case text-slate-400 dark:text-slate-500">
                                                (Click to view the project features)
                                            </span>
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tabs.map((tab) => (
                                                <button
                                                    key={tab.id}
                                                    onClick={() => handleTabChange(tab.id)}
                                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeTabId === tab.id
                                                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                                                        }`}
                                                >
                                                    {tab.title}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Carousel Area */}
                                <div className="w-full">
                                    {displayImages.length > 0 ? (
                                        <ImageCarousel
                                            images={displayImages}
                                            mode={project.layout}
                                        />
                                    ) : (
                                        <div className="w-full h-64 bg-slate-100 dark:bg-slate-900 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-400">
                                            No images available for this section.
                                        </div>
                                    )}
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
