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
    slug: "sanya",
    name: "Sanya",
    coords: [109.51, 18.25],
    dateLabel: "2022",
    note: "Turquoise water, fishing boats, and mountains behind the skyline.",
    photo: "/images/places/sanya.jpg",
    country: "China",
  },
  {
    slug: "jinan",
    name: "Jinan",
    coords: [117.0, 36.65],
    dateLabel: "2023",
    note: "Snow on the hedges, cathedral stone, and a lit Christmas tree.",
    photo: "/images/places/jinan.jpg",
    country: "China",
  },
  {
    slug: "suzhou",
    name: "Suzhou",
    coords: [120.62, 31.32],
    dateLabel: "2023",
    note: "Gate of the Orient at night — blue light on the lake.",
    photo: "/images/places/suzhou.jpg",
    country: "China",
  },
  {
    slug: "wuxi",
    name: "Wuxi",
    coords: [120.31, 31.57],
    dateLabel: "2024",
    note: "Lake sunset through the trees — chairs out, light on the water.",
    photo: "/images/places/wuxi.jpg",
    country: "China",
  },
  {
    slug: "dali",
    name: "Dali",
    coords: [100.23, 25.59],
    dateLabel: "2024",
    note: "A bag full of roses — pink, peach, and yellow on the street.",
    photo: "/images/places/dali.jpg",
    country: "China",
  },
  {
    slug: "baihaba",
    name: "Baihaba",
    coords: [86.78, 48.7],
    dateLabel: "2023",
    note: "Log cabins, snow on the peaks, and cattle at the edge of the village.",
    photo: "/images/places/baihaba.jpg",
    country: "China",
  },
  {
    slug: "kanas",
    name: "Kanas",
    coords: [87.05, 48.72],
    dateLabel: "2023",
    note: "Turquoise river bend, golden larches, and snow on the far ridges.",
    photo: "/images/places/kanas.jpg",
    country: "China",
  },
  {
    slug: "sayram-lake",
    name: "Sayram Lake",
    coords: [81.13, 44.6],
    dateLabel: "2023",
    note: "Deep blue water, snow-streaked peaks, and clouds rolling over the pass.",
    photo: "/images/places/sayram-lake.jpg",
    country: "China",
  },
  {
    slug: "chicago",
    name: "Chicago",
    coords: [-87.63, 41.88],
    dateLabel: "2019",
    note: "Home base now. Lake Michigan, Northwestern, building in public.",
    photo: "/images/places/chicago.jpg",
    country: "United States of America",
    featured: true,
  },
  {
    slug: "new-york",
    name: "New York",
    coords: [-73.98, 40.75],
    dateLabel: "2019",
    note: "Grand Central light — marble arches and a first taste of the city.",
    photo: "/images/places/new-york.jpg",
    country: "United States of America",
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
    slug: "perugia",
    name: "Perugia",
    coords: [12.39, 43.11],
    dateLabel: "2023",
    note: "Terracotta roofs, green hills, and a view from the old town wall.",
    photo: "/images/places/perugia.jpg",
    country: "Italy",
  },
  {
    slug: "florence",
    name: "Florence",
    coords: [11.25, 43.77],
    dateLabel: "2023",
    note: "Primavera at the Uffizi — myth, spring, and a room full of strangers.",
    photo: "/images/places/florence.jpg",
    country: "Italy",
  },
  {
    slug: "rome",
    name: "Rome",
    coords: [12.49, 41.9],
    dateLabel: "2023",
    note: "Trevi at night — stone lit up, water still, phone in hand.",
    photo: "/images/places/rome.jpg",
    country: "Italy",
  },
  {
    slug: "venice",
    name: "Venice",
    coords: [12.34, 45.44],
    dateLabel: "2023",
    note: "Gondola at dusk — warm balcony light on the canal.",
    photo: "/images/places/venice.jpg",
    country: "Italy",
  },
  {
    slug: "sydney",
    name: "Sydney",
    coords: [151.21, -33.87],
    note: "Rainforest trails and a different sense of distance.",
    photo: "/images/places/sydney.jpg",
    country: "Australia",
  },
  {
    slug: "hobart",
    name: "Hobart",
    coords: [147.33, -42.88],
    dateLabel: "2023",
    note: "Hillside houses across the water — boats, pier, and open sky.",
    photo: "/images/places/hobart.jpg",
    country: "Australia",
  },
  {
    slug: "launceston",
    name: "Launceston",
    coords: [147.14, -41.43],
    dateLabel: "2024",
    note: "Shell station at dusk — pink clouds over an ordinary corner of town.",
    photo: "/images/places/launceston.jpg",
    country: "Australia",
  },
  {
    slug: "melbourne",
    name: "Melbourne",
    coords: [144.96, -37.81],
    dateLabel: "2024",
    note: "Red walls at the NGV — gold frames floor to ceiling.",
    photo: "/images/places/melbourne.jpg",
    country: "Australia",
  },
];

export const featuredPlaces = places.filter((p) => p.featured);

export const visitedCountries = [...new Set(places.map((p) => p.country))];
