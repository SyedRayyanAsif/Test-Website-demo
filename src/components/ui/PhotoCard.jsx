import { accent } from './accents'

/**
 * A crafted gradient "photo" placeholder used throughout the demo in place of
 * licensed photography, so the site stays fully self-contained and reliable
 * for an offline or low-connectivity demo.
 */
export default function PhotoCard({
  icon: Icon,
  label,
  caption,
  accent: accentName = 'blue',
  className = '',
  iconClassName = 'w-10 h-10',
  pattern = 'dots',
}) {
  const a = accent(accentName)
  return (
    <div
      className={`relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${a.grad} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            pattern === 'dots'
              ? 'radial-gradient(currentColor 1.5px, transparent 1.5px)'
              : 'linear-gradient(135deg, currentColor 1px, transparent 1px)',
          backgroundSize: pattern === 'dots' ? '18px 18px' : '22px 22px',
          color: 'white',
        }}
      />
      <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10 blur-xl" />
      <div className="absolute -left-10 -bottom-10 w-36 h-36 rounded-full bg-black/10 blur-2xl" />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 py-10 text-white">
        {Icon && (
          <div className="mb-3 flex items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm p-4">
            <Icon className={iconClassName} strokeWidth={1.6} />
          </div>
        )}
        {label && <p className="font-semibold text-sm sm:text-base">{label}</p>}
        {caption && <p className="text-xs text-white/75 mt-1">{caption}</p>}
      </div>
    </div>
  )
}
