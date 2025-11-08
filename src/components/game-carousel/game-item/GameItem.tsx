import type { FC } from 'react';
import type { TGame } from '../../../data/games.data';
import cn from 'clsx';

interface Props {
	game: TGame;
}

export const GameItem: FC<Props> = ({ game }) => {
	return (
		<button>
			<div className={cn('p-1 border-2 border-transparent transition-colors duration-300 ease-in-out')}>
				<img src={game.coverImage} alt={game.title} className='w-56 h-56 object-cover' />
			</div>
			<div className='mt-2'>
				<img
					src={game.platform === 'PS5' ? '/images/ps-5.png' : '/images/ps-4.png'}
					alt={game.platform}
					width={60}
					className='filter brightness-0 invert opacity-50'
				/>
			</div>
		</button>
	);
};
