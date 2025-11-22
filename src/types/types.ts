export interface IMenuItem {
	title: string
	slug: string
}

export type TCategorySlug =
	| 'all'
	| 'action'
	| 'adventure'
	| 'horror'
	| 'rpg'
	| 'online'
