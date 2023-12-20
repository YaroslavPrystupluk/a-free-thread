import { useTranslation } from 'react-i18next';
import { LoadingContainer, LoadingText } from '../../Theme/LoadingTheme';

function LoadingAnimation() {
	const { t } = useTranslation();
	const letter = t('loading.text');

	return (
		<LoadingContainer>
			<LoadingText>
				{letter.split('').map((letter, index) => (
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
