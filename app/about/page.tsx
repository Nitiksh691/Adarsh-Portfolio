import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-8">
          <h1 className="font-serif text-5xl md:text-8xl leading-tight mb-12">
            Capturing the <span className="italic">unseen</span> rhythms of life.
          </h1>
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-secondary font-light max-w-2xl">
            <p>
              I’m a passionate photographer and visual storyteller, currently pursuing B.Tech in Electronics & Communication Engineering at Delhi Technological University (DTU). What began as simple curiosity slowly turned into a deep obsession with capturing moments, emotions, and stories that often go unnoticed.
            </p>
            <p>
              Photography, for me, is more than just a frame—it’s about observing, waiting, and feeling the moment before pressing the shutter. I love working with natural light, candid emotions, street scenes, and live events, where every second tells a different story. Over time, my work has grown to be widely shared and reposted, which constantly motivates me to push my creative boundaries.
            </p>
            <p>
              I’m actively involved in photography and cinematography communities, collaborating, learning, and experimenting with different styles to evolve my visual language. Whether it’s a quiet street, a vibrant concert, or raw human expressions, I aim to create visuals that feel authentic, timeless, and alive.
            </p>
            <p className="font-medium italic">
              Always curious. Always creating.
            </p>
          </div>
        </div>
        <div className="md:col-span-4 flex flex-col justify-end">
          <div className="aspect-[3/4] bg-neutral-200 overflow-hidden rounded-sm mb-4 relative">
            <Image
              src="/9.jpg"
              alt="Adarsh Kumar"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-secondary text-right">
            Portrait of Adarsh
          </p>
        </div>
      </div>
    </main>
  )
}
