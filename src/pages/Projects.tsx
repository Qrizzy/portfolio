import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Box, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectDialog, { type ProjectData } from '../components/ProjectDialog';
import NavigationMenu from '../components/NavigationMenu';


import attDashboard from '../assets/att_dashboard.png';
import attViewAtt from '../assets/att_viewatt.png';
import attRequest from '../assets/att_request.png';
import dvDashboard from '../assets/dv_dashboard.png';
import dvUpload from '../assets/dv_upload.png';

import dvDashboardLight from '../assets/dv_dashboardlight.png';
import dvNotification from '../assets/dv_notification.png';
import dvViewDoc from '../assets/dv_viewdoc.png';

import adminDash from '../assets/admindash.png';
import attRequestDialog from '../assets/att_requestdialog.png';
import attUpload from '../assets/att_upload.png';

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

import competMainMenu from '../assets/compet_mainmenu.png';
import competPlayTreatment from '../assets/compet_playtreatment.png';
import competPlayQuiz from '../assets/compet_playquiz.png';
import competLearnMenu from '../assets/compet_learnmenu.png';
import competDetailedLearn from '../assets/compet_detailedlearn.png';
import competPlayMenu from '../assets/compet_playmenu.png';
import competPlayTool from '../assets/compet_playtool.png';
import competPointShop from '../assets/compet_pointshop.png';
import competPointShopUnequipped from '../assets/compet_pointshpoeunequipped.png';

import carBook from '../assets/car_book.png';
import carHome from '../assets/car_home.png';
import carLogin from '../assets/car_login.png';
import carView from '../assets/car_view.png';



