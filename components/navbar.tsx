import Link from "next/link"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 pointer-events-none">
      <div className="pointer-events-auto">
        <Link href="/" className="font-serif text-2xl italic tracking-tighter mix-blend-exclusion text-white z-50 relative">
          Adarsh Kumar
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 pointer-events-auto font-mono text-[11px] uppercase tracking-widest mix-blend-exclusion text-white">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:opacity-50 transition-opacity">
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden pointer-events-auto">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white mix-blend-exclusion hover:bg-transparent">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-black/95 border-l border-white/10 p-0">
            <div className="flex flex-col h-full justify-center items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-serif text-3xl italic tracking-tighter text-white hover:text-white/50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
