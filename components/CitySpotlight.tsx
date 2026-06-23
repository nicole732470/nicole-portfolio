"use client";

import Image from "next/image";
import { useState } from "react";
import type { Place } from "@/lib/places";
import { placePhotoSrc } from "@/lib/places";

function countryLabel(country: string) {
  if (country === "United States of America") return "USA";
  return country;
}

type CitySpotlightProps = {
  place: Place;
};

export function CitySpotlight({ place }: CitySpotlightProps) {
  const [photoOk, setPhotoOk] = useState(true);
  const src = placePhotoSrc(place);

  return (
    <div className="border-t border-line/60 bg-paper/95 px-4 py-4 sm:px-5">
      <div className="text-center">
        <p className="font-serif text-xl font-medium leading-tight text-navy">
          {place.name}
          <span className="text-muted"> · {countryLabel(place.country)}</span>
        </p>
        {place.dateLabel ? (
          <p className="mt-1 text-sm text-tea">{place.dateLabel}</p>
        ) : null}
      </div>

      <div className="mx-auto mt-3 w-full max-w-[420px]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line/60 bg-cream shadow-sm">
          {photoOk ? (
            <Image
              src={src}
              alt={place.name}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 420px, 90vw"
              onError={() => setPhotoOk(false)}
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center px-2 text-center text-xs leading-tight text-muted">
              <span className="text-2xl" aria-hidden>
                📍
              </span>
              <span className="mt-1">Photo coming</span>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
