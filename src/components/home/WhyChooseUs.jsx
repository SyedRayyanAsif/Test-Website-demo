import { ShieldCheck, HeartHandshake, Cpu, UsersRound } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import PhotoCard from '../ui/PhotoCard'
import { Building2 } from 'lucide-react'

const points = [
  {
    icon: ShieldCheck,
    title: 'Experienced, Qualified Team',
    text: 'Every dentist on our team brings years of focused clinical experience across their specialty.',
  },
  {
    icon: Cpu,
    title: 'Modern Equipment & Technology',
    text: 'Digital imaging and up to date technique keep treatment precise, efficient and comfortable.',
  },
  {
    icon: HeartHandshake,
    title: 'Patient Comfort First',
    text: 'Clear explanations, no rushed appointments, and a calm environment at every visit.',
  },
  {
    icon: UsersRound,
    title: 'Care for the Whole Family',
    text: 'From a child\'s first checkup to orthodontics and implants, one clinic for every stage.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-cloud">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <Reveal direction="right">
          <PhotoCard
            icon={Building2}
            label="Inside Dentora Dental Clinic"
            caption="Illustrative imagery for this demo"
            accent="navy"
            iconClassName="w-14 h-14"
            className="aspect-square lg:aspect-[5/4]"
          />
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A clinic built around how patients actually feel"
            align="left"
            className="!mx-0"
          />
          <div className="mt-10 grid sm:grid-cols-2 gap-7">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-white shadow-sm flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-blue-600" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-sm">{p.title}</h3>
                    <p className="text-sm text-ink-soft mt-1.5 leading-relaxed">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
