export interface ICategory {
  title: string;
  slug: TCategorySlug;
};

export type TCategorySlug =
  | 'all'
  | 'action'
  | 'adventure'
  | 'horror'
  | 'rpg'
  | 'online';