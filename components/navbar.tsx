import Link from "next/link"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-8 md:px-12 pointer-events-none">
      <div className="pointer-events-auto">
        <Link href="/" className="font-serif text-2xl italic tracking-tighter mix-blend-exclusion text-white">
          Adarsh Kumar
        </Link>
      </div>
      <div className="flex gap-8 pointer-events-auto font-mono text-[11px] uppercase tracking-widest mix-blend-exclusion text-white">
        <Link href="/" className="hover:opacity-50 transition-opacity">
          Home
        </Link>
        <Link href="/gallery" className="hover:opacity-50 transition-opacity">
          Gallery
        </Link>
        <Link href="/work" className="hover:opacity-50 transition-opacity">
          Work
        </Link>
        <Link href="/about" className="hover:opacity-50 transition-opacity">
          About
        </Link>
        <Link href="/contact" className="hover:opacity-50 transition-opacity">
          Contact
        </Link>
      </div>
    </nav>
  )
}
