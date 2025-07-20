// useInView.js
import { useEffect, useState, useRef } from 'react';

export default function useInView(threshold = 0.3) {
    const ref = useRef(null);
    const [isInView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect(); 
                }
            },
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return [ref, isInView];
}
