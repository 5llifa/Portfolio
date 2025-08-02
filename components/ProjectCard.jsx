import { motion } from 'framer-motion';
import { useState } from 'react';
import CustomButton from './CustomButton';

export default function ProjectCard({ 
    title, 
    description, 
    image, 
    technologies, 
    buttons, 
    isLarge = false,
    className = "" 
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className={`p-3 backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-md flex justify-center items-center relative overflow-hidden ${className}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Hover overlay effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />

            <div className={`flex ${isLarge ? 'flex-row' : 'flex-col'} p-6 space-x-6 items-center relative z-10`}>
                {image && (
                    <motion.div
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img src={image} className={isLarge ? "lg:w-sm w-5xl" : "w-nd"} alt={title} />
                    </motion.div>
                )}
                
                <div className={`flex flex-col space-y-3 ${isLarge ? '' : 'max-w-72'}`}>
                    <motion.p 
                        className={`font-bold ${isLarge ? 'text-4xl' : 'text-lg'}`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        {title}
                    </motion.p>
                    
                    <motion.p 
                        className="text-sm text-gray-300"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {description}
                    </motion.p>

                    {/* Technology badges */}
                    {technologies && (
                        <motion.div 
                            className="flex flex-wrap gap-2"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {technologies.map((tech, index) => (
                                <span 
                                    key={index}
                                    className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    )}
                    
                    {buttons && (
                        <motion.div 
                            className={`flex ${isLarge ? 'flex-row space-x-3' : 'flex-col space-y-3'}`}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            {buttons.map((button, index) => (
                                <CustomButton 
                                    key={index}
                                    title={button.title} 
                                    icon={button.icon} 
                                    link={button.link} 
                                />
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
