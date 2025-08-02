import DotGrid from "../../../util/animations/DotGrid";
import GlassmorphismDiv from "../../../util/GlassmorphismDiv";
import SplitText from "../../../util/animations/SplitText";
import Expertise from "../../../components/Expertise";
export default function ExpertisePage() {
    return (
        <div className="w-full h-full relative border-b border-primary">
            <div className="absolute inset-0 z-0">
                <DotGrid
                    dotSize={1}
                    gap={20}
                    baseColor="#3B82F6"
                    activeColor="#60A5FA"
                    proximity={50}
                    shockRadius={200}
                    shockStrength={5}
                    resistance={500}
                    returnDuration={1}
                />
            </div>
            <div className="relative z-20 flex items-center justify-center lg:h-full flex-col">
                <GlassmorphismDiv otherStyles={"p-10 mt-10 lg:mt-0"}>
                    <SplitText
                        text="My expertise"
                        className="font-black text-white text-4xl"
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
                <Expertise />
            </div>
        </div>
    );
}
