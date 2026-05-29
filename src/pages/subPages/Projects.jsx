import ProjectCard from "../../../components/ProjectCard";
import AnimatedBackground from "../../../components/AnimatedBackground";
import Nagios from '../../assets/Nagios.jpg'
import GlassmorphismDiv from "../../../util/GlassmorphismDiv";
import SplitText from "../../../util/animations/SplitText";
import { motion } from "motion/react"

export default function ProjectsPage() {
    const projects = [
        {
            title: "Proactive Network and System Monitoring with Nagios",
            description: "Built a custom monitoring system for ANANTARA Hotel using Nagios Core. The dashboard tracks servers, network devices, and critical services in real time while providing automated alerts, audit logging, and secure role-based access.",
            image: Nagios,
            technologies: ["Nagios Core", "Real-time alerts", "AI chatbot"],
            buttons: []
        }
    ];

    return (
        <div className="w-full min-h-screen relative overflow-hidden px-4 pb-20 sm:px-6 lg:px-8 border-b border-primary">
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_24%)]" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-950/75 to-slate-950" />
            <AnimatedBackground />

            <div className="relative z-10 flex justify-center pt-20">
                <GlassmorphismDiv otherStyles={"p-10"}>
                    <SplitText
                        text="Projects"
                        className="font-black text-white text-4xl text-wrap"
                        delay={30}
                        duration={0.3}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
                </GlassmorphismDiv>
            </div>

            <motion.section
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="relative z-10 mx-auto flex w-full max-w-5xl justify-center py-16"
            >
                <div className="w-full">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            technologies={project.technologies}
                            buttons={project.buttons}
                            className="mx-auto w-full max-w-3xl"
                        />
                    ))}
                </div>
            </motion.section>
        </div>
    );
}
