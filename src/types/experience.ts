export type ExperienceCategory =
  | 'Adventure'
  | 'Culture'
  | 'Food'
  | 'Wellness'
  | 'Nature';

export interface Experience {
  /** Unique identifier used in routes and favorites */
  id: number;
  title: string;
  description: string;
  category: ExperienceCategory;
  /** City and country in a single display string */
  destination: string;
  price: number;
  rating: number;
  imageUrl: string;
}
