"use client";

import { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { CitySpotlight } from "@/components/CitySpotlight";
import { featuredPlaces, GEO_URL, places, visitedCountries } from "@/lib/places";

const AUTO_MS = 2800;

function countryFill(name: string, activeCountry: string | null) {
  if (activeCountry === name) return "rgba(201, 95, 61, 0.38)";
  if (visitedCountries.includes(name)) return "rgba(201, 95, 61, 0.1)";
  return "#ebe2d4";
}

export function MemoryMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const activePlace = featuredPlaces[activeIndex];
  const activeCountry = activePlace?.country ?? null;

  useEffect(() => {
    if (paused || featuredPlaces.length === 0) return;
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % featuredPlaces.length);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="World map with visited cities"
    >
      <div className="relative w-full overflow-hidden rounded-xl border border-line/70 bg-cream">
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{ scale: 175, center: [12, 8] }}
          width={1100}
          height={500}
          style={{ width: "100%", height: "auto", display: "block" }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies
                .filter((geo) => (geo.properties.name as string) !== "Antarctica")
                .map((geo) => {
                  const name = geo.properties.name as string;
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={countryFill(name, activeCountry)}
                      stroke={visitedCountries.includes(name) ? "rgba(201, 95, 61, 0.25)" : "#d4c5b0"}
                      strokeWidth={0.35}
                      style={{
                        default: { outline: "none", transition: "fill 400ms ease" },
                        hover: { outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
            }
          </Geographies>

          {places.map((place) => {
            const featuredIndex = featuredPlaces.findIndex((p) => p.name === place.name);
            const isActive = featuredIndex === activeIndex;
            const isFeatured = featuredIndex >= 0;
            return (
              <Marker key={place.name} coordinates={place.coords}>
                <g role="presentation">
                  {isActive && (
                    <circle r={16} fill="rgba(201, 95, 61, 0.2)">
                      <animate attributeName="r" values="12;18;12" dur="1.4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.45;0.15;0.45" dur="1.4s" repeatCount="indefinite" />
                    </circle>
                  )}
                  <circle
                    r={isActive ? 8 : isFeatured ? 5.5 : 4}
                    fill="#c95f3d"
                    fillOpacity={isActive ? 1 : isFeatured ? 0.75 : 0.45}
                    stroke="#fbf5ea"
                    strokeWidth={isActive ? 2.5 : 1.5}
                  />
                </g>
              </Marker>
            );
          })}
        </ComposableMap>

        {activePlace ? <CitySpotlight key={activePlace.slug} place={activePlace} /> : null}
      </div>
    </div>
  );
}
