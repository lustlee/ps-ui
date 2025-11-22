import bg1 from '../assets/images/backgrounds/game-bg-1.jpg'
import bg2 from '../assets/images/backgrounds/game-bg-2.jpg'
import bg3 from '../assets/images/backgrounds/game-bg-3.jpg'
import bg4 from '../assets/images/backgrounds/game-bg-4.jpg'
import bg5 from '../assets/images/backgrounds/game-bg-5.jpg'
import bg6 from '../assets/images/backgrounds/game-bg-6.jpg'
import bg7 from '../assets/images/backgrounds/game-bg-7.jpg'
import bg8 from '../assets/images/backgrounds/game-bg-8.jpg'
import bg9 from '../assets/images/backgrounds/game-bg-9.jpg'
import bg10 from '../assets/images/backgrounds/ps-bg-store.jpg'
import cover1 from '../assets/images/covers/game-cover-1.jpg'
import cover2 from '../assets/images/covers/game-cover-2.jpg'
import cover3 from '../assets/images/covers/game-cover-3.jpg'
import cover4 from '../assets/images/covers/game-cover-4.jpg'
import cover5 from '../assets/images/covers/game-cover-5.jpg'
import cover6 from '../assets/images/covers/game-cover-6.jpg'
import cover7 from '../assets/images/covers/game-cover-7.jpg'
import cover8 from '../assets/images/covers/game-cover-8.jpg'
import cover9 from '../assets/images/covers/game-cover-9.jpg'
import cover10 from '../assets/images/covers/ps-store.jpg'

import iconAvatar from '../assets/images/avatar-1.png'
import iconPlus from '../assets/images/ps-plus.svg'

export const USER_PROFILE = { iconAvatar, iconPlus }

export const GAMES_DATA = [
	{
		title: 'ARC Raiders',
		slug: 'arc-raiders',
		coverImage: cover1,
		bgImage: bg1,
		platform: 'PS5',
	},
	{
		title: 'Dispatch',
		slug: 'dispatch',
		coverImage: cover2,
		bgImage: bg2,
		platform: 'PS4',
	},
	{
		title: 'Halo',
		slug: 'halo',
		coverImage: cover3,
		bgImage: bg3,
		platform: 'PS5',
	},
	{
		title: 'PlayStation Store',
		slug: 'playstation-store',
		coverImage: cover10,
		bgImage: bg10,
		platform: 'PS5',
	},
	{
		title: 'Spider man Miles Morales',
		slug: 'spider-man-miles-morales',
		coverImage: cover4,
		bgImage: bg4,
		platform: 'PS4',
	},
	{
		title: 'Last of us 2',
		slug: 'last-of-us-2',
		coverImage: cover5,
		bgImage: bg5,
		platform: 'PS4',
	},
	{
		title: 'Elden Ring Nightreign',
		slug: 'elden-ring-nightreign',
		coverImage: cover6,
		bgImage: bg6,
		platform: 'PS5',
	},
	{
		title: 'God of War Ragnarok',
		slug: 'god-of-war-ragnarok',
		coverImage: cover7,
		bgImage: bg7,
		platform: 'PS4',
	},
	{
		title: 'GTA 6',
		slug: 'gta-6',
		coverImage: cover8,
		bgImage: bg8,
		platform: 'PS5',
	},
	{
		title: 'Silent Hill 2',
		slug: 'silent-hill-2',
		coverImage: cover9,
		bgImage: bg9,
		platform: 'PS5',
	},
]

export type TGame = (typeof GAMES_DATA)[number]
