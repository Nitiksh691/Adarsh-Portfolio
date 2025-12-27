import { Github, Instagram, Linkedin, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-6xl mx-auto flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-5xl md:text-7xl mb-8 italic">Get in Touch</h1>
        <p className="text-lg text-secondary mb-12 font-light max-w-xl mx-auto">
          If you like my work, please contact me through these mediums.
        </p>

        <div className="flex flex-col items-center gap-8 font-mono tracking-widest uppercase text-sm">
          <a
            href="mailto:2007kumaradarsh@gmail.com"
            className="flex items-center gap-3 hover:text-accent transition-colors group"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>2007kumaradarsh@gmail.com</span>
          </a>

          <div className="flex gap-12 mt-4">
            <a
              href="https://www.instagram.com/adarshhkumarrrr?igsh=NjFraXI2aDBnZXoz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 hover:text-accent transition-colors group"
            >
              <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Instagram</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 hover:text-accent transition-colors group"
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
