export type Place = {
  /** URL-safe id — photo path is /images/places/{slug}.jpg */
  slug: string;
  name: string;
  /** [longitude, latitude] */
  coords: [number, number];
  /** Optional era label shown under city name, e.g. "2018–2022" */
  dateLabel?: string;
  note: string;
  /** Override default /images/places/{slug}.jpg */
  photo?: string;
  country: string;
  featured?: boolean;
};

export const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export function placePhotoSrc(place: Place) {
  return place.photo ?? `/images/places/${place.slug}.jpg`;
}

/** Primary cities for auto-play — order controls carousel sequence */
export const places: Place[] = [
  {
    slug: "inner-mongolia",
    name: "Inner Mongolia",
    coords: [111.75, 40.84],
    note: "Where the story started — grasslands, distance, and curiosity.",
    photo: "/images/places/inner-mongolia.jpg",
    country: "China",
    featured: true,
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    coords: [-118.24, 34.05],
    dateLabel: "2019",
    note: "First stretch of life in the US — sun, sprawl, and a different rhythm.",
    photo: "/images/places/los-angeles.jpg",
    country: "United States of America",
    featured: true,
  },
  {
    slug: "beijing",
    name: "Beijing",
    coords: [116.4, 39.9],
    note: "School, early work, and learning how people read the world.",
    country: "China",
    featured: true,
  },
  {
    slug: "chicago",
    name: "Chicago",
    coords: [-87.63, 41.88],
    note: "Home base now. Lake Michigan, Northwestern, building in public.",
    country: "United States of America",
    featured: true,
  },
  {
    slug: "seville",
    name: "Seville",
    coords: [-5.98, 37.39],
    note: "Light on stone and water — architecture that felt cinematic.",
    photo: "/images/places/seville.jpg",
    country: "Spain",
  },
  {
    slug: "sydney",
    name: "Sydney",
    coords: [151.21, -33.87],
    note: "Rainforest trails and a different sense of distance.",
    photo: "/images/places/sydney.jpg",
    country: "Australia",
  },
];

export const featuredPlaces = places.filter((p) => p.featured);

export const visitedCountries = [...new Set(places.map((p) => p.country))];
