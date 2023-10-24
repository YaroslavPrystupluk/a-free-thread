import { LoadingContainer, LoadingText } from '../../Theme/LoadingTheme';

function LoadingAnimation() {
	const letters = ['З', 'А', 'В', 'А', 'Н', 'Т', 'А', 'Ж', 'Е', 'Н', 'Н', 'Я'];

	return (
		<LoadingContainer>
			<LoadingText>
				{letters.map((letter, index) => (
					<span
						key={`${letter}-${Math.random()}`}
						style={{ animationDelay: `${(index + 1) * 0.05}s` }}
					>
						{letter}
					</span>
				))}
			</LoadingText>
		</LoadingContainer>
	);
}

export default LoadingAnimation;
