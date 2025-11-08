import { GAMES_DATA } from '../../data/games.data';
import { GameItem } from './game-item/GameItem';

export const GameCarousel = () => {
	return (
		<div className='flex items-center gap-2'>
			{GAMES_DATA.map((game) => (
				<GameItem key={game.slug} game={game} />
			))}
		</div>
	);
};
