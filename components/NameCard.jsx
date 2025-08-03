import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SplitText from "../util/animations/SplitText";
import { faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "./CustomButton";
import linkedin from "../src/assets/linkedin.svg";
export default function NameCard() {
    return (
        <div >
            <SplitText
                text="Hi, I’m Khalifa Alshehhi"
                className="font-black text-white md:text-4xl lg:text-5xl text-2xl text-wrap"
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
                <p className="font-medium text-primary lg:text-3xl text-lg">A Full-stack developer</p>
                <p className="font-light text-gray-100 text-base">Recent Computer Science graduate passionate about solving real-world problems through scalable technology solutions.</p>
            </div>
            <div className="mt-5 flex flex-col space-y-3 lg:space-y-0 lg:space-x-5 lg:flex-row">
                <a href="files/Khalifa_Alshehhhi_CV.pdf" target="_blank" className="bg-primary rounded-3xl hover:bg-blue-400 p-3 flex flex-row w-full items-center space-x-3 max-w-56 transition-all duration-300">
                    <FontAwesomeIcon icon={faEye} size="xl"/>
                    <div className="grow">
                    <p className="text-center font-medium">View CV</p>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/khalifa-alshehhi-9446b8374/" target="_blank" className="bg-primary rounded-3xl hover:bg-blue-400 p-3 flex flex-row w-full items-center space-x-3 max-w-56 transition-all duration-300">
                    <img src={linkedin} className="w-6"/>
                    <div className="grow">
                    <p className="text-center font-medium">Connect with me</p>
                    </div>
                </a>
            </div>
        </div>
    )
}