export default function GlassmorphismDiv({children, otherStyles}) {
    return(
        <div className={`p-3 glass-enhanced backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg hover:bg-white/15 transition-all duration-300 ${otherStyles}`}>
            {children}
        </div>
    )
}