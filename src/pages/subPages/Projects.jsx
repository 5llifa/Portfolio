
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

        <div className="w-full min-h-screen flex flex-col items-center justify-start pt-0 bg-transparent">
            {/* Aurora animation at the top, blue and extended */}
            <div className="absolute top-0 left-0 w-full h-[400px] -z-10">
                <Aurora
                    colorStops={["#1e3a8a", "#3b82f6", "#1e3a8a"]}
                    blend={0.5}
                    amplitude={1.2}
                    speed={1.2}
                />
            </div>
            {/* Aurora animation directly behind the card */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[60vh] -z-10 pointer-events-none">
                <Aurora
                    colorStops={["#1e3a8a", "#3b82f6", "#1e3a8a"]}
                    blend={0.5}
                    amplitude={1.2}
                    speed={1.2}
                />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="p-10 bg-[rgba(36,54,80,0.35)] rounded-2xl shadow-lg border border-blue-400 flex flex-row items-center space-x-12 w-full max-w-6xl mx-auto mt-0 mb-32 backdrop-blur-xl relative"
            >
                <div className="flex-shrink-0 flex items-center justify-center" style={{ height: '340px' }}>
                    <div className="glass-enhanced rounded-xl border border-blue-400 flex items-center justify-center shadow" style={{ width: '520px', height: '300px', background: 'rgba(36, 54, 80, 0.5)', backdropFilter: 'blur(8px)' }}>
                        <img
                            src={Nagios}
                            alt="Nagios Monitoring Screenshot"
                            className="object-contain w-full h-full rounded-lg"
                            style={{ maxWidth: '500px', maxHeight: '280px' }}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center ml-10">
                    <p className="font-bold text-4xl text-white mb-6 leading-tight">Proactive Network and System Monitoring with Nagios</p>
                    <p className="text-lg text-gray-200 max-w-xl leading-relaxed">I developed a custom monitoring system for ANANTARA Hotel using Nagios Core to track servers, network devices, and critical services in real time. I built a modern web-based dashboard to visualize performance metrics, system health, and alerts. I also integrated an AI-powered chatbot for natural language queries. The system automatically generates alerts, logs all events for audits, and includes secure, role-based access control. This solution shifts IT operations from reactive to proactive, reducing downtime and improving issue response.</p>
                </div>
            </motion.div>
            {/* Aurora animation at the bottom */}
            <div className="absolute bottom-0 left-0 w-full h-[220px] -z-10">
                <Aurora
                    colorStops={["#0f172a", "#32b9ae", "#0f172a"]}
                    blend={0.4}
                    amplitude={1.2}
                    speed={1.2}
                />
            </div>

                </div>

    )
}
