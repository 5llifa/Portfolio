
import CustomButton from "../../../components/CustomButton";
import ProjectCard from "../../../components/ProjectCard";
import Threads from "../../../util/animations/Threads";
import GlassmorphismDiv from "../../../util/GlassmorphismDiv";
import restTrack from '../../assets/restTrack.png'
import { AnimatePresence, motion, } from "motion/react"
import Aurora from "../../../util/animations/Aurora";

export default function ContactMePage() {
    const projects = {
        Nagios: {
            title: "Nagios",
            description: "I developed a Nagios using Expo (React Native) for the frontend and Node.js, Express, and MongoDB for the backend. The app allows real-time order placement, status tracking, and kitchen-side management.",
            image: restTrack,
            technologies: ["Expo", "React Native", "Node.js", "Express", "MongoDB"],
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
                                <img src={restTrack} className="w-sm" />
                            </div>
                            <div className="flex flex-col  space-y-3">
                                <p className="font-bold text-4xl">Proactive Network and System Monitoring with Nagios</p>
                                <p className="text-sm text-gray-300">This project is a custom-built monitoring system designed for ANANTARA Hotel, using Nagios Core to provide real-time tracking of IT infrastructure including servers, network devices, and critical services. The system features a modern, web-based dashboard that displays performance metrics, system health, and alerts in real time. It also includes an AI-powered chatbot that allows users to interact with the system using natural language to query status and receive updates.

The platform automatically generates alerts when performance thresholds are breached and logs all events for troubleshooting and audits. Role-based access control and secure authentication ensure data protection. By shifting from reactive to proactive monitoring, this solution helps IT teams reduce downtime, respond faster to issues, and maintain a more stable infrastructure—all through an intuitive and accessible interface.</p>

                            </div>
                        </div>
                    </motion.div>

                </div>

    )
}
