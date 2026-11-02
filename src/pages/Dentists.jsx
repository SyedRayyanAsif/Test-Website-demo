import { GraduationCap, Briefcase } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/ui/Reveal'
import { accent } from '../components/ui/accents'
import { dentists } from '../data/dentists'
import { CTABanner } from '../components/Shared'

export default function Dentists() {
  return (
    <>
      <PageHero
        eyebrow="Meet the Team"
        title="Our Dentists"
        description="Illustrative profiles created for this demonstration, representing the kind of team a clinic like Dentora could introduce."
      />
      <section className="section-pad">
        <div className="container-px mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dentists.map((d, i) => {
            const a = accent(d.accent)
            return (
              <Reveal key={d.slug} delay={i * 0.08}>
                <div className="card h-full p-7 flex flex-col items-center text-center">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${a.grad} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                    {d.initials}
                  </div>
                  <h3 className="mt-5 font-semibold text-navy">{d.name}</h3>
                  <p className={`text-xs font-semibold mt-1 ${a.text}`}>{d.specialty}</p>
                  <p className="flex items-center gap-1.5 text-xs text-ink-soft mt-3">
                    <Briefcase className="w-3.5 h-3.5" /> {d.experience}
                  </p>
                  <p className="text-sm text-ink-soft mt-4 leading-relaxed">{d.bio}</p>
                  <p className="flex items-center gap-1.5 text-[11px] text-ink-soft/70 mt-5 pt-4 border-t border-navy/5 w-full justify-center">
                    <GraduationCap className="w-3.5 h-3.5" /> Illustrative profile for this demo
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>
      <CTABanner />
    </>
  )
}
