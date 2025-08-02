import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import LoadingScreen from "../../components/LoadingScreen";
import ScrollProgress from "../../components/ScrollProgress";
import KeyboardShortcutsModal from "../../components/KeyboardShortcutsModal";
import AnimatedBackground from "../../components/AnimatedBackground";
import useKeyboardShortcuts from "../../util/useKeyboardShortcuts";

export default function MainLayout() {
    const [isLoading, setIsLoading] = useState(true);
    
    // Enable keyboard shortcuts
    useKeyboardShortcuts();

    return (
        <>
            {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
            <AnimatedBackground />
            <ScrollProgress />
            <NavBar />
            <Outlet />
            <KeyboardShortcutsModal />
        </>
    )
}
