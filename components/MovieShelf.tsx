import Image from "next/image";
import { movies } from "@/lib/movies";

export function MovieShelf() {
  return (
    <div>
      <p className="mb-2 text-sm text-muted">A few things I&apos;ve watched lately.</p>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
        {movies.map((movie) => (
          <a
            key={movie.imdb}
            href={movie.imdb}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            title={movie.title}
          >
            <div className="relative aspect-[2/3] overflow-hidden rounded-md border border-line bg-cream shadow-sm transition group-hover:-translate-y-0.5">
              <Image src={movie.poster} alt={`${movie.title} poster`} fill className="object-cover" sizes="80px" />
            </div>
            <p className="mt-1 truncate text-[10px] font-medium">{movie.title}</p>
            <p className="text-[10px] text-muted">★ {movie.rating}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
