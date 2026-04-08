import Link from "next/link";
import wonders from "./wonders";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 py-12 px-6">
      <h1 className="text-center text-4xl font-bold text-white mb-2 tracking-tight">
        New Wonders of the World
      </h1>
      <p className="text-center text-gray-400 mb-10 text-sm">Click a photo to explore</p>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {wonders.map(({ id, src, name }, index) => (
          <Link key={id} href={`/photo-feed/${id}`} className="group relative overflow-hidden rounded-xl shadow-md block w-36 h-32 flex-shrink-0">
            <Image
              alt={name}
              src={src}
              width={144}
              height={128}
              sizes="144px"
              priority={index < 4}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
              <span className="text-white font-medium text-xs drop-shadow">{name}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
