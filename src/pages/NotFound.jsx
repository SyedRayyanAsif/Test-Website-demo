import { NavLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center container-px pt-32">
      <p className="font-display text-7xl font-semibold text-navy">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-navy">Page not found</h1>
      <p className="mt-2 text-ink-soft">The page you are looking for does not exist.</p>
      <NavLink to="/" className="btn-primary mt-8">Back to Home</NavLink>
    </section>
  )
}
