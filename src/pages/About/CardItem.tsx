import { FC } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Teams } from '../../model/Iteams';

interface CardItemProps {
	player: Teams;
}

const CardItem: FC<CardItemProps> = ({ player }) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia component="img" height="140" image={player.image} alt={player.position} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{player.name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{player.position}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{player.city}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CardItem;
