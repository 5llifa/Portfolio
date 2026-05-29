import CustomButton from './CustomButton';

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  buttons,
  className = ""
}) {
  return (
    <div
      className={`group overflow-hidden rounded-[28px] border border-slate-700/80 bg-slate-950/85 shadow-[0_35px_120px_-65px_rgba(14,165,233,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_45px_150px_-70px_rgba(59,130,246,0.45)] ${className}`}
      style={{ backdropFilter: 'blur(18px)' }}
    >
      {image && (
        <div className="relative overflow-hidden border-b border-slate-700/80 bg-slate-950/90">
          <div className="overflow-hidden rounded-t-[28px] border border-slate-700/80 bg-slate-950/95">
            <img
              src={image}
              alt={title}
              className="object-contain w-full h-72 transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 to-transparent" />
        </div>
      )}

      <div className="flex flex-col gap-5 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">{title}</h3>
        </div>

        <p className="text-sm leading-7 text-slate-300 sm:text-base">{description}</p>

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {buttons && buttons.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-1">
            {buttons.map((button, index) => (
              <CustomButton
                key={index}
                title={button.title}
                icon={button.icon}
                link={button.link}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
