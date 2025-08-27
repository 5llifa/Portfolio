import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SplitText from "../util/animations/SplitText";
import { faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "./CustomButton";
import linkedin from "../src/assets/linkedin.svg";
import '../src/assets/responsive.css';

export default function NameCard() {
    return (
        <div className="rounded-2xl p-4 sm:p-8" style={{ maxWidth: '100%', width: '100%' }}>
            <SplitText
                text="Hi, I’m Khalifa Alshehhi"
                className="font-black text-xl sm:text-2xl md:text-4xl lg:text-5xl text-wrap"
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
                <p className="font-medium text-base sm:text-lg lg:text-3xl" style={{ color: '#64a8f7' }}>A Full-stack developer</p>
                <p className="font-light text-xs sm:text-base" style={{ color: '#AAB2C8' }}>Recent Computer Science graduate passionate about solving real-world problems through scalable technology solutions.</p>
            </div>
            <div className="mt-5 flex flex-col space-y-3 sm:space-y-0 sm:space-x-5 sm:flex-row">
                <a href="files/Khalifa_Alshehhhi_CV.pdf" target="_blank" className="rounded-3xl p-2 sm:p-3 flex flex-row w-full items-center space-x-2 sm:space-x-3 max-w-56 transition-all duration-300" style={{ background: '#64a8f7', color: '#fff', border: '2px solid #64a8f7', fontSize: '0.9rem' }}>
                    <FontAwesomeIcon icon={faEye} size="lg"/>
                    <div className="grow">
                    <p className="text-center font-medium">View CV</p>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/khalifa-alshehhi-9446b8374/" target="_blank" className="rounded-3xl p-2 sm:p-3 flex flex-row w-full items-center space-x-2 sm:space-x-3 max-w-56 transition-all duration-300" style={{ background: '#64a8f7', color: '#fff', border: '2px solid #64a8f7', fontSize: '0.9rem' }}>
                    <img src={linkedin} className="w-5 sm:w-6"/>
                    <div className="grow">
                    <p className="text-center font-medium">Connect with me</p>
                    </div>
                </a>
            </div>
        </div>
    )
}