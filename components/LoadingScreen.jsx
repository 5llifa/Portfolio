import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onLoadingComplete }) {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsVisible(false);
                        onLoadingComplete?.();
                    }, 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 50);

        return () => clearInterval(interval);
    }, [onLoadingComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #19213A 0%, #355C7D 60%, #64a8f7 100%)' }}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="text-6xl font-bold text-gray-900 mb-8"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        KA
                    </motion.div>
                    
                    <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                        className="h-full bg-blue-900 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: "easeOut" }}
                        />
                    </div>
                    
                    <motion.p
                        className="mt-4 text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Loading Portfolio...
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
