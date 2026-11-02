import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/10000000000?text=Hi%20Dentora%2C%20I%27d%20like%20to%20ask%20about%20an%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] hover:shadow-[0_14px_36px_-6px_rgba(37,211,102,0.75)] transition-all duration-300"
    >
      <span className="flex items-center justify-center w-14 h-14 shrink-0">
        <MessageCircle className="w-6 h-6" strokeWidth={2} />
      </span>
      <span className="max-w-0 group-hover:max-w-[180px] overflow-hidden whitespace-nowrap transition-all duration-300 text-sm font-semibold pr-0 group-hover:pr-5">
        Chat on WhatsApp
      </span>
    </a>
  )
}
