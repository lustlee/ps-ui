import type { FC } from 'react';
import type { TGame } from '../../../data/games.data';
import cn from 'clsx';

interface Props {
	game: TGame;
}

export const GameItem: FC<Props> = ({ game }) => {
	return (
		<button>
			<div
				className={cn(
					'p-0.5 border-2 border-transparent transition-colors duration-300 ease-in-out'
				)}
			>
				<img
					src={game.coverImage}
					alt={game.title}
					className='w-44 h-44 object-cover transition-all duration-300 ease-in-out'
				/>
			</div>
			<div className='mt-2'>
				<img
					src={game.platform === 'PS5' ? '/images/ps-5.png' : '/images/ps-4.png'}
					alt={game.platform}
					width={50}
					className='filter brightness-0 invert fadeIn opacity-0 transition-opacity duration-300 ease-in-out'
				/>
			</div>
		</button>
	);
};
