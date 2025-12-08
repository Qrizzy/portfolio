import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Briefcase, Code } from 'lucide-react';
import { AccordionItem } from '../components/Accordion';

const About: React.FC = () => {
    const [openSection, setOpenSection] = useState<string | null>('education');

    const handleToggle = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="space-y-8">
            <header className="mb-8">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500 dark:from-cyan-400 dark:to-purple-400">
                    About Me
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-2">My journey and expertise.</p>
            </header>

            <div className="space-y-2">
                {/* Education Section */}
                <AccordionItem
                    title="Education"
                    isOpen={openSection === 'education'}
                    onClick={() => handleToggle('education')}
                >
                    <div className="flex gap-4">
                        <div className="mt-1 p-2 bg-purple-100 dark:bg-purple-500/10 rounded-lg h-fit">
                            <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Degree In Bachelor of Computer Science (Hons.) Multimedia Computing</h3>
                            <p className="text-cyan-600 dark:text-cyan-400">Universiti Teknologi MARA (UiTM) Kampus Jasin</p>
                            <p className="text-sm text-slate-500 mt-1">Oct 2023 - Dec 2025</p>
                        </div>
                    </div>
                    <div className="mt-4 flex gap-4">
                        <div className="mt-1 p-2 bg-purple-100 dark:bg-purple-500/10 rounded-lg h-fit">
                            <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Diploma in Computer Science</h3>
                            <p className="text-cyan-600 dark:text-cyan-400">Universiti Teknologi MARA (UiTM) Kampus Jasin</p>
                            <p className="text-sm text-slate-500 mt-1">Sep 2019 - Aug 2022</p>
                        </div>
                    </div>
                </AccordionItem>

                {/* Experience Section */}
                <AccordionItem
                    title="Experience"
                    isOpen={openSection === 'experience'}
                    onClick={() => handleToggle('experience')}
                >
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="mt-1 p-2 bg-blue-100 dark:bg-blue-500/10 rounded-lg h-fit">
                                <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Frontend Developer Intern</h3>
                                <p className="text-cyan-600 dark:text-cyan-400">Teklinx (M) Sdn Bhd | Shah Alam, Selangor</p>
                                <p className="text-sm text-slate-500 mt-1">Sep 2025 - Dec 2025</p>
                                <ul className="list-disc list-inside mt-2 text-slate-500 dark:text-slate-400 text-sm space-y-1">
                                    <li>Developed multiple projects using React.js and maintained responsive user interfaces.</li>
                                    <li>Collaborated with backend developers to integrate APIs.</li>
                                    <li>Ensuring the UI is 1:1 with the proposed design by the UI/UX designers.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="mt-1 p-2 bg-blue-100 dark:bg-blue-500/10 rounded-lg h-fit">
                                <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Graphics Designer</h3>
                                <p className="text-cyan-600 dark:text-cyan-400">Ocean Prestige Sdn. Bhd. | Seremban, Negeri Sembilan</p>
                                <p className="text-sm text-slate-500 mt-1">Sep 2022 - Sep 2023</p>
                                <ul className="list-disc list-inside mt-2 text-slate-500 dark:text-slate-400 text-sm space-y-1">
                                    <li>Designed banners, buntings, and posters, managing the entire process from consultation to production.</li>
                                    <li>Led the design and mass production of over 1,200 physical banners for government clients during the State Election.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="mt-1 p-2 bg-blue-100 dark:bg-blue-500/10 rounded-lg h-fit">
                                <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Web Developer Intern</h3>
                                <p className="text-cyan-600 dark:text-cyan-400">Jabatan Pendidikan Negeri Sembilan | Seremban, Negeri Sembilan</p>
                                <p className="text-sm text-slate-500 mt-1">Mar 2022 - Aug 2022</p>
                                <ul className="list-disc list-inside mt-2 text-slate-500 dark:text-slate-400 text-sm space-y-1">
                                    <li>Developed a quiz web system featuring student performance tracking and data visualization.</li>
                                    <li>Conducted workshops on PHPMyAdmin and web development for Computer Science students.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </AccordionItem>

                {/* Technical Skills Section - Summary */}
                <AccordionItem
                    title="Technical Skills (Summary)"
                    isOpen={openSection === 'skills'}
                    onClick={() => handleToggle('skills')}
                >
                    <div className="flex gap-4">
                        <div className="mt-1 p-2 bg-green-100 dark:bg-green-500/10 rounded-lg h-fit">
                            <Code className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div className="space-y-4 w-full">
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Frontend</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    React.js, JavaScript, TypeScript, Tailwind CSS, HTML5, CSS3, C#, C++
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Backend Basics</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    Java, Node.js
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Databases</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    PostgreSQL, MySQL, Oracle
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Tools & Platforms</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    Visual Studio, IntelliJ, GitHub, Docker Hub, Android Studio, Unity
                                </p>
                            </div>
                        </div>
                    </div>
                </AccordionItem>
            </div>

            <div className="flex justify-end mt-8">
                <Link
                    to="/profile/skills"
                    className="group flex items-center gap-2 text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                    <span className="text-sm font-medium uppercase tracking-wider">Detailed Skills</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

export default About;
