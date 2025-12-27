"use client"

import InfiniteGallery from "@/components/InfiniteGallery"

export default function GalleryPage() {
  const images = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
  ]

  return (
    <main className="relative h-screen w-full bg-background overflow-hidden">
      <div className="absolute inset-0 z-0">
        <InfiniteGallery
          images={images}
          className="h-full w-full"
          speed={0.8}
          zSpacing={3.5}
          visibleCount={12}
          fadeSettings={{
            fadeIn: { start: 0.02, end: 0.15 },
            fadeOut: { start: 0.8, end: 0.95 },
          }}
          blurSettings={{
            blurIn: { start: 0.0, end: 0.1 },
            blurOut: { start: 0.85, end: 1.0 },
            maxBlur: 4.0,
          }}
        />
      </div>

      {/* Subtle overlay content */}
      <div className="absolute bottom-12 left-6 md:left-12 z-10 pointer-events-none">
        <h1 className="font-serif text-4xl md:text-6xl italic tracking-tighter text-white mix-blend-exclusion">
          The <span className="not-italic">Immersion</span>
        </h1>
        <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mt-4 mix-blend-exclusion">
          Scroll or drag to navigate the void
        </p>
      </div>
    </main>
  )
}
