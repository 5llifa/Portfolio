import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import GlassmorphismDiv from '../../../util/GlassmorphismDiv';
import SplitText from "../../../util/animations/SplitText";
import moe from '../../assets/moe.png'
import hct from '../../assets/hct.png'

import Squares from '../../../util/animations/Squares';
export default function Experience() {
    return (
        <div className="w-full h-full relative border-b border-primary ">
            <div className="absolute inset-0 z-0">
                <Squares
                    speed={0.1}
                    squareSize={80}
                    direction='up' 
                    borderColor='#3B82F6'
                    hoverFillColor='#3B82F6'
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
                        icon={<img src={moe} alt="icon" className="w-26 h-26" />}

                    >
                        <div className="p-6 backdrop-blur-md bg-white/20 border mt-8 border-white/30 rounded-2xl shadow-md">
                            <h3 className="vertical-timeline-element-title text-3xl font-black">Tunb Secondary Schools</h3>
                            <h4 className="vertical-timeline-element-subtitle text-sm">Ras Al Khaimah, UAE</h4>
                            <p>Studied at Tunb School with a strong academic foundation in science and technology. Developed critical thinking and problem-solving skills, which inspired my passion for application development and software engineering.</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'transparent', boxShadow: 'none', padding: 0 }}
                        contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.3)', marginTop:25  }}
                        dateClassName="custom-date"
                        date="2021 - 2026"
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
                        icon={<img src={hct} alt="icon" className="w-19 h-12" />}
                    >
                        <div className="p-6 backdrop-blur-md bg-white/20 border mt-8 border-white/30 rounded-2xl shadow-md">
                            <h3 className="vertical-timeline-element-title text-3xl font-black">Higher Colleges of Technology</h3>
                            <h4 className="vertical-timeline-element-subtitle text-sm">Ras Al Khaimah, UAE</h4>
                            <p>Completed my Bachelor’s degree in Computer & Information Science at the Higher College of Technology (HCT), where I gained a strong foundation in Application Development, Software Development, Data Structures, Algorithms, and System Design.</p>
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    )
}
