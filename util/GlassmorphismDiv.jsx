export default function GlassmorphismDiv({children, otherStyles}) {
    return(
        <div className={`p-3 backdrop-blur-md bg-white/20  border border-white/30 rounded-2xl shadow-md ${otherStyles}`}>
            {children}
        </div>
    )
}