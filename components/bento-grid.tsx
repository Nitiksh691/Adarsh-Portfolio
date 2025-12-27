import type React from "react"
import { cn } from "@/lib/utils"

interface BentoItemProps {
  src: string
  alt: string
  className?: string
  title?: string
  category?: string
}

export function BentoItem({ src, alt, className, title, category }: BentoItemProps) {
  return (
    <div
      className={cn("group relative overflow-hidden bg-muted transition-all duration-500 hover:shadow-2xl", className)}
    >
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-700 scale-105 group-hover:scale-100"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex flex-col justify-end p-6 text-white">
        {category && <p className="text-[10px] uppercase tracking-[0.2em] mb-1 font-mono">{category}</p>}
        {title && <h3 className="font-serif text-2xl italic tracking-tight">{title}</h3>}
      </div>
    </div>
  )
}

export function BentoGrid({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6", className)}>{children}</div>
}
