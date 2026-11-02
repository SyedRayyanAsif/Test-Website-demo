import { NavLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/ui/Reveal'
import { accent } from '../components/ui/accents'
import { services } from '../data/services'
import { CTABanner } from '../components/Shared'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Dental treatments explained clearly"
        description="Every treatment includes a plain-language explanation of what it involves and who it is suited to."
      />
      <section className="section-pad">
        <div className="container-px mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const a = accent(s.accent)
            const Icon = s.icon
            return (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <NavLink
                  to={`/services/${s.slug}`}
                  className="card group h-full p-7 flex flex-col hover:-translate-y-1.5 transition-transform duration-300"
                >
                  <div className={`w-12 h-12 rounded-2xl ${a.soft} flex items-center justify-center mb-5`}>
                    <Icon className="w-6 h-6" strokeWidth={1.7} />
                  </div>
                  <h3 className="font-semibold text-navy text-lg leading-snug">{s.name}</h3>
                  <p className="text-sm text-ink-soft mt-2 leading-relaxed grow">{s.description}</p>
                  <span className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${a.text}`}>
                    View details
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </NavLink>
              </Reveal>
            )
          })}
        </div>
      </section>
      <CTABanner />
    </>
  )
}
