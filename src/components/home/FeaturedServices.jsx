import { NavLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { accent } from '../ui/accents'
import { services } from '../../data/services'

export default function FeaturedServices() {
  return (
    <section className="section-pad">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            eyebrow="Our Services"
            title="Treatments designed around your smile"
            description="From routine care to complete transformations, every treatment is explained clearly before we begin."
            align="left"
            className="!mx-0"
          />
          <NavLink to="/services" className="btn-outline-dark shrink-0">
            View All Services <ArrowRight className="w-4 h-4" />
          </NavLink>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 8).map((s, i) => {
            const a = accent(s.accent)
            const Icon = s.icon
            return (
              <Reveal key={s.slug} delay={(i % 4) * 0.08}>
                <NavLink
                  to={`/services/${s.slug}`}
                  className="card group h-full p-7 flex flex-col hover:-translate-y-1.5 transition-transform duration-300"
                >
                  <div className={`w-12 h-12 rounded-2xl ${a.soft} flex items-center justify-center mb-5`}>
                    <Icon className="w-6 h-6" strokeWidth={1.7} />
                  </div>
                  <h3 className="font-semibold text-navy text-base leading-snug">{s.name}</h3>
                  <p className="text-sm text-ink-soft mt-2 leading-relaxed grow">{s.tagline}</p>
                  <span className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${a.text}`}>
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </NavLink>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