const projectData: ProjectData[] = [
    {
        id: 1,
        title: "Teklinx Web Projects",
        subtitle: "Degree Internship",
        description: "During my internship at Teklinx, I contributed to various web development projects, focusing on frontend interfaces and user experience optimization. I collaborated closely with the backend team for seamless API integration and worked with UI/UX designers to implement pixel-perfect user interfaces matching their proposed designs.",
        layout: "horizontal",
        isPrivate: true,
        tags: ["Visual Studio", "TypeScript", "React.js", "Tailwind CSS", "IntelliJ", "Java", "PostgreSQL", "SpringBoot", "Docker"],
        images: [
            { src: adminDash, title: 'Admin Dashboard', description: 'Centralized administration hub providing an overview of system activities and quick access to management tools.' }
        ],
        tabs: [
            {
                id: 'doc-vault',
                title: 'Document Vault',
                images: [
                    { src: dvDashboard, title: 'Dashboard', description: 'I was tasked with the employee document vault. This is the main interface for the dashboard where employees can filter, search, and upload their documents.' },
                    { src: dvUpload, title: 'Upload Interface', description: 'Employees can upload their documents. Identification cards and passports are limited to one document upload only.' },
                    { src: dvDashboardLight, title: 'Dashboard (Light Mode)', description: 'This is the dashboard in light mode. Employees can view files pending admin approval and filter between their personal or HR documents using the tab filter on the top left.' },
                    { src: dvNotification, title: 'Notification Center', description: 'Employees receive notifications here when their document is uploaded or when its status is updated by an admin.' },
                    { src: dvViewDoc, title: 'Document Viewer', description: 'This is the document viewer view, displaying the rejection reason if a document has been rejected.' },
                ]
            },
            {
                id: 'attendance',
                title: 'Attendance Management',
                images: [
                    { src: attDashboard, title: 'Admin Dashboard', description: 'I was responsible for the admin side of attendance management. Admins can view employee status, receive system alerts, and monitor daily attendance rates via the chart.' },
                    { src: attViewAtt, title: 'Employee Details', description: 'Admins can view detailed employee profiles and their daily attendance records, as well as download attendance reports.' },
                    { src: attRequest, title: 'Correction Requests', description: 'Employees can submit correction requests for their clock-in and clock-out times, which admins can then approve or deny.' },
                    { src: attRequestDialog, title: 'Proof Verification', description: 'Admins can verify the proof documents submitted by employees to support their correction requests.' },
                    { src: attUpload, title: 'Mass Upload', description: 'Admins can perform mass uploads of attendance sheets into the system and download the preset template for data entry.' },
                ]
            },
            {
                id: 'license-plate',
                title: 'License Plate Registration (On Hold)',
                images: [
                    // Resident Side
                    { src: lprRLogin, title: 'Unified Login', description: 'I developed the entire frontend for this system. This page handles login for both residents and management, with management access via the link below the login button.' },
                    { src: lprRDashboard, title: 'Resident Dashboard', description: 'Personalized dashboard for residents to view their registered vehicles, active visitor passes, and community announcements.' },
                    { src: lprRVVManagement, title: 'Vehicle & Visitor Management', description: 'This page allows residents to register their vehicles into the system and register visitors to assign them parking spots.' },
                    { src: lprRAddVehicle, title: 'Register Vehicle', description: 'Form interface for residents to submit vehicle details for management approval and automated gate access.' },
                    { src: lprRAddVisitor, title: 'Register Visitor', description: 'Visitor registration form allowing residents to pre-register guests and assign temporary parking spots.' },
                    // Management Side
                    { src: lprMPanel, title: 'Management Panel', description: 'This interface allows management to view the list of all residents along with their full details and available actions.' },
                    { src: lprMResRegs, title: 'Resident Registration', description: 'Management can register new residents, automatically sending their login details via email.' },
                    { src: lprMParkings, title: 'Parking Overview', description: 'Management can view the comprehensive status of all parking spots, seeing which are registered to residents or visitors.' },
                    { src: lprMVisitors, title: 'Visitor Logs', description: 'This grid view displays a complete list of all registered visitors.' },
                    { src: lprMSpots, title: 'Parking Spot Configuration', description: 'The Parking Spot Generation dialog allows management to specify levels and spots. It supports three methods: zone parking, adding a spot to an existing zone, and adding a single custom spot.' },
                ]
            }
        ],
    },
    {
        id: 2,
        title: "COMPET: Educational Petcare Mobile Quiz Game",
        subtitle: "Final Year Project",
        description: "COMPET is a gamified educational application designed to teach pet care responsibilities. It combines mobile game mechanics with real-world pet care knowledge to engage users.",
        layout: "vertical",
        githubUrl: "https://github.com/Qrizzy/COMPET",
        downloadUrl: "https://drive.google.com/file/d/1txNmiBNRs2M-kIkKE1xvNWI-XgZB1EDb/view?usp=sharing",
        tags: ["Unity", "C#", "Blender", "Adobe Illustrator"],
        images: [
            { src: competMainMenu, title: 'Main Game Interface', description: 'The central hub where players start their journey, access game modes, and interact with their virtual pet.' },
            { src: competPlayMenu, title: 'Gameplay Menu', description: 'Gateway to gameplay, encouraging study before quizzes and offering access to pet customization.' },
            { src: competLearnMenu, title: 'Disease Learning Hub', description: 'Educational dashboard displaying ten key feline diseases featured in the game for players to study.' },
            { src: competDetailedLearn, title: 'Detailed Disease Info', description: 'Detailed disease profiles covering definitions, symptoms, effects, and whether self-treatment is viable.' },
            { src: competPointShopUnequipped, title: 'Accessory Shop', description: 'In-game marketplace for browsing and purchasing accessories to personalize the player\'s cat.' },
            { src: competPlayQuiz, title: 'Diagnostic Quizzes', description: 'Knowledge-testing quizzes where answering correctly on the first attempt yields bonus points.' },
            { src: competPlayTool, title: 'Tool Selection', description: 'Critical decision phase: choose the right tool for treatment or refer to a vet for complex cases.' },
            { src: competPlayTreatment, title: 'Treatment Minigames', description: 'Interactive treatment minigames for self-treatable conditions, such as nail trimming, to earn points.' },
            { src: competPointShop, title: 'Customization Inventory', description: 'Inventory and equipment screen where players can equip purchased items to customize their pet.' },
        ]
    },
    {
        id: 3,
        title: "Car Rental Mobile App",
        subtitle: "Collaborative Group Project",
        description: "A collaborative effort to build a user-friendly car rental mobile application. The app streamlines the booking process with a modern interface and robust backend integration.",
        layout: "vertical",
        githubUrl: "https://github.com/AnasHakimi/Car_Rental_Mobile_Application",
        tags: ["Kotlin", "Android Studio", "Prestige", "Adobe Illustrator"],
        images: [
            { src: carLogin, title: 'Login & Authentication', description: 'Secure login screen ensuring user data privacy and account protection.' },
            { src: carHome, title: 'Home Dashboard', description: 'Main dashboard featuring featured vehicles, quick actions, and current rental status.' },
            { src: carBook, title: 'Booking Interface', description: 'Streamlined booking interface enabling users to select their preferred date and time, and add remarks to complete the car reservation.' },
            { src: carView, title: 'Vehicle Details', description: 'Detailed view of vehicle specifications, features, and pricing.' },
        ]
    }
];

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    return (
        <div className="min-h-screen p-8 md:p-16 flex flex-col items-center relative">
            {/* Background Elements */}
            <NavigationMenu />

            <div className="w-full max-w-6xl mt-10 mb-12 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-cyan-100 dark:bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 animate-bounce">
                    <Box className="w-10 h-10 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500 dark:from-cyan-400 dark:to-purple-400 mb-4">
                    Projects Showcase
                </h1>
                <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl">
                    Explore my featured work, ranging from web applications to mobile experiences and game development.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-4">
                {projectData.map((project) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: project.id * 0.1 }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedProject(project)}
                        className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 cursor-pointer hover:shadow-2xl hover:border-cyan-500/30 transition-all duration-300"
                    >
                        {/* Card Image Preview */}
                        <div className="w-full h-48 overflow-hidden relative">
                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                            <img
                                src={project.images[0]?.src || project.tabs?.[0].images[0]?.src}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Overlay Icon */}
                            <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-20">
                                <ExternalLink className="w-4 h-4 text-cyan-500" />
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6">
                            <div className="text-xs font-bold text-cyan-500 uppercase tracking-wider mb-2">
                                {project.layout === 'horizontal' ? 'Web Development' : 'Mobile Application'}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-500 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                                {project.subtitle}
                            </p>

                            {/* Tags Preview */}
                            {project.tags && (
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {project.tags.slice(0, 3).map((tag, idx) => (
                                        <span key={idx} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-slate-600 dark:text-slate-400 font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-slate-500 dark:text-slate-500 font-medium">
                                            +{project.tags.length - 3}
                                        </span>
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="w-full max-w-7xl px-4 mt-20 flex justify-between items-center">
                <Link
                    to="/profile/skills"
                    className="flex items-center gap-2 text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back to Skills</span>
                </Link>

                <Link
                    to="/contact"
                    className="flex items-center gap-2 text-slate-500 dark:text-slate-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                    <span>Get in Touch</span>
                    <ArrowRight className="w-5 h-5" />
                </Link>
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

export default Projects;
