
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
            <div className="absolute inset-0 z-0">
                <Aurora
                    colorStops={["#000", "#32B9AE", "#000"]}
                    blend={0.3}
                    amplitude={1.0}
                    speed={1}
                />
            </div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="p-3 backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-md  col-start-1 row-start-4 col-span-4 row-span-2  flex justify-center items-center "
                    >
                        <div className="flex flex-row p-6 space-x-6 items-center">
                            <div>
                                <img src={Nagios} className="w-120" />
                            </div>
                            <div className="flex flex-col  space-y-3">
                                <p className="font-bold text-4xl">Proactive Network and System Monitoring with Nagios </p>
                                <p className="text-sm text-gray-300">I developed a custom monitoring system for ANANTARA Hotel using Nagios Core to track servers, network devices, and critical services in real time. I built a modern web-based dashboard to visualize performance metrics, system health, and alerts. I also integrated an AI-powered chatbot for natural language queries. The system automatically generates alerts, logs all events for audits, and includes secure, role-based access control. This solution shifts IT operations from reactive to proactive, reducing downtime and improving issue response.</p>

                            </div>
                        </div>
                    </motion.div>

                </div>

    )
}
