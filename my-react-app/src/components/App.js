import React from 'react';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';

const theme = createTheme();

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
				<Header />
				<Box sx={{ flex: 1 }}>
					<MainSection />
				</Box>
				<Footer />
			</Box>
		</ThemeProvider>
	);
};

export default App;