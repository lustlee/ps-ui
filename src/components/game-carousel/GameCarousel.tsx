import { Swiper, SwiperSlide } from 'swiper/react';
import { GAMES_DATA } from '../../data/games.data';
import { GameItem } from './game-item/GameItem';

import 'swiper/css';

export const GameCarousel = () => {
	return (
		<div className='ml-32'>
			<Swiper slidesPerView={8} spaceBetween={18} loop slideToClickedSlide initialSlide={2}>
				{GAMES_DATA.map((game) => (
					<SwiperSlide key={game.slug}>
						<GameItem game={game} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
