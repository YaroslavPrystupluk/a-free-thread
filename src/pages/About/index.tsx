import { useEffect } from 'react';
import i18next from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import { Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
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

	const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
	const { t } = useTranslation();
	const currentLanguage = i18next.language;

	useEffect(() => {
		dispatch(getTeamsAsync(currentLanguage));
	}, [dispatch, currentLanguage]);

	const { teams } = useSelector((state: RootState) => state.teams);

	return (
		<Container>
			<TitleWrapper $isTeam={false}>
				<SquareTitle />
				<Title>{t('about.title')}</Title>
				<StarIcon src={star} alt="star" />
			</TitleWrapper>
			<ThemeProvider theme={theme}>
				<Grid container columnSpacing={{ xs: 0, md: 3, xl: 4 }} style={{ gap: 24, margin: 0 }}>
					<GridAbout>
						<AboutImage src={aboutImageTop} alt="needlework" />
					</GridAbout>
					<GridAbout>
						<AboutText>{t('about.text.first')}</AboutText>
						<AboutText>{t('about.text.second')}</AboutText>
						<AboutText>{t('about.text.third')}</AboutText>
					</GridAbout>
					<GridAbout>
						<AboutImage src={aboutImageButton} alt="seamstress" />
					</GridAbout>
					<GridAbout>
						<AboutText>{t('about.text.fourth')}</AboutText>
						<AboutText>{t('about.text.fifth')}</AboutText>
						<AboutText>{t('about.text.sixth')}</AboutText>
					</GridAbout>
				</Grid>
				<TitleWrapper $isTeam>
					<SquareTitle />
					<Title>{t('about.team.title')}</Title>
				</TitleWrapper>
				<Grid
					container
					justifyContent="center"
					columnGap={{ xs: 2, md: 3 }}
					rowGap={{ xs: 2.5, md: 7.5, xl: 10 }}
					pb={3}
				>
					{teams.map((player, index) => (
						<CardItem key={index} player={player} />
					))}
				</Grid>
			</ThemeProvider>
		</Container>
	);
};

export default About;
