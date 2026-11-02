import { useMemo, useState } from 'react'
import { CheckCircle2, CalendarDays, Clock, Info } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/ui/Reveal'
import { services } from '../data/services'
import { dentists } from '../data/dentists'

const TIME_SLOTS = ['09:00 AM', '10:30 AM', '12:00 PM', '02:00 PM', '03:30 PM', '05:00 PM']

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  treatment: '',
  dentist: '',
  date: '',
  time: '',
  message: '',
}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Please enter your full name.'
  if (!form.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!form.phone.trim()) {
    errors.phone = 'Please enter your phone number.'
  } else if (!/^[+\d][\d\s-]{6,}$/.test(form.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.'
  }
  if (!form.treatment) errors.treatment = 'Please select a treatment.'
  if (!form.dentist) errors.dentist = 'Please select a preferred dentist.'
  if (!form.date) {
    errors.date = 'Please select a preferred date.'
  } else {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (new Date(form.date) < today) errors.date = 'Please choose today or a future date.'
  }
  if (!form.time) errors.time = 'Please select a preferred time.'
  return errors
}

export default function Booking() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const minDate = useMemo(() => {
    const d = new Date()
    return d.toISOString().split('T')[0]
  }, [])

  const update = (key) => (e) => {
    const value = e.target.value
    setForm((f) => ({ ...f, [key]: value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setSubmitting(true)
    window.setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 900)
  }

  const bookAnother = () => {
    setForm(emptyForm)
    setErrors({})
    setSubmitted(false)
  }

  return (
    <>
      <PageHero
        eyebrow="Appointment Booking"
        title="Book Your Appointment"
        description="Request a time that works for you. This demo form does not send real booking data anywhere."
      />

      <section className="section-pad">
        <div className="container-px mx-auto max-w-5xl">
          <Reveal className="card !rounded-[1.5rem] bg-sky-100 !shadow-none border-0 px-6 py-4 mb-10 flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <p className="text-sm text-navy">
              This is a demonstration booking flow for presentation purposes. No real appointment is created and no
              patient information is stored or transmitted. A production version would connect to a real backend,
              clinic calendar and confirmation system.
            </p>
          </Reveal>

          {submitted ? (
            <Reveal className="card p-10 sm:p-14 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-mint/15 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-mint" strokeWidth={1.8} />
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-navy">Request received (demo)</h2>
              <p className="mt-3 text-ink-soft max-w-md mx-auto leading-relaxed">
                Thank you, {form.name.split(' ')[0] || 'there'}. In a live version of this site, our team would
                confirm your {form.treatment || 'selected'} appointment on {form.date || 'your chosen date'} at{' '}
                {form.time || 'your chosen time'} with {form.dentist || 'your selected dentist'}.
              </p>
              <button onClick={bookAnother} className="btn-primary mt-8">
                Book Another Appointment
              </button>
            </Reveal>
          ) : (
            <Reveal>
              <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-10 grid sm:grid-cols-2 gap-6">
                <Field label="Full Name" error={errors.name}>
                  <input
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Jane Doe"
                    className={inputCls(errors.name)}
                  />
                </Field>

                <Field label="Email Address" error={errors.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="jane@example.com"
                    className={inputCls(errors.email)}
                  />
                </Field>

                <Field label="Phone Number" error={errors.phone}>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="+1 000 000 0000"
                    className={inputCls(errors.phone)}
                  />
                </Field>

                <Field label="Preferred Treatment" error={errors.treatment}>
                  <select value={form.treatment} onChange={update('treatment')} className={inputCls(errors.treatment)}>
                    <option value="">Select a treatment</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Preferred Dentist" error={errors.dentist}>
                  <select value={form.dentist} onChange={update('dentist')} className={inputCls(errors.dentist)}>
                    <option value="">No preference</option>
                    {dentists.map((d) => (
                      <option key={d.slug} value={d.name}>{d.name} — {d.specialty}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Preferred Date" error={errors.date} icon={CalendarDays}>
                  <input
                    type="date"
                    min={minDate}
                    value={form.date}
                    onChange={update('date')}
                    className={inputCls(errors.date)}
                  />
                </Field>

                <Field label="Preferred Time" error={errors.time} icon={Clock} className="sm:col-span-2">
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => {
                          setForm((f) => ({ ...f, time: slot }))
                          if (errors.time) setErrors((er) => ({ ...er, time: undefined }))
                        }}
                        className={`text-xs sm:text-sm font-semibold rounded-xl py-2.5 border transition-colors ${
                          form.time === slot
                            ? 'bg-blue-600 border-blue-600 text-white'
                            : 'border-navy/10 text-ink-soft hover:border-blue-600 hover:text-blue-600'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </Field>

                <Field label="Additional Message (optional)" className="sm:col-span-2">
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell us anything that will help us prepare for your visit"
                    className={inputCls(false)}
                  />
                </Field>

                <div className="sm:col-span-2 flex items-center justify-between flex-wrap gap-4 pt-2">
                  <p className="text-xs text-ink-soft">
                    By submitting, you acknowledge this is a demo form and no real appointment will be booked.
                  </p>
                  <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-60">
                    {submitting ? 'Submitting…' : 'Request Appointment'}
                  </button>
                </div>
              </form>
            </Reveal>
          )}
        </div>
      </section>
    </>
  )
}

function inputCls(hasError) {
  return `w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy placeholder:text-ink-soft/50 outline-none transition-colors focus:border-blue-600 ${
    hasError ? 'border-red-400' : 'border-navy/10'
  }`
}

function Field({ label, error, children, className = '', icon: Icon }) {
  return (
    <label className={`flex flex-col gap-2 text-left ${className}`}>
      <span className="text-sm font-semibold text-navy flex items-center gap-1.5">
        {Icon && <Icon className="w-3.5 h-3.5 text-blue-600" />}
        {label}
      </span>
      {children}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </label>
  )
}
