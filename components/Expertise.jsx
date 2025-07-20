import TechShowcase from "./TechShowcase";
import reactLogo from "../src/assets/reactIcon.svg";
import express from "../src/assets/express.svg";
import github from "../src/assets/github.svg";
import jwt from "../src/assets/jwt.svg";
import mongo from "../src/assets/mongo.svg";
import nodejs from "../src/assets/nodejs.svg";
import tailwindcss from "../src/assets/tailwindcss.svg";
import java from "../src/assets/java.svg";
import javascript from "../src/assets/javascript.svg";
import csharp from "../src/assets/csharp.svg";
import figma from "../src/assets/figma.svg"
import expo from "../src/assets/expo.svg"
import HorizontalLineBreak from "../components/HorizontalLineBreak";


export default function Expertise() {
    return (
        <>

            <div className="my-10">
                <div className="flex flex-col lg:flex-row lg:space-x-5 space-x-0 space-y-3">
                    <TechShowcase icon={reactLogo} name="React" desc="Frontend library for building UIs" />
                    <TechShowcase icon={expo} name="Expo" desc="Framework for building React Native apps fast" />
                    <TechShowcase icon={tailwindcss} name="Tailwind" desc="Utility-first CSS framework" />
                    <TechShowcase icon={nodejs} name="Node.js" desc="JavaScript runtime for backend" />
                    <TechShowcase icon={mongo} name="MongoDB" desc="NoSQL database for documents" />
                    <TechShowcase icon={express} name="Express" desc="Minimal backend web framework" />
                    <TechShowcase icon={jwt} name="Json Web Tokens" desc="Token-based authentication" />
                    <TechShowcase icon={github} name="Github" desc="Code hosting & version control" />
                    <TechShowcase icon={figma} name="Figma" desc="UI design and prototyping tool" />
                </div>
            </div>

        </>
    );
}
