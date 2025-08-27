import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SplitText from "../util/animations/SplitText";
import { faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "./CustomButton";
import linkedin from "../src/assets/linkedin.svg";
export default function NameCard() {
    return (
        <div className="rounded-2xl p-8">
            <SplitText
                text="Hi, I’m Khalifa Alshehhi"
                className="font-black md:text-4xl lg:text-5xl text-2xl text-wrap"
                style={{ color: '#fff' }}
                delay={30}
                duration={0.3}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
            />
            <div>
                <p className="font-medium lg:text-3xl text-lg" style={{ color: '#64a8f7' }}>A Full-stack developer</p>
                <p className="font-light text-base" style={{ color: '#AAB2C8' }}>Recent Computer Science graduate passionate about solving real-world problems through scalable technology solutions.</p>
            </div>
            <div className="mt-5 flex flex-col space-y-3 lg:space-y-0 lg:space-x-5 lg:flex-row">
                <a href="files/Khalifa_Alshehhhi_CV.pdf" target="_blank" className="rounded-3xl p-3 flex flex-row w-full items-center space-x-3 max-w-56 transition-all duration-300" style={{ background: '#64a8f7', color: '#fff', border: '2px solid #64a8f7' }}>
                    <FontAwesomeIcon icon={faEye} size="xl"/>
                    <div className="grow">
                    <p className="text-center font-medium">View CV</p>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/khalifa-alshehhi-9446b8374/" target="_blank" className="rounded-3xl p-3 flex flex-row w-full items-center space-x-3 max-w-56 transition-all duration-300" style={{ background: '#64a8f7', color: '#fff', border: '2px solid #64a8f7' }}>
                    <img src={linkedin} className="w-6"/>
                    <div className="grow">
                    <p className="text-center font-medium">Connect with me</p>
                    </div>
                </a>
            </div>
        </div>
    )
}