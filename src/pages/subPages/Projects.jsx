
import CustomButton from "../../../components/CustomButton";
import Threads from "../../../util/animations/Threads";
import GlassmorphismDiv from "../../../util/GlassmorphismDiv";
import gymHub from '../../assets/gymhub.png'
import fitChal from '../../assets/fitChal.png'
import restTrack from '../../assets/restTrack.png'
import { AnimatePresence, motion, } from "motion/react"
import Aurora from "../../../util/animations/Aurora";

export default function ContactMePage() {
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
                    className="p-3 mt-10 backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-md   flex justify-center items-center  "
                >
                    <div className="flex flex-col space-y-3">
                        <div className="text-lg font-bold">GymHub</div>
                        <p className="text-sm text-gray-300">GymHub is a smart gym management app built as a graduation project using .NET MAUI for the frontend and Node.js/Express for the backend. It features member tracking, workout management, and integrates with an Arduino-powered gate for automated access control</p>
                        <div className="flex flex-row space-x-2">
                            <CustomButton title={"App"} icon={"github"} link={"https://github.com/KAlShehhi/SmartGateAPI"} />
                            <CustomButton title={"Server"} icon={"github"} link={"https://github.com/KAlShehhi/SmartGateApp"} />
                            <CustomButton title={"Gate"} icon={"github"} link={"https://github.com/KAlShehhi/GateAPI"} />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="p-3 backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-md flex justify-center items-center"
                >
                    <div className="flex flex-col space-y-3">
                        <div className="text-lg font-bold">UAEU - Fitness Challenge App</div>
                        <p className="text-sm text-gray-300">I built a React Native app with a Node.js/Express backend for a UAEU challenge. The app was used to host and manage various university activities, with features for event browsing, registration, and real-time updates.</p>
                        <div className="flex flex-row  space-x-3">
                            <CustomButton title={"Application"} icon={"github"} link={"https://github.com/KAlShehhi/UAEU-Contest-Clinet"} />
                            <CustomButton title={"Backend"} icon={"github"} link={"https://github.com/KAlShehhi/UAEU-Contest-Backend"} />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="p-3  backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-md  flex justify-center items-center  "
                >
                    <div className="flex flex-col space-y-3">
                        <div className="text-lg font-bold">Resturant order tracking app</div>
                        <p className="text-sm text-gray-300">I developed a restaurant order tracking app using Expo (React Native) for the frontend and Node.js, Express, and MongoDB for the backend. The app allows real-time order placement, status tracking, and kitchen-side management.</p>
                    </div>
                </motion.div>
            </div>

            <div className="2xl:flex hidden justify-center items-center ">
                <div className="grid grid-cols-3 grid-rows-5 gap-5 m-28   ">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="p-3 backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-md  col-span-2 row-span-3 flex justify-center items-center  "
                    >

                        <div className="flex flex-row p-6 space-x-6 items-center max-w-4xl">
                            <div>
                                <img src={gymHub} className="lg:w-sm w-5xl" />
                            </div>
                            <div className="flex flex-col  space-y-3">
                                <p className="font-bold text-4xl">Gym hub</p>
                                <p className="text-sm text-gray-300">GymHub is a smart gym management app built as a graduation project using .NET MAUI for the frontend and Node.js/Express for the backend. It features member tracking, workout management, and integrates with an Arduino-powered gate for automated access control</p>
                                <div className="flex flex-row space-x-3">
                                    <CustomButton title={"Application"} icon={"github"} link={"https://github.com/KAlShehhi/SmartGateAPI"} />
                                    <CustomButton title={"Backend"} icon={"github"} link={"https://github.com/KAlShehhi/SmartGateApp"} />
                                    <CustomButton title={"Gate"} icon={"github"} link={"https://github.com/KAlShehhi/GateAPI"} />
                                </div>
                            </div>
                        </div>

                    </motion.div>
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
                                <p className="font-bold text-4xl">Resturant order tracking app</p>
                                <p className="text-sm text-gray-300">I developed a restaurant order tracking app using Expo (React Native) for the frontend and Node.js, Express, and MongoDB for the backend. The app allows real-time order placement, status tracking, and kitchen-side management.</p>

                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="p-3 backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-md col-start-3 row-start-1 row-span-3  flex justify-center items-center "
                    >
                        <div className="flex flex-row p-6 space-x-6 items-center">
                            <div>
                                <img src={fitChal} className="w-nd" />
                            </div>
                            <div className="flex flex-col max-w-72 space-y-3">
                                <p className="font-bold text-4xl">UAEU - Fitness Challenge App</p>
                                <p className="text-sm text-gray-300">I built a React Native app with a Node.js/Express backend for a UAEU challenge. The app was used to host and manage various university activities, with features for event browsing, registration, and real-time updates.</p>
                                <div className="flex flex-col space-y-3">
                                    <CustomButton title={"Application"} icon={"github"} link={"https://github.com/KAlShehhi/UAEU-Contest-Clinet"} />
                                    <CustomButton title={"Backend"} icon={"github"} link={"https://github.com/KAlShehhi/UAEU-Contest-Backend"} />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

        </div>

    )
}