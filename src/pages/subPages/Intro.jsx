import NameCard from "../../../components/NameCard";
import Beams from "../../../util/animations/Beams";
import GlassmorphismDiv from "../../../util/GlassmorphismDiv";

export default function Intro() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }} className="border border-t-0 border-x-0 border-b-primary">
            <div className="absolute inset-0 z-0">
                <Beams
                    beamWidth={2}
                    beamHeight={15}
                    beamNumber={12}
                    lightColor="#3B82F6"
                    speed={1}
                    noiseIntensity={1.75}
                    scale={0.2}
                    rotation={45}
                />
            </div>
            <div className="relative z-20 flex items-center justify-center h-full flex-col">
                <GlassmorphismDiv otherStyles={"p-10 mx-5"}>
                    <NameCard />
                </GlassmorphismDiv>
            </div>
        </div>
    )
}