import { FC } from 'react';
import { CardContent, CardMedia } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Teams } from '../../model/Iteams';
import { CustomCard, CardTitle, CardSubTitle } from '../../Theme/CardTheme';

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
					<CardMedia component="img" image={player.image} alt={player.position} />
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
