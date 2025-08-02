import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function KeyboardShortcutsModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === '?' && event.shiftKey) {
                setIsOpen(!isOpen);
            }
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, [isOpen]);

    const shortcuts = [
        { key: '1', description: 'Go to Home' },
        { key: '2', description: 'Go to Expertise' },
        { key: '3', description: 'Go to Experience' },
        { key: '4', description: 'Go to Projects' },
        { key: 'Ctrl + ↑', description: 'Scroll to top' },
        { key: 'Ctrl + ↓', description: 'Scroll to bottom' },
        { key: 'Shift + ?', description: 'Toggle this help' },
        { key: 'Esc', description: 'Close modals' },
    ];

    return (
        <>
            {/* Help button */}
            <motion.button
                className="fixed bottom-6 right-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg z-40"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
            >
                ?
            </motion.button>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            className="bg-gray-900 rounded-2xl p-8 max-w-md w-full mx-4 border border-white/20"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 className="text-2xl font-bold text-white mb-6">Keyboard Shortcuts</h2>
                            
                            <div className="space-y-3">
                                {shortcuts.map((shortcut, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <span className="text-gray-300">{shortcut.description}</span>
                                        <kbd className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-xs text-white">
                                            {shortcut.key}
                                        </kbd>
                                    </div>
                                ))}
                            </div>

                            <button
                                className="mt-6 w-full bg-primary hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Got it!
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
