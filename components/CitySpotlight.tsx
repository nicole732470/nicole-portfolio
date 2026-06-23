"use client";

import Image from "next/image";
import { useState } from "react";
import type { Place } from "@/lib/places";
import { placePhotoSrc } from "@/lib/places";

function countryLabel(country: string) {
  if (country === "United States of America") return "USA";
  return country;
}

export function CitySpotlight({ place }: { place: Place }) {
  const [photoOk, setPhotoOk] = useState(true);
  const src = placePhotoSrc(place);

  return (
    <div className="flex items-center gap-4 border-t border-line/60 bg-paper/95 px-4 py-3">
      <div className="relative h-[4.5rem] w-[6.5rem] shrink-0 overflow-hidden rounded-lg border border-line/60 bg-cream">
        {photoOk ? (
          <Image
            src={src}
            alt={place.name}
            fill
            className="object-cover"
            sizes="104px"
            onError={() => setPhotoOk(false)}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center px-1 text-center text-[10px] leading-tight text-muted">
            <span className="text-lg" aria-hidden>
              📍
            </span>
            <span>Photo coming</span>
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="font-serif text-lg font-medium leading-tight text-navy">
          {place.name}
          <span className="text-muted"> · {countryLabel(place.country)}</span>
        </p>
        {place.dateLabel ? (
          <p className="mt-0.5 text-sm text-tea">{place.dateLabel}</p>
        ) : null}
      </div>
    </div>
  );
}
