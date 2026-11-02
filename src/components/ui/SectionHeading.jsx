import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignCls = align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'
  return (
    <Reveal className={`flex flex-col ${alignCls} max-w-2xl ${className}`}>
      {eyebrow && (
        <span className={`eyebrow mb-4 ${light ? 'text-sky' : ''}`}>
          <span className={`w-6 h-px ${light ? 'bg-sky' : 'bg-blue-600'}`} />
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl md:text-[2.75rem] font-semibold leading-[1.1] tracking-tight ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${light ? 'text-white/75' : 'text-ink-soft'}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
