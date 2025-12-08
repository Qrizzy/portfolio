import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
    label: string;
    score: number;
    total?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, score, total = 10 }) => {
    const percentage = (score / total) * 100;

    return (
        <div className="mb-4">
            <div className="flex justify-between items-end mb-1">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{label}</span>
                <span className="text-xs text-cyan-600 dark:text-cyan-400 font-bold">{score}/{total}</span>
            </div>
            <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                />
            </div>
        </div>
    );
};

export default ProgressBar;
