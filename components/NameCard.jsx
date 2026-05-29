import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SplitText from "../util/animations/SplitText";
import { faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "./CustomButton";
import linkedin from "../src/assets/linkedin.svg";
import '../src/assets/responsive.css';

export default function NameCard() {
    return (
        <div className="rounded-2xl p-2 sm:p-8" style={{ maxWidth: '1000px', width: '100%', boxSizing: 'border-box' }}>
            <SplitText
                    text="Hi, I’m Khalifa Alshehhi"
                    className="font-black text-lg sm:text-3xl md:text-4xl lg:text-5xl text-wrap"
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
                <p className="font-medium text-lg sm:text-xl lg:text-2xl" style={{ color: '#64a8f7', fontSize: '1.7rem', whiteSpace: 'normal' }}>Aspiring IT & Applications Developer</p>
                <p className="font-light text-base sm:text-lg" style={{ color: '#AAB2C8', fontSize: '1.1rem', whiteSpace: 'normal', overflow: 'visible', textOverflow: 'unset' }}>Recent Computer Science graduate with interests in IT support, system troubleshooting, and application development. Passionate about leveraging technology to solve real-world challenges.</p>
            </div>
            <div className="mt-5 flex flex-col space-y-4 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <a href="/Portfolio/files/Khalifa_Alshehhi_CV.pdf" target="_blank" className="rounded-3xl p-2 sm:p-3 flex flex-row w-full items-center space-x-2 sm:space-x-3 max-w-56 transition-all duration-300 text-base sm:text-base namecard-btn" style={{ background: '#64a8f7', color: '#fff', border: '2px solid #64a8f7' }}>
                    <FontAwesomeIcon icon={faEye} size="sm"/>
                    <div className="grow">
                    <p className="text-center font-medium">View CV</p>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/khalifa-alshehhi-9446b8374/" target="_blank" className="rounded-3xl p-2 sm:p-3 flex flex-row w-full items-center space-x-2 sm:space-x-3 max-w-56 transition-all duration-300 text-base sm:text-base namecard-btn" style={{ background: '#64a8f7', color: '#fff', border: '2px solid #64a8f7' }}>
                    <img src={linkedin} className="w-5 sm:w-6"/>
                    <div className="grow">
                    <p className="text-center font-medium">Connect with me</p>
                    </div>
                </a>
            </div>
            <style>{`
                @media (max-width: 600px) {
                    .namecard-responsive {
                        max-width: 98vw !important;
                        padding: 0.7rem !important;
                    }
                    .font-black {
                        font-size: 1.6rem !important;
                    }
                    .font-medium {
                        font-size: 1.2rem !important;
                    }
                    .font-light {
                        font-size: 1.0rem !important;
                    }
                    .rounded-3xl {
                        padding: 0.5rem !important;
                        font-size: 0.9rem !important;
                        max-width: 70vw !important;
                    }
                    .namecard-btn {
                        max-width: 55vw !important;
                    }
                }
                @media (min-width: 601px) {
                    .namecard-responsive {
                        max-width: 1200px !important;
                        padding: 2rem !important;
                    }
                }
            `}</style>
        </div>
    )
}