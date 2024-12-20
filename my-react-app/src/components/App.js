import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';

const theme = createTheme();

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			<MainSection />
			<Footer />
		</ThemeProvider>
	);
};

export default App;