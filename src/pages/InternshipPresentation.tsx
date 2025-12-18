import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import NavigationMenu from '../components/NavigationMenu';
import ProjectDialog, { type ProjectData } from '../components/ProjectDialog';
import attDashboard from '../assets/att_dashboard.png';
import attViewAtt from '../assets/att_viewatt.png';
import attRequest from '../assets/att_request.png';
import dvDashboard from '../assets/dv_dashboard.png';
import dvUpload from '../assets/dv_upload.png';

import dvDashboardLight from '../assets/dv_dashboardlight.png';
import dvNotification from '../assets/dv_notification.png';
import dvViewDoc from '../assets/dv_viewdoc.png';

import attRequestDialog from '../assets/att_requestdialog.png';
import attUpload from '../assets/att_upload.png';
import attGenerate from '../assets/att_generate.png';

import lprRLogin from '../assets/lpr_r_login.png';
import lprRDashboard from '../assets/lpr_r_dashboard.png';
import lprRVVManagement from '../assets/lpr_r_vvmanagement.png';
import lprRAddVehicle from '../assets/lpr_r_addvehicle.png';
import lprRAddVisitor from '../assets/lpr_r_addvisitor.png';

import lprMPanel from '../assets/lpr_m_panel.png';
import lprMResRegs from '../assets/lpr_m_resregs.png';
import lprMParkings from '../assets/lpr_m_parkings.png';
import lprMVisitors from '../assets/lpr_m_visitors.png';
import lprMSpots from '../assets/lpr_m_spots.png';


