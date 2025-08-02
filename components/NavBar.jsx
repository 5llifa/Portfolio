import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GlassmorphismDiv from "../util/GlassmorphismDiv";
import Tooltip from "./Tooltip";
import github from "../src/assets/github.svg";
import linkedin from "../src/assets/linkedin.svg";

const tabs = ["home", "expertise", "experience", "projects"];

export default function NavBar() {
    const [activeTab, setActiveTab] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveTab(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, {
            threshold: 0.3,
            rootMargin: '-20% 0px -20% 0px'
        });

        window.addEventListener('scroll', handleScroll);
        
        tabs.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <motion.div 
            className="flex w-full fixed z-50 items-center sm:p-3 md:justify-between justify-center"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div 
                className={`w-full md:w-auto p-6 sm:p-3 backdrop-blur-md border-white/30 sm:rounded-2xl shadow-md flex space-x-2 relative justify-center transition-all duration-300 ${
                    isScrolled 
                        ? 'bg-white/30 lg:border border-white/40' 
                        : 'bg-white/20 lg:border'
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
            >
                {tabs.map((tab, index) => (
                    <Tooltip key={tab} content={`Go to ${tab.charAt(0).toUpperCase() + tab.slice(1)}`}>
                        <motion.button
                            onClick={() => {
                                const section = document.getElementById(tab);
                                section?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className={`relative cursor-pointer z-10 px-3 py-3 text-sm sm:text-base font-semibold transition-all duration-300 rounded-full ${
                                activeTab === tab ? "text-white" : "text-gray-400 hover:text-gray-200"
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="tab-pill"
                                    className="absolute inset-0 rounded-full bg-primary pointer-events-none -z-10"
                                    transition={{
                                        layout: { type: "spring", stiffness: 500, damping: 30 },
                                        scale: { type: "spring", stiffness: 500, damping: 20 },
                                    }}
                                />
                            )}
                        </motion.button>
                    </Tooltip>
                ))}
            </motion.div>
            <motion.div 
                className="md:flex hidden flex-row space-x-5 pr-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
            >
                <Tooltip content="Visit my GitHub">
                    <motion.div 
                        onClick={() => window.open("https://github.com/5llifa", "_blank")}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="cursor-pointer"
                    >
                        <img src={github} alt="github icon" className="w-8 h-8 object-contain" />
                    </motion.div>
                </Tooltip>
                <Tooltip content="Connect on LinkedIn">
                    <motion.div 
                        onClick={() => window.open("https://www.linkedin.com/in/khalifa-alshehhi-9446b8374/", "_blank")}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="cursor-pointer"
                    >
                        <img src={linkedin} alt="linkedin icon" className="w-8 h-8 object-contain" />
                    </motion.div>
                </Tooltip>
            </motion.div>
        </motion.div>


    );
}
