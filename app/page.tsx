import InfiniteGallery from "@/components/InfiniteGallery"

export default function Home() {
  const sampleImages = [
    { src: "/1.jpg", alt: "Image 1" },
    { src: "/2.jpg", alt: "Image 2" },
    { src: "/3.jpg", alt: "Image 3" },
    { src: "/4.jpg", alt: "Image 4" },
    { src: "/5.jpg", alt: "Image 5" },
    { src: "/6.jpg", alt: "Image 6" },
    { src: "/7.jpg", alt: "Image 7" },
    { src: "/8.jpg", alt: "Image 8" },
    { src: "/9.jpg", alt: "Image 9" },
  ]

  return (
    <main className="min-h-screen ">
      <InfiniteGallery
        images={sampleImages}
        speed={1.2}
        zSpacing={3}
        visibleCount={12}
        falloff={{ near: 0.8, far: 14 }}
        className="h-screen w-full rounded-lg overflow-hidden"
      />
      <div className="h-screen inset-0 pointer-events-none fixed flex items-center justify-center text-center px-3 mix-blend-exclusion text-white">
        <h1 className="font-serif text-4xl md:text-8xl tracking-tighter">
          <span className="italic block mb-2">Ephemeral</span> Sculptures of Light
        </h1>
      </div>

      <div className="text-center fixed bottom-10 left-0 right-0 font-mono uppercase text-[10px] font-medium tracking-[0.2em] mix-blend-exclusion text-white opacity-40">
        <p>Scroll or drag to navigate the collection</p>
      </div>
    </main>
  )
}