const InternshipPresentation: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        // Slide 1: Introduction
        {
            id: 1,
            content: (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
                    <div className="flex flex-wrap justify-center gap-8 items-center bg-white/50 dark:bg-slate-800/50 p-8 rounded-3xl backdrop-blur-sm w-full max-w-3xl">
                        <img
                            src="https://teklinx.my/wp-content/uploads/2022/09/cropped-Teklinx-Logo.png"
                            alt="Teklinx Logo"
                            className="h-24 object-contain"
                        />
                        <div className="h-16 w-px bg-slate-300 dark:bg-slate-600 hidden md:block" />
                        <img
                            src="https://www.uitm.edu.my/images/template/logo_uitm_850x366.webp"
                            alt="UiTM Logo"
                            className="h-24 object-contain"
                        />
                    </div>

                    <div className="space-y-6 w-full max-w-3xl bg-white/40 dark:bg-slate-900/40 p-10 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl backdrop-blur-md">
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500 mb-8 pb-3 leading-tight">
                            Industrial Training
                        </h1>

                        <div className="grid grid-cols-1 gap-4 text-left text-lg">
                            <div className="flex flex-col md:flex-row md:items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                                <span className="font-bold text-slate-700 dark:text-slate-300 w-48">Presenter:</span>
                                <span className="text-slate-600 dark:text-slate-400">Anas Rizqin Bin Nordin</span>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                                <span className="font-bold text-slate-700 dark:text-slate-300 w-48">Matric No:</span>
                                <span className="text-slate-600 dark:text-slate-400">2023472042</span>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                                <span className="font-bold text-slate-700 dark:text-slate-300 w-48">Company:</span>
                                <span className="text-slate-600 dark:text-slate-400">Teklinx (M) Sdn Bhd</span>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                                <span className="font-bold text-slate-700 dark:text-slate-300 w-48">Industry Supervisor:</span>
                                <span className="text-slate-600 dark:text-slate-400">Arundhathi Prabhakar</span>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                                <span className="font-bold text-slate-700 dark:text-slate-300 w-48">Academic Supervisor:</span>
                                <span className="text-slate-600 dark:text-slate-400">Mohd Nabil Bin Zulhemay</span>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center pt-2">
                                <span className="font-bold text-slate-700 dark:text-slate-300 w-48">Duration:</span>
                                <span className="text-cyan-600 dark:text-cyan-400 font-semibold">22nd Sept 2025 - 1st Jan 2026</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        // Slide 2: Background
        {
            id: 2,
            content: (
                <div className="flex flex-col items-center justify-center h-full text-center max-w-6xl mx-auto">
                    <img
                        src="https://teklinx.my/wp-content/uploads/2022/09/cropped-Teklinx-Logo.png"
                        alt="Teklinx Logo"
                        className="h-20 mb-8 object-contain"
                    />
                    <h2 className="text-3xl md:text-5xl font-bold mb-10 text-slate-900 dark:text-white">Company Background</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-left">
                        {/* Company Overview */}
                        <div className="bg-white/50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg space-y-4">
                            <h3 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">Who They Are</h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                                Teklinx (M) Sdn Bhd is a top tech company in Malaysia that helps businesses grow using digital tools. They create custom IT solutions for all kinds of companies, from small startups to big corporations.
                            </p>
                            <div className="pt-4">
                                <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Main Goals</h4>
                                <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                                    <li>Improve Business Results</li>
                                    <li>Lower Operational Risks</li>
                                    <li>Modernize Business Operations</li>
                                    <li>Make IT a Key Business Strength</li>
                                </ul>
                            </div>
                        </div>

                        {/* Key Services */}
                        <div className="bg-white/50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg space-y-4">
                            <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">What They Do</h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                Teklinx offers many IT services, focussing on modern tools like AI and custom software to help clients succeed.
                            </p>
                            <div className="grid grid-cols-2 gap-4 pt-2">
                                <div>
                                    <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Services</h4>
                                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                                        <li className="flex items-center gap-2">🔹 IT Consulting</li>
                                        <li className="flex items-center gap-2">🔹 Custom Software</li>
                                        <li className="flex items-center gap-2">🔹 Cloud Services</li>
                                        <li className="flex items-center gap-2">🔹 Cyber Security</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Expertise</h4>
                                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                                        <li className="flex items-center gap-2">🔸 Agile Development</li>
                                        <li className="flex items-center gap-2">🔸 System Integration</li>
                                        <li className="flex items-center gap-2">🔸 UI/UX Design</li>
                                        <li className="flex items-center gap-2">🔸 Digital Transformation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        // Slide 3: Responsibilities
        {
            id: 3,
            content: (
                <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-slate-900 dark:text-white text-center">Frontend Developer Responsibilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-colors">
                            <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">💻</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">UI Implementation</h3>
                            <p className="text-slate-600 dark:text-slate-400">Transforming Figma designs into pixel-perfect, responsive React components using Tailwind CSS.</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-colors">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">🔗</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">API Integration</h3>
                            <p className="text-slate-600 dark:text-slate-400">Connecting frontend interfaces with backend services using Axios/Fetch and handling data state.</p>
                        </div>
                        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-colors">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">🐞</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Debugging & Optimization</h3>
                            <p className="text-slate-600 dark:text-slate-400">Identifying and resolving browser compatibility issues, layout bugs, and performance bottlenecks.</p>
                        </div>
                        <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 p-6 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-colors">
                            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">🤝</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Collaboration</h3>
                            <p className="text-slate-600 dark:text-slate-400">Participating in code reviews, daily stand-ups, and working closely with backend developers and designers.</p>
                        </div>
                    </div>
                </div>
            )
        },
        // Slide 4: Projects
        {
            id: 4,
            content: (
                <div className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-10 text-slate-900 dark:text-white text-center">Assigned Projects</h2>
                    <p className="text-slate-500 dark:text-slate-400 mb-8 text-center">(Click on a project card to view details)</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        {/* LPR */}
                        <div
                            onClick={() => setSelectedProject({
                                id: 101,
                                title: 'License Plate Registration',
                                subtitle: 'Module 1 - Residential Management',
                                description: 'A system for managing vehicles and visitors in housing areas. I built the websites for both residents and management, including login, vehicle registration, and visitor passes.',
                                layout: 'horizontal',
                                tags: ['Module 1', 'Frontend', 'Residential'],
                                images: [
                                    { src: lprRLogin, title: 'Unified Login', description: 'One login page for everyone.' },
                                    { src: lprRDashboard, title: 'Resident Dashboard', description: 'The main page for residents.' },
                                    { src: lprRVVManagement, title: 'Vehicle & Visitor Hub', description: 'Where residents manage their cars and guests.' },
                                    { src: lprRAddVehicle, title: 'Register Vehicle', description: 'Form to add a new car.' },
                                    { src: lprRAddVisitor, title: 'Register Visitor', description: 'Form to invite a guest.' },
                                    { src: lprMPanel, title: 'Management Panel', description: 'Overview for the building admins.' },
                                    { src: lprMResRegs, title: 'Resident Registration', description: 'Tool to add new residents.' },
                                    { src: lprMSpots, title: 'Parking Setup', description: 'Setting up parking lots.' },
                                    { src: lprMParkings, title: 'Parking View', description: 'See which spots are taken.' },
                                    { src: lprMVisitors, title: 'Visitor Logs', description: 'History of who visited.' },
                                ]
                            })}
                            className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                        >
                            <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500" />
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">License Plate Registration</h3>
                                <span className="text-xs font-semibold text-blue-500 mb-4 bg-blue-50 dark:bg-blue-900/20 py-1 px-2 rounded-md w-fit">Module 1</span>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1">
                                    A system for managing vehicles and visitors in housing areas.
                                </p>
                                <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2 list-disc pl-4">
                                    <li>Resident & Admin Websites</li>
                                    <li>Registering Vehicles</li>
                                    <li>Creating Visitor Passes</li>
                                    <li>Managing Parking Spots</li>
                                </ul>
                            </div>
                        </div>

                        {/* Document Vault */}
                        <div
                            onClick={() => setSelectedProject({
                                id: 102,
                                title: 'Document Vault',
                                subtitle: 'Module 2 - Employee Documentation',
                                description: 'A safe place to store digital documents for HR and employees. I built the page where employees upload files and where admins verify them.',
                                layout: 'horizontal',
                                tags: ['Module 2', 'Files', 'Security'],
                                images: [
                                    { src: dvDashboard, title: 'Dashboard', description: 'Main page to find documents.' },
                                    { src: dvUpload, title: 'Upload Page', description: 'Where you upload files safely.' },
                                    { src: dvDashboardLight, title: 'Light Mode', description: 'The dashboard in light colors.' },
                                    { src: dvViewDoc, title: 'File Viewer', description: 'Previewing a document.' },
                                    { src: dvNotification, title: 'Notifications', description: 'Alerts about document status.' },
                                ]
                            })}
                            className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                        >
                            <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500" />
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white group-hover:text-purple-500 transition-colors">Document Vault</h3>
                                <span className="text-xs font-semibold text-purple-500 mb-4 bg-purple-50 dark:bg-purple-900/20 py-1 px-2 rounded-md w-fit">Module 2</span>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1">
                                    A safe place to store digital documents for HR and employees.
                                </p>
                                <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2 list-disc pl-4">
                                    <li>Uploading Personal Docs</li>
                                    <li>Admin Approval System</li>
                                    <li>Status Alerts</li>
                                    <li>Safe File Viewing</li>
                                </ul>
                            </div>
                        </div>

                        {/* Attendance Management */}
                        <div
                            onClick={() => setSelectedProject({
                                id: 103,
                                title: 'Attendance Management',
                                subtitle: 'Module 3 - HR Administration',
                                description: 'A dashboard for HR to track employee attendance. It includes charts, bulk uploads, and report downloading.',
                                layout: 'horizontal',
                                tags: ['Module 3', 'HR', 'Charts'],
                                images: [
                                    { src: attDashboard, title: 'Admin Dashboard', description: 'Overview of who is present.' },
                                    { src: attViewAtt, title: 'Employee Details', description: 'Attendance history for one person.' },
                                    { src: attRequest, title: 'Correction Requests', description: 'Approving time off or fixes.' },
                                    { src: attRequestDialog, title: 'Proof Check', description: 'Checking submitted evidence.' },
                                    { src: attGenerate, title: 'Reports', description: 'Creating PDF/Excel reports.' },
                                    { src: attUpload, title: 'Mass Upload', description: 'Uploading many records at once.' },
                                ]
                            })}
                            className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                        >
                            <div className="h-2 bg-gradient-to-r from-orange-500 to-amber-500" />
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Attendance Management</h3>
                                <span className="text-xs font-semibold text-orange-500 mb-4 bg-orange-50 dark:bg-orange-900/20 py-1 px-2 rounded-md w-fit">Module 3</span>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1">
                                    A dashboard for HR to track employee attendance.
                                </p>
                                <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2 list-disc pl-4">
                                    <li>Daily Attendance Tracking</li>
                                    <li>Fixing Attendance Errors</li>
                                    <li>Bulk Data Upload</li>
                                    <li>Downloading Reports</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        // Slide 5: Conclusion
        {
            id: 5,
            content: (
                <div className="flex flex-col items-center justify-center h-full text-center max-w-4xl mx-auto animate-fade-in-up">
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500 mb-6">
                            Conclusion
                        </h2>
                        <div className="w-24 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
                    </div>

                    <div className="bg-white/50 dark:bg-slate-900/50 p-10 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Key Takeaways</h3>
                        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
                            My industrial training at Teklinx has been an invaluable experience.
                            I have significantly improved my technical skills in React and TypeScript,
                            gained real-world experience in agile software development, and learned
                            how to effectively collaborate within a professional engineering team.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mt-8">
                            <span className="px-6 py-3 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-full font-semibold">
                                Professional Growth
                            </span>
                            <span className="px-6 py-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full font-semibold">
                                Technical Mastery
                            </span>
                            <span className="px-6 py-3 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full font-semibold">
                                Industry Ready
                            </span>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(curr => curr + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(curr => curr - 1);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white flex flex-col relative overflow-hidden transition-colors duration-300">
            <NavigationMenu />

            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col relative z-10">
                <div className="flex-1 relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="h-full"
                        >
                            {slides[currentSlide].content}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="mt-12 flex items-center justify-between">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className={`
                            flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all
                            ${currentSlide === 0
                                ? 'opacity-0 pointer-events-none'
                                : 'bg-white dark:bg-slate-800 shadow-md hover:shadow-lg text-slate-700 dark:text-slate-200 hover:text-cyan-500'}
                        `}
                    >
                        <ChevronLeft className="w-5 h-5" />
                        Back
                    </button>

                    <div className="flex gap-3">
                        {slides.map((slide, idx) => (
                            <button
                                key={slide.id}
                                onClick={() => setCurrentSlide(idx)}
                                className={`
                                    w-3 h-3 rounded-full transition-all duration-300
                                    ${idx === currentSlide
                                        ? 'bg-cyan-500 w-8'
                                        : 'bg-slate-300 dark:bg-slate-700 hover:bg-cyan-300'}
                                `}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === slides.length - 1}
                        className={`
                            flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all
                            ${currentSlide === slides.length - 1
                                ? 'opacity-0 pointer-events-none'
                                : 'bg-white dark:bg-slate-800 shadow-md hover:shadow-lg text-slate-700 dark:text-slate-200 hover:text-cyan-500'}
                        `}
                    >
                        Next
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Project Details Dialog */}
            <ProjectDialog
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
};

export default InternshipPresentation;
