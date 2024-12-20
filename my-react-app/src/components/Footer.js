import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
	return (
		<Box component="footer" sx={{ padding: 2, textAlign: 'center', backgroundColor: '#f1f1f1', height: '60px' }}>
			<Typography variant="body2">© 2023 My React App. All rights reserved.</Typography>
		</Box>
	);
};

export default Footer;