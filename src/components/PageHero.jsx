import Reveal from './ui/Reveal'

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative pt-36 pb-20 bg-navy overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-mint/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      <div className="container-px mx-auto max-w-7xl relative text-center">
        <Reveal>
          {eyebrow && (
            <span className="eyebrow text-sky justify-center">
              <span className="w-6 h-px bg-sky" /> {eyebrow}
            </span>
          )}
          <h1 className="mt-4 text-3xl sm:text-5xl font-semibold text-white tracking-tight">{title}</h1>
          {description && <p className="mt-4 text-white/70 max-w-xl mx-auto">{description}</p>}
        </Reveal>
      </div>
    </section>
  )
}
