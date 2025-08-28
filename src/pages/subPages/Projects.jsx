import CustomButton from "../../../components/CustomButton";
import ProjectCard from "../../../components/ProjectCard";
import Threads from "../../../util/animations/Threads";
import GlassmorphismDiv from "../../../util/GlassmorphismDiv";
import Nagios from '../../assets/Nagios.jpg'
import { AnimatePresence, motion, } from "motion/react"
import Aurora from "../../../util/animations/Aurora";


export default function ContactMePage() {
    const projects = {
        Nagios: {
            title: "Proactive Network and System Monitoring with Nagios",
            description: "I developed a custom monitoring system for ANANTARA Hotel using Nagios Core to track servers, network devices, and critical services in real time. I built a modern web-based dashboard to visualize performance metrics, system health, and alerts. I also integrated an AI-powered chatbot for natural language queries. The system automatically generates alerts, logs all events for audits, and includes secure, role-based access control. This solution shifts IT operations from reactive to proactive, reducing downtime and improving issue response.",
            image: Nagios,
            technologies: ["Nagios"],
            buttons: []
        }
    };

    return (
    <div className="projects-bg w-full min-h-screen flex flex-col items-center justify-center pt-0 relative overflow-hidden">
        {/* Aurora animation as full background, now visible */}
        <div className="absolute inset-0 w-full h-full -z-10">
            <Aurora colorStops={["#3b82f6", "#60a5fa", "#38bdf8", "#6366f1", "#3b82f6"]} blend={1} amplitude={2} speed={2} />
        </div>

        {/* Project Card */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="p-10 rounded-2xl shadow-lg border border-blue-400 flex flex-row items-center space-x-12 w-full max-w-6xl mx-auto mt-32 mb-32 relative projects-card"
            style={{ background: 'rgba(40, 60, 60, 0.5)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderRadius: '24px' }}
        >
                <div className="flex-shrink-0 flex items-center justify-center project-image" style={{ height: '220px' }}>
                    <div className="rounded-xl border border-blue-400 flex items-center justify-center shadow project-image-inner" style={{ width: '340px', height: '200px', background: 'rgba(36, 54, 80, 0.5)', backdropFilter: 'blur(8px)' }}>
                        <img
                            src={Nagios}
                            alt="Nagios Monitoring Screenshot"
                            className="object-contain w-full h-full rounded-lg project-img"
                            style={{ maxWidth: '320px', maxHeight: '180px' }}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center ml-10 project-text">
                    <p className="font-bold text-4xl text-white mb-6 leading-tight project-title">Proactive Network and System Monitoring with Nagios</p>
                    <p className="text-lg text-gray-200 max-w-xl leading-relaxed project-desc" style={{ paddingLeft: '0.75rem' }}>I developed a custom monitoring system for ANANTARA Hotel using Nagios Core to track servers, network devices, and critical services in real time. I built a modern web-based dashboard to visualize performance metrics, system health, and alerts. I also integrated an AI-powered chatbot for natural language queries. The system automatically generates alerts, logs all events for audits, and includes secure, role-based access control. This solution shifts IT operations from reactive to proactive, reducing downtime and improving issue response.</p>
                </div>
            <style>{`
                @media (max-width: 600px) {
                    .projects-bg .rounded-2xl {
                        padding: 1rem !important;
                        flex-direction: column !important;
                        gap: 0 !important;
                        margin-top: 2rem !important;
                        margin-bottom: 2rem !important;
                        max-width: 98vw !important;
                    }
                    .projects-bg .flex-shrink-0 {
                        height: 120px !important;
                        margin-bottom: 1rem !important;
                    }
                    .projects-bg .rounded-xl {
                        width: 120px !important;
                        height: 80px !important;
                    }
                    .projects-bg .object-contain {
                        max-width: 110px !important;
                        max-height: 70px !important;
                    }
                    .projects-bg .ml-10 {
                        margin-left: 0 !important;
                        width: 100% !important;
                        padding: 0 0.5rem !important;
                    }
                    .projects-bg .font-bold {
                        font-size: 1.1rem !important;
                        margin-bottom: 0.7rem !important;
                    }
                    .projects-bg .text-lg {
                        font-size: 0.95rem !important;
                    }
                }
            `}</style>
        </motion.div>
        </div>
    );
}
