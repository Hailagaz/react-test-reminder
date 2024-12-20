import React, { useEffect, useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import CardItem from './CardItem';
import servicesData from '../data/services.json';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainSection = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		setServices(servicesData);
	}, []);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1
				}
			}
		]
	};

	return (
		<Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
			<Box id="home" sx={{ padding: 4, textAlign: 'center', animation: 'fadeIn 2s' }}>
				<Typography variant="h2">Welcome to My React App</Typography>
				<Typography>This is a simple application to help you remember React.js concepts.</Typography>
			</Box>
			<Box id="about" sx={{ padding: 4, textAlign: 'center', animation: 'fadeIn 2s' }}>
				<Typography variant="h4">About Us</Typography>
				<Typography>We are a team of developers passionate about React.js.</Typography>
			</Box>
			<Box id="services" sx={{ padding: 4, textAlign: 'center', animation: 'fadeIn 2s', width: '100%' }}>
				<Typography variant="h4">Our Services</Typography>
				<Typography>We offer a wide range of services to help you build your React applications.</Typography>
				<Slider {...settings}>
					{services.map((service, index) => (
						<CardItem key={index} title={service.title} description={service.description} image={service.image} />
					))}
				</Slider>
			</Box>
			<Box id="contact" sx={{ padding: 4, textAlign: 'center', animation: 'fadeIn 2s' }}>
				<Typography variant="h4">Contact Us</Typography>
				<Typography>Feel free to reach out to us for any inquiries.</Typography>
			</Box>
		</Container>
	);
};

export default MainSection;