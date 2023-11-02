import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { Container } from '../../Theme/SubHeaderTheme';

const About = () => {
	return (
		<Container>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 2, md: 3 }}>
				<Grid xs={12} sm={6}>
					<Paper>1</Paper>
				</Grid>
				<Grid xs={12} sm={6}>
					<Paper>2</Paper>
				</Grid>
				<Grid xs={12} sm={6}>
					<Paper>3</Paper>
				</Grid>
				<Grid xs={12} sm={6}>
					<Paper>4</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default About;
