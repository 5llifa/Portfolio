import TechShowcase from "./TechShowcase";
import python from "../src/assets/python.png";
import swift from "../src/assets/swift.png";
import github from "../src/assets/github.svg";
import cplus from "../src/assets/cplus.png";    
import xcode from "../src/assets/xcode.png";
import css from "../src/assets/css.png";
import javascript from "../src/assets/javascript.png";
import java from "../src/assets/java.png";
import csharp from "../src/assets/csharp.svg";
import html from "../src/assets/html.png";
import HorizontalLineBreak from "../components/HorizontalLineBreak";


export default function Expertise() {
    return (
        <>

            <div className="my-10">
                <div className="flex flex-col lg:flex-row lg:space-x-5 space-x-0 space-y-3">
                    <TechShowcase icon={python} name="Python" desc="Versatile programming language used for web, data, AI, and automation" />
                    <TechShowcase icon={xcode} name="xCode" desc="Apple’s official IDE for developing apps for iPhone, iPad, Mac, and more" />
                    <TechShowcase icon={swift} name="Swift" desc="Modern language by Apple for building fast, safe, and expressive iOS apps" />
                    <TechShowcase icon={java} name="Java" desc="Object-oriented language widely used for Android apps, backend systems, and enterprise development" />
                    <TechShowcase icon={javascript} name="JavaScript" desc="Essential language for building interactive and dynamic web applications" />
                    <TechShowcase icon={html} name="HTML" desc="Standard markup language for structuring content on the web" />
                    <TechShowcase icon={css} name="CSS" desc="Styling language used to design visually appealing and responsive web pages" />
                    <TechShowcase icon={cplus} name="C++" desc="High-performance language used in game development, systems, and embedded software" />
                    <TechShowcase icon={csharp} name="C#" desc="Versatile language by Microsoft for developing Windows apps, games, and enterprise software" />
                    <TechShowcase icon={github} name="Github" desc="Code hosting & version control" />
                </div>
            </div>

        </>
    );
}
