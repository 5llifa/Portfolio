
import Projects from "./subPages/Projects";
import Experience from "./subPages/Experience";
import ExpertisePage from "./subPages/ExpertisePage";
import Intro from "./subPages/Intro";
export default function Home() {
    return (
        <div className="relative min-h-screen bg-black">
            <section id="home" className="h-screen "><Intro /></section>
            <section id="expertise" className="lg:h-screen"><ExpertisePage/></section>
            <section id="experience" className="min-h-screen"><Experience/></section>
            <section id="projects" className="min-h-screen"><Projects/></section>
        </div>
    )
}