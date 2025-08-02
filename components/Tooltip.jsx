import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Tooltip({ children, content, position = "top" }) {
    const [isVisible, setIsVisible] = useState(false);
    const [adjustedPosition, setAdjustedPosition] = useState(position);
    const tooltipRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (isVisible && tooltipRef.current && containerRef.current) {
            const tooltip = tooltipRef.current;
            const container = containerRef.current;
            const rect = container.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();
            
            let newPosition = position;
            
            // Check if tooltip goes off screen and adjust position
            if (position === 'top' && rect.top - tooltipRect.height < 10) {
                newPosition = 'bottom';
            } else if (position === 'bottom' && rect.bottom + tooltipRect.height > window.innerHeight - 10) {
                newPosition = 'top';
            } else if (position === 'left' && rect.left - tooltipRect.width < 10) {
                newPosition = 'right';
            } else if (position === 'right' && rect.right + tooltipRect.width > window.innerWidth - 10) {
                newPosition = 'left';
            }
            
            // For horizontal positions, also check if we need to adjust for viewport width
            if ((newPosition === 'top' || newPosition === 'bottom')) {
                const tooltipLeft = rect.left + rect.width / 2 - tooltipRect.width / 2;
                if (tooltipLeft < 10) {
                    // Tooltip would go off left edge, keep position but adjust alignment
                    tooltip.style.transform = `translateX(${10 - tooltipLeft}px)`;
                } else if (tooltipLeft + tooltipRect.width > window.innerWidth - 10) {
                    // Tooltip would go off right edge, keep position but adjust alignment
                    const overflow = tooltipLeft + tooltipRect.width - (window.innerWidth - 10);
                    tooltip.style.transform = `translateX(-${overflow}px)`;
                } else {
                    tooltip.style.transform = '';
                }
            }
            
            setAdjustedPosition(newPosition);
        }
    }, [isVisible, position]);

    const getPositionClasses = (pos) => {
        const classes = {
            top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
            bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
            left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
            right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
        };
        return classes[pos];
    };

    const getArrowClasses = (pos) => {
        const classes = {
            top: 'top-full left-1/2 -translate-x-1/2 -mt-1',
            bottom: 'bottom-full left-1/2 -translate-x-1/2 -mb-1',
            left: 'left-full top-1/2 -translate-y-1/2 -ml-1',
            right: 'right-full top-1/2 -translate-y-1/2 -mr-1'
        };
        return classes[pos];
    };

    return (
        <div 
            ref={containerRef}
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        ref={tooltipRef}
                        className={`absolute z-50 px-3 py-2 text-sm text-white bg-gray-900/90 backdrop-blur-sm rounded-lg shadow-lg whitespace-nowrap border border-gray-700 ${getPositionClasses(adjustedPosition)}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                    >
                        {content}
                        {/* Arrow */}
                        <div 
                            className={`absolute w-2 h-2 bg-gray-900/90 border-gray-700 transform rotate-45 ${getArrowClasses(adjustedPosition)}`}
                            style={{
                                borderTop: adjustedPosition === 'bottom' ? '1px solid rgb(55, 65, 81)' : 'none',
                                borderLeft: adjustedPosition === 'right' ? '1px solid rgb(55, 65, 81)' : 'none',
                                borderRight: adjustedPosition === 'left' ? '1px solid rgb(55, 65, 81)' : 'none',
                                borderBottom: adjustedPosition === 'top' ? '1px solid rgb(55, 65, 81)' : 'none',
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
