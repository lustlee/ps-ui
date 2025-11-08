import { useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { GAMES_DATA } from '../../data/games.data';
import { GameItem } from './game-item/GameItem';

import 'swiper/css';
import { useGameStore } from '../../store';
import { useHotkeys } from 'react-hotkeys-hook';
import { HotKeysConfig } from '../../config/hotkeys.config';

export const GameCarousel = () => {
	const { setActiveGameSlug } = useGameStore();
	const swiperRef = useRef<SwiperRef>(null);

	useHotkeys(HotKeysConfig.NEXT_GAME, () => {
		if (swiperRef.current) {
			swiperRef.current?.swiper.slideNext();
		}
	});

	useHotkeys(HotKeysConfig.PREV_GAME, () => {
		if (swiperRef.current) {
			swiperRef.current?.swiper.slidePrev();
		}
	});

	return (
		<div className='ml-32'>
			<Swiper
				ref={swiperRef}
				slidesPerView={8}
				spaceBetween={18}
				loop
				slideToClickedSlide
				initialSlide={0}
				onSlideChange={(e) => {
					const gameSlug = GAMES_DATA[e.realIndex].slug;
					setActiveGameSlug(gameSlug);
				}}
			>
				{GAMES_DATA.map((game) => (
					<SwiperSlide key={game.slug}>
						<GameItem game={game} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
