import Grid from '@mui/material/Unstable_Grid2';
import {
	Container,
	TitleWrapper,
	Title,
	StarIcon,
	SquareTitle,
	GridAbout,
	AboutImage,
	AboutText,
} from '../../Theme/AboutTheme';
import aboutImageTop from '../../images/About/about_1.webp';
import aboutImageButton from '../../images/About/about.webp';
import star from '../../images/icon/star.webp';

const About = () => {
	return (
		<Container>
			<TitleWrapper>
				<Title>Про нас</Title>
				<StarIcon src={star} alt="star" />
				<SquareTitle />
			</TitleWrapper>

			<Grid
				container
				rowSpacing={{ xs: 0, sm: 7, md: 9.5 }}
				columnSpacing={{ xs: 0, sm: 2.5, md: 3 }}
			>
				<GridAbout>
					<AboutImage src={aboutImageTop} alt="needlework" />
				</GridAbout>
				<GridAbout>
					<AboutText>
						Ми – соціальний бізнес, що вирішує соціальну проблему навчання і працевлаштування жінок
						з вразливих категорій, підтримку і відкритті власної швейної справи.
					</AboutText>
					<AboutText>
						Частину прибутку ми спрямовуємо на фінансування соціальних проектів.
					</AboutText>
					<AboutText>
						Ми робимо особливий одяг за індивідуальним замовленням, який може дозволити собі кожен,
						зберігаємо традицію символічного вишивання.
					</AboutText>
				</GridAbout>
				<GridAbout>
					<AboutImage src={aboutImageButton} alt="seamstress" />
				</GridAbout>
				<GridAbout>
					<AboutText>
						Соціальне підприємство &quot;Вільна нитка&quot; було створене на базі притулку для
						постраждалих від домашнього насильства в грудні 2021 року у вигляді швейно-вишивальної
						майстерні, з сучасним обладнанням.
					</AboutText>
					<AboutText>
						В нашій майстерні жінки з вразливих категорій навчаються на отримують оплачувані
						замовлення (багатодітні матері, пенсіонерки, постраждалі від війни, домашнього
						насильства).
					</AboutText>
					<AboutText>
						Зараз наша майстерня розташована у м. Вишгород, маємо плани по розширенні мережі
						майстерень.
					</AboutText>
				</GridAbout>
			</Grid>
		</Container>
	);
};

export default About;
