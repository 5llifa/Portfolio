import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import github from "../src/assets/github.svg";
import linkedin from "../src/assets/linkedin.svg";

export default function CustomButton({title, icon, link}) {
    return (
        <a className="p-3 rounded-3xl bg-primary flex flex-row hover:bg-blue-600 btn-hover cursor-pointer space-x-3 transition-all duration-300"  href={link} target="_blank">

            {
                icon.toLowerCase() === 'github' ?     <img src={github} className="w-6"/> :  <img src={linkedin} className="w-6"/>
            }
                        <div className="flex grow pr-4 justify-center items-center">
                <p className="font-medium">{title}</p>
            </div>
        </a>
    )
}