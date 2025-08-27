
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

        <div className="w-full h-full relative border-b border-primary">
            <div className="absolute inset-0 -z-10">
                <Aurora
                    colorStops={["#1e3a8a", "#3b82f6", "#1e3a8a"]} // blue gradient
                    blend={0.3}
                    amplitude={1.0}
                    speed={1}
                />
            </div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="p-8 bg-[#333] rounded-2xl shadow-lg border border-gray-600 flex flex-row items-center space-x-12 w-full max-w-6xl mx-auto"
                    >
                        <div className="flex-shrink-0 flex items-center justify-center" style={{ height: '320px' }}>
                            <div className="bg-black rounded-2xl border-2 border-gray-500 flex items-center justify-center" style={{ width: '420px', height: '260px' }}>
                                <img
                                    src={Nagios}
                                    alt="Nagios Monitoring Screenshot"
                                    className="object-contain w-full h-full rounded-xl"
                                    style={{ maxWidth: '400px', maxHeight: '240px' }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center ml-8">
                            <p className="font-bold text-4xl text-white mb-4">Proactive Network and System Monitoring with Nagios</p>
                            <p className="text-lg text-gray-200 max-w-2xl">I developed a custom monitoring system for ANANTARA Hotel using Nagios Core to track servers, network devices, and critical services in real time. I built a modern web-based dashboard to visualize performance metrics, system health, and alerts. I also integrated an AI-powered chatbot for natural language queries. The system automatically generates alerts, logs all events for audits, and includes secure, role-based access control. This solution shifts IT operations from reactive to proactive, reducing downtime and improving issue response.</p>
                        </div>
                    </motion.div>

                </div>

    )
}
