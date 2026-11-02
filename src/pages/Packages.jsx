import { NavLink } from 'react-router-dom'
import { Check, Sparkles, Globe, CalendarClock, Paintbrush, Search, Share2, Bot, Headset, Database } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { packages, digitalServices } from '../data/packages'
import { Testimonials } from '../components/Shared'

const digitalIcons = [Globe, CalendarClock, Paintbrush, Search, Share2, Bot, Headset, Database]

export default function Packages() {
  return (
    <>
      <PageHero
        eyebrow="Treatment Packages"
        title="Our Treatment Packages"
        description="Three ways to approach your smile, each building on the last. Request a consultation to discuss what suits you."
      />

      <section className="section-pad">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-3 gap-7">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div
                className={`relative h-full flex flex-col p-8 rounded-[1.75rem] ${
                  p.highlight
                    ? 'bg-navy text-white shadow-[0_24px_60px_-16px_rgba(11,35,64,0.45)] lg:-translate-y-3'
                    : 'card'
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 bg-sand text-navy text-[11px] font-bold px-3 py-1.5 rounded-full">
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </span>
                )}
                <h3 className={`font-display text-xl font-semibold ${p.highlight ? 'text-white' : 'text-navy'}`}>
                  {p.name}
                </h3>
                <p className={`mt-2 text-sm ${p.highlight ? 'text-white/70' : 'text-ink-soft'}`}>{p.description}</p>

                <ul className="mt-7 space-y-3 grow">
                  {p.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5 text-sm">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${p.highlight ? 'text-mint' : 'text-blue-600'}`} />
                      <span className={p.highlight ? 'text-white/85' : 'text-ink-soft'}>{inc}</span>
                    </li>
                  ))}
                </ul>

                <NavLink
                  to="/contact"
                  className={p.highlight ? 'btn-primary w-full mt-8' : 'btn-outline-dark w-full mt-8'}
                >
                  Request a Consultation
                </NavLink>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="text-center text-xs text-ink-soft mt-8">
          Example inclusions for demonstration purposes. Actual pricing is discussed during consultation.
        </p>
      </section>

      <section className="section-pad bg-cloud">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="For Clinic Owners"
            title="Website & Digital Growth Solutions"
            description="Beyond patient care, here is what our team can build for your clinic's own digital presence."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalServices.map((d, i) => {
              const Icon = digitalIcons[i % digitalIcons.length]
              return (
                <Reveal key={d.name} delay={(i % 4) * 0.08}>
                  <div className="card h-full p-6">
                    <div className="w-11 h-11 rounded-xl bg-sky-100 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-4 font-semibold text-navy text-sm">{d.name}</h3>
                    <p className="mt-2 text-xs text-ink-soft leading-relaxed">{d.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <div className="text-center mt-12">
            <NavLink to="/contact" className="btn-primary">
              Discuss Digital Services
            </NavLink>
          </div>
        </div>
      </section>

      <Testimonials compact />
    </>
  )
}
