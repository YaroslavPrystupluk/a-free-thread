import { FC } from 'react';
import { CardContent, CardMedia, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Teams } from '../../model/Iteams';
import {
	CustomCard,
	CardHeader,
	Front,
	Back,
	BackContent,
	CardTitle,
	CardSubTitle,
} from '../../Theme/CardTheme';

interface CardItemProps {
	player: Teams;
}

const CardItem: FC<CardItemProps> = ({ player }) => {
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

	return (
		<ThemeProvider theme={theme}>
			<Grid>
				<CustomCard>
					<CardHeader>
						<Front className="front">
							<CardMedia component="img" image={player.image} alt={player.position} />
						</Front>
						<Back className="back">
							<BackContent>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia lorem
							</BackContent>
						</Back>
					</CardHeader>
					<CardContent>
						<CardTitle>{player.name}</CardTitle>
						<Grid container justifyContent="space-between">
							<CardSubTitle>
								{player.position}, з м.
								{player.city}
							</CardSubTitle>
						</Grid>
					</CardContent>
				</CustomCard>
			</Grid>
		</ThemeProvider>
	);
};

export default CardItem;
