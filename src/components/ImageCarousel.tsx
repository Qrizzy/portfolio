import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CarouselImage {
    src: string;
    title: string;
    description: string;
}

interface ImageCarouselProps {
    images: CarouselImage[];
    mode: 'horizontal' | 'vertical'; // horizontal = Project 1, vertical = Project 2/3
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, mode }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Reset carousel when images source changes (e.g. switching tabs)
    React.useEffect(() => {
        setCurrentIndex(0);
    }, [images]);

    // Horizontal Mode (Teklinx Style)
    if (mode === 'horizontal') {
        const handleNext = (e: React.MouseEvent) => {
            e.stopPropagation();
            setCurrentIndex((prev) => (prev + 1) % images.length);
        };

        const handlePrev = (e: React.MouseEvent) => {
            e.stopPropagation();
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        };

        // We show one active image at a time for the carousel, or a row? 
        // "horizontal images carousel... title captions at the bottom... extendable when hovered"
        // This implies we see the image, and interaction is internal. 
        // Let's do a standard slider that shows one main image, but the interaction is on that image.

        const activeImage = images[currentIndex];

        return (
            <>
                <div className="relative w-full h-[400px] md:h-[500px] group overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900">
                    {/* Main Image */}
                    <div className="w-full h-full relative cursor-zoom-in" onClick={() => setIsFullscreen(true)}>
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentIndex}
                                src={activeImage.src}
                                alt={activeImage.title}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-full object-cover"
                            />
                        </AnimatePresence>

                        {/* Interactive Caption Overlay */}
                        <InteractiveCaption
                            title={activeImage.title}
                            description={activeImage.description}
                        />
                    </div>

                    {/* Dots Navigation (Top) */}
                    {images.length > 1 && (
                        <div className="absolute top-4 left-0 right-0 flex justify-center gap-2 z-30 pointer-events-none">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentIndex(idx);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 pointer-events-auto ${idx === currentIndex
                                        ? 'bg-cyan-500 w-6'
                                        : 'bg-white/50 hover:bg-white'
                                        }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={handlePrev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity z-20"
                            >
                                <ChevronLeft className="w-6 h-6 text-slate-700 dark:text-slate-200" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity z-20"
                            >
                                <ChevronRight className="w-6 h-6 text-slate-700 dark:text-slate-200" />
                            </button>
                        </>
                    )}
                </div>

                <FullscreenModal
                    image={activeImage}
                    isOpen={isFullscreen}
                    onClose={() => setIsFullscreen(false)}
                />
            </>
        );
    }

    // Vertical Mode (COMPET/Car Rental Style)
    // "vertical images carousel... on the left... on the right it has the Image description"
    // This implies a split view is handled here or by the parent. 
    // To keep this component reusable, let's assume it renders the Whole Split View for this mode.

    return (
        <div className="flex flex-col md:flex-row gap-6 h-[500px]">
            {/* Left: Vertical Image Carousel */}
            <div className="w-full md:w-1/2 h-full flex flex-col gap-4 relative">
                <div className="flex-1 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 relative">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex].src}
                            alt={images[currentIndex].title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full object-contain bg-slate-200 dark:bg-slate-900/50 cursor-zoom-in"
                            onClick={() => setIsFullscreen(true)}
                        />
                    </AnimatePresence>

                    <FullscreenModal
                        image={images[currentIndex]}
                        isOpen={isFullscreen}
                        onClose={() => setIsFullscreen(false)}
                    />

                    {/* Floating Nav for Mobile/Tablet or just visual aid */}
                    <div className="absolute bottom-4 right-4 flex gap-2">
                        <button
                            onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
                            className="p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm transition-colors"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
                            className="p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm transition-colors"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-2 py-4">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex
                                ? 'bg-cyan-500 w-8'
                                : 'bg-slate-300 dark:bg-slate-700 hover:bg-cyan-400/50'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Right: Description */}
            <div className="w-full md:w-1/2 h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                            {images[currentIndex].title}
                        </h3>
                        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                            <p className="whitespace-pre-wrap leading-relaxed">{images[currentIndex].description}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

// Component for the Project 1 interactive caption logic
const InteractiveCaption: React.FC<{ title: string; description: string }> = ({ title, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            className={`absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm p-4 cursor-pointer transition-all duration-500 flex flex-col justify-end overflow-hidden ${isExpanded ? 'h-full bg-slate-900/90' : 'h-16 hover:h-24'}`}
            onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
            }}
            layout
            whileHover="hover"
            initial="initial"
        >
            <motion.div layout className="flex items-center justify-between w-full mb-2">
                <h3 className="text-white font-bold text-lg truncate pr-4">{title}</h3>
                {!isExpanded && <span className="text-xs text-cyan-400 font-medium uppercase tracking-wider">Expand</span>}
                {isExpanded && <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Close</span>}
            </motion.div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-slate-200 text-sm leading-relaxed overflow-y-auto pr-2 max-h-[80%]"
                    >
                        {description}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hint text that appears on hover when NOT expanded */}
            {!isExpanded && (
                <motion.p
                    variants={{
                        initial: { opacity: 0, y: 5 },
                        hover: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-xs text-slate-300 truncate"
                >
                    {description}
                </motion.p>
            )}
        </motion.div>
    );
};

// Fullscreen Image Modal
const FullscreenModal: React.FC<{ image: CarouselImage; isOpen: boolean; onClose: () => void }> = ({ image, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/90 z-[70] flex items-center justify-center p-4 cursor-zoom-out"
                >
                    <motion.img
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        src={image.src}
                        alt={image.title}
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                    >
                        <ChevronRight className="w-6 h-6 rotate-45" /> {/* Using Chevron rotated as Close icon for simplicity or import X */}
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none">
                        <div className="text-center text-white/90">
                            <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                            <p className="text-sm opacity-80 max-w-2xl mx-auto">{image.description}</p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ImageCarousel;
