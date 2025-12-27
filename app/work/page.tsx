import { BentoGrid, BentoItem } from "@/components/bento-grid"

export default function WorkPage() {
  // Dynamic generation of 28 images

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <header className="mb-16 md:mb-24">
        <h1 className="font-serif text-5xl md:text-8xl tracking-tighter mb-6 leading-[0.9]">
          Selected <span className="italic">Works</span>
        </h1>
        <p className="max-w-xl text-lg text-foreground/70 leading-relaxed">
          A collection of visual explorations focusing on the intersection of light, shadow, and minimalist geometry.
        </p>
      </header>

      <BentoGrid>
        {Array.from({ length: 28 }).map((_, i) => {
          const index = i + 1
          // Cycle through size patterns to maintain the layout style
          const sizePattern = [
            "md:col-span-8 md:row-span-2",
            "md:col-span-4 md:row-span-1",
            "md:col-span-4 md:row-span-1",
            "md:col-span-4 md:row-span-2",
            "md:col-span-8 md:row-span-1",
            "md:col-span-4 md:row-span-1",
            "md:col-span-12 md:row-span-2",
            "md:col-span-6 md:row-span-1",
            "md:col-span-6 md:row-span-1",
          ]
          const size = sizePattern[i % sizePattern.length]

          return (
            <BentoItem
              key={index}
              src={`/${index}.jpg`}
              // alt={`Work ${index}`}
              // title={`${index}.jpg`}
              // category=""
              className={size}
            />
          )
        })}
      </BentoGrid>
    </main>
  )
}
