import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TechCard({icon, title, desc}) {
    return (
        <>        
            <div className="flex flex-row items-center space-x-3" >
                <div className="rounded-full w-10 h-10 flex items-center justify-center border-white/50 border-2 flex-row">
                    <FontAwesomeIcon icon={icon}/>
                </div>
                <div className="flex ">
                    <p className="font-medium text-lg">{title}</p>
                </div>
            </div>
            <div className="max-w-64 min-w-64">
                <p className="font-light text-base  text-wrap mt-3">{desc}</p>
            </div>
        </>
    )
}