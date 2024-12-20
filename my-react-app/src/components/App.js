import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Link, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						My React App
					</Typography>
					<Link href="#home" color="inherit" sx={{ margin: 1 }}>Home</Link>
					<Link href="#about" color="inherit" sx={{ margin: 1 }}>About</Link>
					<Link href="#services" color="inherit" sx={{ margin: 1 }}>Services</Link>
					<Link href="#contact" color="inherit" sx={{ margin: 1 }}>Contact</Link>
				</Toolbar>
			</AppBar>
			<Container>
				<Box id="home" sx={{ padding: 4 }}>
					<Typography variant="h2">Welcome to My React App</Typography>
					<Typography>This is a simple application to help you remember React.js concepts.</Typography>
				</Box>
				<Box id="about" sx={{ padding: 4 }}>
					<Typography variant="h4">About Us</Typography>
					<Typography>We are a team of developers passionate about React.js.</Typography>
				</Box>
				<Box id="services" sx={{ padding: 4 }}>
					<Typography variant="h4">Our Services</Typography>
					<Typography>We offer a wide range of services to help you build your React applications.</Typography>
				</Box>
				<Box id="contact" sx={{ padding: 4 }}>
					<Typography variant="h4">Contact Us</Typography>
					<Typography>Feel free to reach out to us for any inquiries.</Typography>
				</Box>
			</Container>
			<Box component="footer" sx={{ padding: 2, textAlign: 'center', backgroundColor: '#f1f1f1' }}>
				<Typography variant="body2">© 2024 My React App. All rights reserved.</Typography>
			</Box>
		</ThemeProvider>
	);
};

export default App;