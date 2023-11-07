import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import Grid from '@mui/material/Unstable_Grid2';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { RootState } from '../../redux/store/store';
import aboutImageTop from '../../images/About/about_1.webp';
import aboutImageButton from '../../images/About/about.webp';
import star from '../../images/icon/star.webp';
import { getTeamsAsync } from '../../redux/slices/teamsSlice';
import CardItem from './CardItem';

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

const About = () => {
	const theme = createTheme({
		breakpoints: {
			values: {
				xs: 320,
				sm: 480,
				md: 768,
				lg: 992,
				xl: 1220,
			},
		},
	});

	const dispath: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

	useEffect(() => {
		dispath(getTeamsAsync());
	}, [dispath]);

	const { teams } = useSelector((state: RootState) => state.teams);

	console.log(teams);

	return (
		<Container>
			<TitleWrapper $isTeam={false}>
				<Title>Про нас</Title>
				<StarIcon src={star} alt="star" />
				<SquareTitle $isTeam={false} />
			</TitleWrapper>
			<ThemeProvider theme={theme}>
				<Grid
					container
					rowSpacing={{ xs: 3, md: 7, xl: 9 }}
					columnSpacing={{ xs: 0, md: 3, xl: 4 }}
				>
					<GridAbout>
						<AboutImage src={aboutImageTop} alt="needlework" />
					</GridAbout>
					<GridAbout>
						<AboutText>
							Ми – соціальний бізнес, що вирішує соціальну проблему навчання і працевлаштування
							жінок з вразливих категорій, підтримку і відкритті власної швейної справи.
						</AboutText>
						<AboutText>
							Частину прибутку ми спрямовуємо на фінансування соціальних проектів.
						</AboutText>
						<AboutText>
							Ми робимо особливий одяг за індивідуальним замовленням, який може дозволити собі
							кожен, зберігаємо традицію символічного вишивання.
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
			</ThemeProvider>
			<TitleWrapper $isTeam>
				<Title>наша команда</Title>
				<SquareTitle $isTeam />
			</TitleWrapper>
			<Grid container rowSpacing={{ xs: 3, md: 7, xl: 9 }} columnSpacing={{ xs: 0, md: 3, xl: 4 }}>
				{teams.map((player, index) => (
					<CardItem key={index} player={player} />
				))}
			</Grid>
		</Container>
	);
};

export default About;
