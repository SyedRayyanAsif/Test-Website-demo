export const ACCENTS = {
  blue: {
    grad: 'from-blue-600 to-sky',
    soft: 'bg-sky-100 text-blue-600',
    ring: 'ring-blue-600/20',
    text: 'text-blue-600',
    dot: 'bg-blue-600',
  },
  navy: {
    grad: 'from-navy to-blue-600',
    soft: 'bg-navy/10 text-navy',
    ring: 'ring-navy/20',
    text: 'text-navy',
    dot: 'bg-navy',
  },
  sky: {
    grad: 'from-sky to-sky-100',
    soft: 'bg-sky-100 text-blue-600',
    ring: 'ring-sky/30',
    text: 'text-blue-500',
    dot: 'bg-sky',
  },
  mint: {
    grad: 'from-mint to-sky',
    soft: 'bg-mint/10 text-mint',
    ring: 'ring-mint/25',
    text: 'text-mint',
    dot: 'bg-mint',
  },
  sand: {
    grad: 'from-sand to-blue-500',
    soft: 'bg-sand/10 text-sand',
    ring: 'ring-sand/25',
    text: 'text-sand',
    dot: 'bg-sand',
  },
}

export const accent = (name) => ACCENTS[name] || ACCENTS.blue
