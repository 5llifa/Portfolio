import { useEffect } from 'react';

export default function useKeyboardShortcuts() {
    useEffect(() => {
        const handleKeyPress = (event) => {
            // Only trigger if no input is focused
            if (document.activeElement.tagName === 'INPUT' || 
                document.activeElement.tagName === 'TEXTAREA') {
                return;
            }

            switch (event.key) {
                case '1':
                    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                    break;
                case '2':
                    document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' });
                    break;
                case '3':
                    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                    break;
                case '4':
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'ArrowUp':
                    if (event.ctrlKey) {
                        event.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                    break;
                case 'ArrowDown':
                    if (event.ctrlKey) {
                        event.preventDefault();
                        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                    }
                    break;
                default:
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, []);
}
