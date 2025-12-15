import React from 'react';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NavigationMenu from './NavigationMenu';

import soloImg from '../assets/solo.jpg';
import catImg from '../assets/cat.jpg';

const ProfileSidebar: React.FC = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [hasClicked, setHasClicked] = React.useState(false);
    const images = [
        soloImg,
        catImg
    ];

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        if (!hasClicked) setHasClicked(true);
    };

    // ... existing code ...

    return (
        <div className="w-full lg:w-1/3 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border-r border-slate-200 dark:border-slate-800 p-8 flex flex-col items-center text-center lg:h-screen lg:sticky lg:top-0 z-20 transition-colors duration-300 relative">
            <NavigationMenu />

            <div
                className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-slate-100 dark:bg-slate-800 ring-4 ring-cyan-500/20 mb-6 relative group flex items-center justify-center cursor-pointer transition-transform active:scale-95"
                onClick={handleNext}
            >
                <div className="w-full h-full rounded-full overflow-hidden relative z-10">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            alt={`Profile ${currentIndex + 1}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full object-cover bg-white"
                        />
                    </AnimatePresence>
                </div>

                {/* Click Overlay */}
                <div className="absolute inset-0 rounded-full bg-slate-900/10 dark:bg-slate-100/10 opacity-0 active:opacity-100 z-20 pointer-events-none transition-opacity" />

                {/* Interaction Hint Bubble */}
                <AnimatePresence>
                    {!hasClicked && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20
                            }}
                            className="absolute top-4 right-0 z-30 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-bold py-1 px-3 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 whitespace-nowrap"
                        >
                            Click me!
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Navigation Arrows Removed */}

                {/* Dot Indicators */}
                <div className="absolute -bottom-6 flex gap-2">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentIndex(idx);
                                if (!hasClicked) setHasClicked(true);
                            }}
                            className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex
                                ? 'bg-cyan-500'
                                : 'bg-slate-300 dark:bg-slate-700 hover:bg-cyan-400'
                                }`}
                            aria-label={`Go to image ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Anas Rizqin Bin Nordin</h2>
            <p className="text-cyan-400 font-medium mb-6">Junior Frontend Developer</p>

            <div className="w-full space-y-4 text-left">
                <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span>Shah Alam, Selangor</span>
                </div>

                <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        <Mail className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="break-all">anazrizqin@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        <Linkedin className="w-4 h-4 text-cyan-400" />
                    </div>
                    <a href="https://www.linkedin.com/in/anas-rizqin-bin-nordin-055372332/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition-colors">LinkedIn Profile</a>
                </div>
                <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        <Github className="w-4 h-4 text-cyan-400" />
                    </div>
                    <a href="https://github.com/Qrizzy" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition-colors">GitHub Profile</a>
                </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 w-full">
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed text-justify">
                    Frontend Developer and fresh Computer Science graduate with experience in <b>React.js, TypeScript, JavaScript, and Tailwind CSS. </b>
                    Experienced in <b>UI development, responsive web design, and REST API integration</b>. Seeking a <b>full-time Frontend Developer role.</b>
                    Fluent in both Malay and English to ensure effective communications in working environment.
                </p>
            </div>
        </div>
    );
};

export default ProfileSidebar;
