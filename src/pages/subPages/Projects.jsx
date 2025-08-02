
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

            <div className="2xl:hidden flex flex-col justify-center items-center mx-10 space-y-6 mb-10">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="p-3  backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-md  flex justify-center items-center  "
                >
                    <div className="flex flex-col space-y-3">
                        <div className="text-lg font-bold">Nagios</div>
                        <p className="text-sm text-gray-300">I developed a Nagios using Expo (React Native) for the frontend and Node.js, Express, and MongoDB for the backend. The app allows real-time order placement, status tracking, and kitchen-side management.</p>
                    </div>
                </motion.div>
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
                                <p className="font-bold text-4xl">Nagiosss</p>
                                <p className="text-sm text-gray-300">I developed a Nagios using Expo (React Native) for the frontend and Node.js, Express, and MongoDB for the backend. The app allows real-time order placement, status tracking, and kitchen-side management.</p>

                            </div>
                        </div>
                    </motion.div>

                </div>

    )
}