import { EXPERIENCE_CATEGORIES } from '@/constants/categories';
import type { Experience, ExperienceCategory } from '@/types/experience';

const PLACES: readonly [string, string][] = [
  ['Dubrovnik', 'Croatia'],
  ['Reykjavik', 'Iceland'],
  ['Machu Picchu', 'Peru'],
  ['Marrakech', 'Morocco'],
  ['Oaxaca City', 'Mexico'],
  ['Lisbon', 'Portugal'],
  ['Lima', 'Peru'],
  ['Hoi An', 'Vietnam'],
  ['Cape Town', 'South Africa'],
  ['Sydney', 'Australia'],
  ['Hvar', 'Croatia'],
  ['Santorini', 'Greece'],
  ['Chiang Mai', 'Thailand'],
  ['Quito', 'Ecuador'],
  ['Mallorca', 'Spain'],
  ['Edinburgh', 'United Kingdom'],
  ['Mexico City', 'Mexico'],
  ['Chefchaouen', 'Morocco'],
  ['Kyoto', 'Japan'],
  ['Seville', 'Spain'],
];

const THEMES_BY_CATEGORY: Record<
  ExperienceCategory,
  readonly [string, string][]
> = {
  Adventure: [
    ['Cliff hikes', 'climb'],
    ['Secret trails', 'outdoor escape'],
    ['Kayaking coves', 'small-group'],
    ['Volcano ridges', 'early start'],
    ['Zipline forest', 'safety briefing'],
    ['Bike coastal loop', 'local guide'],
  ],
  Culture: [
    ['Museum pass', 'curated highlights'],
    ['Old-town walk', 'hidden courtyards'],
    ['Artisan studios', 'hands-on'],
    ['Architectural gems', 'expert narration'],
    ['Market stories', 'tastings nearby'],
    ['Heritage tram', 'neighborhood lore'],
  ],
  Food: [
    ['Wine & tapas', 'seasonal bites'],
    ['Street tastings', 'neighborhood staples'],
    ['Cook with locals', 'market sourcing'],
    ['Seafood supper', 'harbor classics'],
    ['Farm lunch', 'olive grove tour'],
    ['Chocolate route', 'bean-to-bar demo'],
  ],
  Wellness: [
    ['Thermal springs', 'sunrise soak'],
    ['Sound bath', 'garden pavilion'],
    ['Coastal meditation', 'cliff gazebo'],
    ['Herbal hammam', 'relaxation rituals'],
    ['Forest breathing', 'gentle hikes'],
    ['Spa skyline', 'rooftop pool'],
  ],
  Nature: [
    ['Fjord viewpoints', 'photo stops'],
    ['Sunset wetland', 'birdwatch stroll'],
    ['Waterfall canyon', 'safe paths'],
    ['Alpine meadows', 'picnic break'],
    ['Desert dunes', 'golden hour'],
    ['Rainforest canopy', 'suspension bridge'],
  ],
};

function buildDescription(
  category: ExperienceCategory,
  city: string,
  country: string,
  theme: string,
): string {
  return `A ${category.toLowerCase()} experience in ${city}, ${country}. ${theme}. Designed for curious travelers who want real places, clear logistics, and time to enjoy the moment without rushing.`;
}

function buildExperiences(): Experience[] {
  const items: Experience[] = [];

  for (let i = 1; i <= 100; i += 1) {
    const category = EXPERIENCE_CATEGORIES[(i - 1) % EXPERIENCE_CATEGORIES.length];
    const [city, country] = PLACES[(i - 1) % PLACES.length];
    const themes = THEMES_BY_CATEGORY[category];
    const [label, modifier] = themes[(i - 1) % themes.length];
    const title = `${label} in ${city} — ${modifier}`;
    const destination = `${city}, ${country}`;
    const price = 49 + ((i * 17) % 320);
    const rating = Math.min(5, Math.round((3.6 + ((i * 11) % 14) / 10) * 10) / 10);
    const imageUrl = `https://picsum.photos/seed/wanderlust-${i}/800/500`;

    items.push({
      id: i,
      title,
      description: buildDescription(category, city, country, label),
      category,
      destination,
      price,
      rating,
      imageUrl,
    });
  }

  return items;
}

export const experiences: Experience[] = buildExperiences();

export function getExperienceById(id: number): Experience | undefined {
  return experiences.find((e) => e.id === id);
}

/** Distinct destination strings for filter dropdowns */
export function getDestinationOptions(): string[] {
  const set = new Set(experiences.map((e) => e.destination));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}
