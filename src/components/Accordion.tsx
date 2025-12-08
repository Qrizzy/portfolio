import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

interface AccordionItemProps {
    title: string;
    isOpen: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, isOpen, onClick, children }) => {
    return (
        <div className="mb-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm transition-colors duration-300">
            <button
                onClick={onClick}
                className={clsx(
                    "flex w-full items-center justify-between px-6 py-4 text-left transition-colors",
                    isOpen ? "bg-slate-100/50 dark:bg-slate-800/50 text-cyan-500 dark:text-cyan-400" : "text-slate-700 dark:text-slate-200 hover:bg-slate-100/30 dark:hover:bg-slate-800/30"
                )}
            >
                <span className="text-lg font-medium">{title}</span>
                <ChevronDown
                    className={clsx(
                        "h-5 w-5 transition-transform duration-300",
                        isOpen && "rotate-180 text-cyan-500 dark:text-cyan-400"
                    )}
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 py-4 text-slate-600 dark:text-slate-300 border-t border-slate-200/50 dark:border-slate-800/50">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
