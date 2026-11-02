export default function Logo({ light = false, className = '' }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 64 64" fill="none" className="shrink-0">
        <rect width="64" height="64" rx="18" fill={light ? '#ffffff' : '#0b2340'} fillOpacity={light ? '0.12' : '1'} />
        <path
          d="M32 16c-5 0-8 3-10 3-2.5 0-4.5-2-7-2-1 0-1.8.7-1.8 2 0 6 2.8 9 2.8 16 0 5 1.5 9 4 9 2.2 0 2-4 3-9 .6-3 1.6-5 4-5h10c2.4 0 3.4 2 4 5 1 5 .8 9 3 9 2.5 0 4-4 4-9 0-7 2.8-10 2.8-16 0-1.3-.8-2-1.8-2-2.5 0-4.5 2-7 2-2 0-5-3-10-3z"
          fill={light ? '#ffffff' : '#ffffff'}
        />
      </svg>
      <span className={`font-display text-xl font-semibold tracking-tight ${light ? 'text-white' : 'text-navy'}`}>
        Dentora
      </span>
    </div>
  )
}
