"use client";

import { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { CitySpotlight } from "@/components/CitySpotlight";
import { GEO_URL, places, visitedCountries } from "@/lib/places";

const AUTO_MS = 2600;

function countryFill(name: string, activeCountry: string | null) {
  if (activeCountry === name) return "rgba(201, 95, 61, 0.38)";
  if (visitedCountries.includes(name)) return "rgba(201, 95, 61, 0.1)";
  return "#ebe2d4";
}

export function MemoryMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const activePlace = places[activeIndex];
  const activeCountry = activePlace?.country ?? null;

  useEffect(() => {
    if (paused || places.length === 0) return;
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % places.length);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div
      className="flex h-full flex-col"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="World map with visited cities"
    >
      <div className="relative flex-1 overflow-hidden rounded-t-xl border border-b-0 border-line/70 bg-cream">
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{ scale: 210, center: [12, 6] }}
          width={1100}
          height={580}
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

          {places.map((place, placeIndex) => {
            const isActive = placeIndex === activeIndex;
            return (
              <Marker key={place.slug} coordinates={place.coords}>
                <g
                  role="button"
                  tabIndex={0}
                  aria-label={`${place.name}${place.dateLabel ? `, ${place.dateLabel}` : ""}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setActiveIndex(placeIndex)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveIndex(placeIndex);
                    }
                  }}
                >
                  {isActive && (
                    <circle r={18} fill="rgba(201, 95, 61, 0.2)">
                      <animate attributeName="r" values="14;20;14" dur="1.4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.45;0.15;0.45" dur="1.4s" repeatCount="indefinite" />
                    </circle>
                  )}
                  <circle
                    r={isActive ? 7.5 : 5}
                    fill="#c95f3d"
                    fillOpacity={isActive ? 1 : 0.65}
                    stroke="#fbf5ea"
                    strokeWidth={isActive ? 2.5 : 1.5}
                  />
                </g>
              </Marker>
            );
          })}
        </ComposableMap>
      </div>

      {activePlace ? (
        <div className="rounded-b-xl border border-t-0 border-line/70">
          <CitySpotlight key={activePlace.slug} place={activePlace} index={activeIndex} total={places.length} />
        </div>
      ) : null}
    </div>
  );
}
