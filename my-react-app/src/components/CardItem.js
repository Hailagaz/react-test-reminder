import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const CardItem = ({ title, description, image }) => {
	return (
		<Card sx={{ maxWidth: 345, margin: 'auto', mt: 2 }}>
			<CardMedia
				component="img"
				height="140"
				image={image}
				alt={title}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CardItem;