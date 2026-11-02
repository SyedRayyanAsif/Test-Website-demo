import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle2, MessageCircle } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/ui/Reveal'

const emptyForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email address.'
    if (!form.message.trim()) errs.message = 'Please enter a message.'
    setErrors(errs)
    if (Object.keys(errs).length === 0) setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Questions about treatment, packages, or our digital services? Send a message or reach us directly."
      />

      <section className="section-pad">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-5 gap-12">
          <Reveal direction="right" className="lg:col-span-2 space-y-5">
            <InfoCard icon={MapPin} title="Visit Us" text="123 Demo Street, Example City (demo address)" />
            <InfoCard icon={Phone} title="Call Us" text="+1 (000) 000-0000" href="tel:+10000000000" />
            <InfoCard icon={Mail} title="Email Us" text="hello@dentora-demo.com" href="mailto:hello@dentora-demo.com" />
            <InfoCard icon={Clock} title="Hours" text="Mon – Sat, 9:00 AM – 6:00 PM (demo hours)" />
            <a
              href="https://wa.me/10000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 px-5 py-4 text-[#1a9e4e] font-semibold text-sm hover:bg-[#25D366]/15 transition-colors"
            >
              <MessageCircle className="w-5 h-5" /> Message us on WhatsApp
            </a>

            <div className="card !rounded-[1.5rem] overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-sky-100 to-sky flex flex-col items-center justify-center text-navy/70 gap-2">
                <MapPin className="w-8 h-8" strokeWidth={1.5} />
                <p className="text-xs font-semibold">Map placeholder — demo location</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3">
            {submitted ? (
              <div className="card h-full p-10 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-mint/15 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-mint" strokeWidth={1.8} />
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-navy">Message sent (demo)</h2>
                <p className="mt-3 text-ink-soft max-w-sm">
                  Thanks for reaching out, {form.name.split(' ')[0] || 'there'}. This is a demonstration form; no
                  message was actually transmitted.
                </p>
                <button onClick={() => { setForm(emptyForm); setSubmitted(false) }} className="btn-primary mt-8">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="card p-8 sm:p-10 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Full Name" error={errors.name}>
                    <input value={form.name} onChange={update('name')} placeholder="Jane Doe" className={inputCls(errors.name)} />
                  </Field>
                  <Field label="Email Address" error={errors.email}>
                    <input value={form.email} onChange={update('email')} placeholder="jane@example.com" className={inputCls(errors.email)} />
                  </Field>
                </div>
                <Field label="Message" error={errors.message}>
                  <textarea rows={6} value={form.message} onChange={update('message')} placeholder="How can we help?" className={inputCls(errors.message)} />
                </Field>
                <button type="submit" className="btn-primary">Send Message</button>
                <p className="text-xs text-ink-soft">Demo form only, no message is actually sent.</p>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}

function InfoCard({ icon: Icon, title, text, href }) {
  const content = (
    <div className="flex items-start gap-4 card p-5">
      <div className="w-11 h-11 shrink-0 rounded-xl bg-sky-100 flex items-center justify-center">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <div>
        <p className="font-semibold text-navy text-sm">{title}</p>
        <p className="text-sm text-ink-soft mt-0.5">{text}</p>
      </div>
    </div>
  )
  return href ? <a href={href}>{content}</a> : content
}

function inputCls(hasError) {
  return `w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy placeholder:text-ink-soft/50 outline-none transition-colors focus:border-blue-600 ${
    hasError ? 'border-red-400' : 'border-navy/10'
  }`
}

function Field({ label, error, children }) {
  return (
    <label className="flex flex-col gap-2 text-left">
      <span className="text-sm font-semibold text-navy">{label}</span>
      {children}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </label>
  )
}
