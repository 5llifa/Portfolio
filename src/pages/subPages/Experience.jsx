import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import GlassmorphismDiv from '../../../util/GlassmorphismDiv';
import SplitText from "../../../util/animations/SplitText";
import aths from '../../assets/aths.png'
import egov from '../../assets/egov.png'
import uaeu from '../../assets/uaeu.png'
import dp from '../../assets/dp.png'

import Squares from '../../../util/animations/Squares';
export default function Experience() {
    return (
        <div className="w-full h-full relative border-b border-primary ">
            <div className="absolute inset-0 z-0">
                <Squares
                    speed={0.1}
                    squareSize={80}
                    direction='up' 
                    borderColor='#32B9AE'
                    hoverFillColor='#32B9AE'
                />
            </div> 
            <div className="relative z-20 flex xl:items-center xl:justify-center mx-10 pt-32 flex-col">
                <GlassmorphismDiv otherStyles={"p-10"}>
                    <SplitText
                        text="Education & Experience"
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
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'transparent', boxShadow: 'none', padding: 0 }}
                        contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.3)', marginTop:25  }}
                        dateClassName="custom-date"
                        date="2015 - 2019"
                        iconStyle={{
                            background: '#000',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100px',
                            height: '100px',
                            marginLeft: '-45px',  
                        }}
                        icon={<img src={aths} alt="icon" className="w-12 h-10" />}

                    >
                        <div className="p-6 backdrop-blur-md bg-white/20 border mt-8 border-white/30 rounded-2xl shadow-md">
                            <h3 className="vertical-timeline-element-title text-3xl font-black">Applied Technology Schools</h3>
                            <h4 className="vertical-timeline-element-subtitle text-sm">Ras Al Khaimah, UAE</h4>
                            <p>Completed a specialized high school program with a focus on computer science fundamentals, including programming, networks, and IT systems.</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'transparent', boxShadow: 'none', padding: 0 }}
                        contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.3)', marginTop:25  }}
                        dateClassName="custom-date"
                        date="2019"
                        iconStyle={{
                            background: '#000',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100px',
                            height: '100px',
                            marginLeft: '-45px',  
                        }}
                        icon={<img src={egov} alt="icon" className="w-10 h-8" />}

                    >
                        <div className="p-6 backdrop-blur-md bg-white/20 border mt-8 border-white/30 rounded-2xl shadow-md">
                            <h3 className="vertical-timeline-element-title text-3xl font-black">Internship - Electronic Goverment Autority</h3>
                            <h4 className="vertical-timeline-element-subtitle text-sm">Ras Al Khaimah, UAE</h4>
                            <p>Completed an IT Support internship at the Electronic Government Authority, assisting in troubleshooting hardware and software issues, supporting end-users, and maintaining system functionality.</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'transparent', boxShadow: 'none', padding: 0 }}
                        contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.3)' , marginTop:25 }}
                        dateClassName="custom-date"
                        date="2021 - 2024"
                        iconStyle={{
                            background: '#000',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100px',
                            height: '100px',
                            marginLeft: '-45px',       
                        }}
                        icon={<img src={uaeu} alt="icon" className="w-16 h-10" />}
                    >
                        <div className="p-6 backdrop-blur-md bg-white/20 border mt-8 border-white/30 rounded-2xl shadow-md">
                            <h3 className="vertical-timeline-element-title text-3xl font-black">United Arab Emirates University</h3>
                            <h4 className="vertical-timeline-element-subtitle text-sm">Al Ain, UAE</h4>
                            <p>Completed my Bachelor’s degree in Computer Science at the United Arab Emirates University (UAEU), where I gained a strong foundation in software development, data structures, algorithms, and system design.</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'transparent', boxShadow: 'none', padding: 0 }}
                        contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.3)', marginTop:25 }}
                        dateClassName="custom-date"
                        date="2024"
                        iconStyle={{
                            background: '#000',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100px',
                            height: '100px',
                            marginLeft: '-45px',       
                        }}
                        icon={<img src={dp} alt="icon" className="w-17 h-16" />}
                    >
                        <div className="p-6 backdrop-blur-md bg-white/20 border mt-8 border-white/30 rounded-2xl shadow-md">
                            <h3 className="vertical-timeline-element-title text-3xl font-black">Internship - Dubai Police</h3>
                            <h4 className="vertical-timeline-element-subtitle text-sm">Dubai, UAE</h4>
                            <p>Completed an internship at Dubai Police as a Web Developer, where I worked extensively with the MERN stack (MongoDB, Express.js, React, and Node.js) to build and maintain full-stack web applications.</p>
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    )
}