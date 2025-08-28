import CustomButton from './CustomButton';

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  buttons,
  isLarge = false,
  className = ""
}) {
  return (
    <div
      className={`flex flex-row items-center p-2 bg-white border border-gray-300 rounded-2xl shadow-md w-full max-w-full ${className}`}
      style={{
        boxSizing: 'border-box',
        maxWidth: '100vw',
        minHeight: '80px',
        background: 'rgba(255,255,255,0.95)'
      }}
    >
      {image && (
        <div
          className="flex-shrink-0 bg-white rounded-xl border border-gray-200 mr-2"
          style={{
            width: '56px',
            height: '56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            src={image}
            alt={title}
            style={{
              width: '48px',
              height: '48px',
              objectFit: 'contain',
              borderRadius: '0.5rem'
            }}
          />
        </div>
      )}
      <div
        className="flex flex-col justify-center flex-1 min-w-0 bg-white rounded-xl p-2"
        style={{
          color: '#222',
          fontSize: '14px',
          wordBreak: 'break-word',
          overflowWrap: 'break-word'
        }}
      >
        <p
          className="font-bold text-xs sm:text-base mb-1"
          style={{
            color: '#222',
            textAlign: 'left',
            margin: 0,
            padding: 0
          }}
        >
          {title}
        </p>
        <p
          className="text-xs sm:text-sm mb-1"
          style={{
            color: '#222',
            textAlign: 'left',
            margin: 0,
            padding: 0
          }}
        >
          {description}
        </p>
        {technologies && (
          <div className="flex flex-wrap gap-1 sm:gap-2 mt-1">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-1 sm:px-2 py-0.5 sm:py-1 bg-blue-100 text-blue-900 text-[10px] sm:text-xs rounded-full border border-blue-200"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        {buttons && (
          <div className={`flex ${isLarge ? 'flex-row space-x-2 sm:space-x-3' : 'flex-col space-y-2 sm:space-y-3'} mt-2`}>
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
