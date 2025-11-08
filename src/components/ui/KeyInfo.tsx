import type { FC } from 'react';
import type { THotkey } from '../../data/hotkeys.data';

interface Props {
	keyDetail: THotkey;
}

export const KeyInfo: FC<Props> = ({ keyDetail: key }) => {
	return (
		<div className='flex items-center gap-2'>
			<div className='bg-white rounded-full size-5 text-[#353841] shadow flex items-center justify-center p-0.5'>{key.icon}</div>
			<div>{key.label}</div>
		</div>
	);
};
