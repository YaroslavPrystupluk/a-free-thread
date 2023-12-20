import { StyleDriverIcon } from '../../Theme/CollectionPageTheme';

/* eslint-disable max-len */
export const RightArrow = () => (
	<div style={{ marginLeft: '5px' }}>
		<svg xmlns="http://www.w3.org/2000/svg" width="34" height="9" viewBox="0 0 34 9" fill="none">
			<path
				d="M32.8536 4.8682C33.0488 4.67294 33.0488 4.35636 32.8536 4.1611L29.6716 0.979115C29.4763 0.783852 29.1597 0.783852 28.9645 0.979115C28.7692 1.17438 28.7692 1.49096 28.9645 1.68622L31.7929 4.51465L28.9645 7.34308C28.7692 7.53834 28.7692 7.85492 28.9645 8.05018C29.1597 8.24544 29.4763 8.24544 29.6716 8.05018L32.8536 4.8682ZM0.5 5.01465H32.5V4.01465H0.5V5.01465Z"
				fill="black"
			/>
		</svg>
	</div>
);

export const LeftArrow = () => (
	<div style={{ marginRight: '5px' }}>
		<svg xmlns="http://www.w3.org/2000/svg" width="34" height="9" viewBox="0 0 34 9" fill="none">
			<path
				d="M1.14645 4.8682C0.951183 4.67294 0.951183 4.35636 1.14645 4.1611L4.32843 0.979115C4.52369 0.783852 4.84027 0.783852 5.03553 0.979115C5.2308 1.17438 5.2308 1.49096 5.03553 1.68622L2.20711 4.51465L5.03553 7.34308C5.2308 7.53834 5.2308 7.85492 5.03553 8.05018C4.84027 8.24544 4.52369 8.24544 4.32843 8.05018L1.14645 4.8682ZM33.5 5.01465H1.5V4.01465H33.5V5.01465Z"
				fill="#472124"
			/>
		</svg>
	</div>
);

export const RightArrowWhite = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="41" height="8" viewBox="0 0 41 8" fill="none">
		<path
			d="M40.3536 4.35355C40.5488 4.15829 40.5488 3.84171 40.3536 3.64645L37.1716 0.464466C36.9763 0.269204 36.6597 0.269204 36.4645 0.464466C36.2692 0.659728 36.2692 0.976311 36.4645 1.17157L39.2929 4L36.4645 6.82843C36.2692 7.02369 36.2692 7.34027 36.4645 7.53553C36.6597 7.7308 36.9763 7.7308 37.1716 7.53553L40.3536 4.35355ZM0 4.5H40V3.5H0V4.5Z"
			fill="white"
		/>
	</svg>
);

export const DividerIcon = () => {
	return <StyleDriverIcon>&#47;</StyleDriverIcon>;
};

export const ArrowShow = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path
			d="M13.8895 6.31718L6.52382 13.6829M6.52382 13.6829L6.52381 6.61181M6.52382 13.6829L13.5949 13.6829"
			stroke="black"
			strokeWidth="1.25"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const ArrowHide = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path
			d="M6.52382 13.6829L13.8895 6.31718M13.8895 6.31718L6.81844 6.31718M13.8895 6.31718L13.8895 13.3882"
			stroke="black"
			strokeWidth="1.25"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
