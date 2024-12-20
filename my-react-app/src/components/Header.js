import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Link, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = (open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setDrawerOpen(open);
	};

	const drawerList = (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<List>
				{['Home', 'About', 'Services', 'Contact'].map((text) => (
					<ListItem button key={text} component="a" href={`#${text.toLowerCase()}`}>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						My React App
					</Typography>
					<Box sx={{ display: { xs: 'none', md: 'block' } }}>
						<Link href="#home" color="inherit" sx={{ margin: 1 }}>Home</Link>
						<Link href="#about" color="inherit" sx={{ margin: 1 }}>About</Link>
						<Link href="#services" color="inherit" sx={{ margin: 1 }}>Services</Link>
						<Link href="#contact" color="inherit" sx={{ margin: 1 }}>Contact</Link>
					</Box>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="end"
						onClick={toggleDrawer(true)}
						sx={{ display: { xs: 'block', md: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer
				anchor="right"
				open={drawerOpen}
				onClose={toggleDrawer(false)}
			>
				{drawerList}
			</Drawer>
		</>
	);
};

export default Header;