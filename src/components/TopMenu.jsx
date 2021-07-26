// import React from "react";
// import { Link } from "react-router-dom";
// import { useTheme } from '@material-ui/core/styles';

// const TopMenu = () => {
//   return (
//     <React.Fragment>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light p-0" style={{ backgroundColor: "#e3f2fd" }}>
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">
//             E-Commerce
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav">
//               <li className="nav-item dropdown">
//                 <button
//                   className="btn nav-link dropdown-toggle font-weight-bold"
//                   id="navbarDropdown"
//                   data-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   All Pages
//                 </button>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <li>
//                     <Link className="dropdown-item" to="/account/signin">
//                       Sign In
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/account/signup">
//                       Sign Up
//                     </Link>
//                   </li>
//                   <li>
//                     <hr className="dropdown-divider" />
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/checkout">
//                       Checkout Page
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/contact-us">
//                       Contact Us
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/blog">
//                       Blog
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/blog/detail">
//                       Blog Detail
//                     </Link>
//                   </li>
//                   <li>
//                     <hr className="dropdown-divider" />
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/fsafasf">
//                       404 Page Not Found
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/500">
//                       500 Internal Server Error
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/category">
//                   Fashion
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/category">
//                   Supermarket
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/category">
//                   Electronics
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/category">
//                   Furniture
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/category">
//                   Garden & Outdoors
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/category">
//                   Jewellery
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/documentation">
//                   Documentation
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </React.Fragment>
//   );
// };

// export default TopMenu;
import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles, useTheme } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0
	});
}

const useStyles = makeStyles((theme) => ({
	logo: {
		height: '8em',
		[theme.breakpoints.down('md')]: {
			height: '7em'
		},
		[theme.breakpoints.down('xs')]: {
			height: '5.5em'
		}
	},
	logoContainer: {
		padding: 0,
		'&:hover': {
			backgroundColor: 'transparent'
		}
	},
	tabContainer: {
		marginLeft: 'auto'
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: '25px'
	},
	button: {
		...theme.typography,
		borderRadius: '50px',
		marginLeft: '50px',
		marginRight: '25px',
		height: '45px',
		'&:hover': {
			backgroundColor: theme.palette.secondary.light
		}
	},
	menu: {
		backgroundColor: theme.palette.primary.light,
		color: 'white'
	},
	menuItem: {
		...theme.typography.tab,
		opacity: 0.7,
		'&:hover': {
			color: theme.palette.primary,
			opacity: 1
		}
	},
	drawerIcon: {
		height: '50px',
		width: '50px'
	},
	drawerIconContainer: {
		marginLeft: 'auto',
		'&:hover': {
			backgroundColor: 'transparent'
		}
	},
	drawer: {
		backgroundColor: theme.palette.common.blue
	},
	drawerItem: {
		...theme.typography.tab,
		color: 'white',
		opacity: 0.7
	},
	drawerItemSignup: {
		backgroundColor: theme.palette.common.orange
	},
	drawerItemSelected: {
		'& .MuiListItemText-root': {
			opacity: 1
		}
	},
	appbar: {
		zIndex: theme.zIndex.modal + 1
	}
}));

const TopMenu = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
	const matches = useMediaQuery(theme.breakpoints.down('md'));
	const [ openDrawer, setOpenDrawer ] = useState(false);
	const [ anchorEl, setAnchorEl ] = useState(null);
	const [ openMenu, setOpenMenu ] = useState(false);

	const handleChange = (e, value) => {
		props.setValue(value);
	};

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
		setOpenMenu(true);
	};

	const handleMenuItemClick = (e, index) => {
		setAnchorEl(null);
		setOpenMenu(false);
		props.setSelectedIndex(index);
	};

	const handleClose = (e) => {
		setAnchorEl(null);
		setOpenMenu(false);
	};

	const menuOptions = [
		{ name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0 },
		{ name: 'Custom Software Development', link: '/customsoftware', activeIndex: 1, selectedIndex: 1 },
		{ name: 'Mobile App Development', link: '/mobileapps', activeIndex: 1, selectedIndex: 2 },
		{ name: 'Website Development', link: '/websites', activeIndex: 1, selectedIndex: 3 }
	];

	const routes = [
		{ name: 'Home', link: '/', activeIndex: 0 },
		{ name: 'Checkout', link: '/checkout', activeIndex: 1 },
		{
			name: 'Services',
			link: '/services',
			activeIndex: 2,
			ariaOwns: anchorEl ? 'simple-menu' : undefined,
			ariaPopup: anchorEl ? 'true' : undefined,
			mouseOver: (event) => handleClick(event)
		},
		{
			name: 'Category',
			link: '/category',
			activeIndex: 3
		},
		{ name: 'Support', link: '/support', activeIndex: 4 },
		{ name: 'About Us', link: '/about', activeIndex: 5 },
		{ name: 'Contact Us', link: '/contact-us', activeIndex: 6 }
	];

	useEffect(
		() => {
			[ ...menuOptions, ...routes ].forEach((route) => {
				switch (window.location.pathname) {
					case `${route.link}`:
						if (props.value !== route.activeIndex) {
							props.setValue(route.activeIndex);
							if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
								props.setSelectedIndex(route.selectedIndex);
							}
						}
						break;
					default:
						break;
				}
			});
		},
		[ props.value, menuOptions, props.selectedIndex, routes, props ]
	);

	const tabs = (
		<React.Fragment>
			<Tabs value={props.value} onChange={handleChange} indicatorColor="primary" className={classes.tabContainer}>
				{routes.map((route, index) => (
					<Tab
						key={`${route}${index}`}
						disableRipple
						keys={`${route}`}
						className={classes.tab}
						component={Link}
						to={route.link}
						label={route.name}
						aria-owns={route.ariaOwns}
						aria-haspopup={route.ariaPopup}
						onMouseOver={route.mouseOver}
					/>
				))}
			</Tabs>
			<Button variant="contained" color="secondary" className={classes.button}>
				Sign Up
			</Button>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				open={openMenu}
				onClose={handleClose}
				MenuListProps={{ onMouseLeave: handleClose }}
				classes={{ paper: classes.menu }}
				elevation={0}
				style={{ zIndex: 1302 }}
				keepMounted
			>
				{menuOptions.map((option, i) => (
					<MenuItem
						disableRipple
						key={`${option}${i}`}
						component={Link}
						to={option.link}
						classes={{ root: classes.MenuItem }}
						onClick={(event) => {
							handleMenuItemClick(event, i);
							props.setValue(1);
							handleClose();
						}}
						selected={i === props.selectedIndex && props.value === 1}
					>
						{option.name}
					</MenuItem>
				))}
			</Menu>
		</React.Fragment>
	);

	const drawer = (
		<React.Fragment>
			<SwipeableDrawer
				disableBackdropTransistion={!iOS}
				disableDiscover={iOS}
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				onOpen={() => setOpenDrawer(true)}
				classes={{ paper: classes.drawer }}
			>
				<div className={classes.toolbarMargin} />
				<List disablePadding>
					{routes.map((route) => (
						<ListItem
							key={`${route}${route.activeIndex}`}
							disableRipple
							divider
							button
							component={Link}
							to={route.link}
							selected={props.value === route.activeIndex}
							classes={{ selected: classes.drawerItemSelected }}
							onClick={() => {
								setOpenDrawer(false);
								props.setValue(route.activeIndex);
							}}
						>
							<ListItemText className={classes.drawerItem} disableTypography>
								{route.name}
							</ListItemText>
						</ListItem>
					))}
					<ListItem
						classes={{ root: classes.drawerItemEstimate, selected: classes.drawerItemSelected }}
						onClick={() => {
							setOpenDrawer(false);
							props.setValue(5);
						}}
						divider
						button
						className={classes.drawerItemSignup}
						component={Link}
						to="/signup"
						selected={props.value === 5}
					>
						<ListItemText className={classes.drawerItem} disableTypography>
							Sign Up
						</ListItemText>
					</ListItem>
				</List>
			</SwipeableDrawer>
			<IconButton
				className={classes.drawerIconContainer}
				onClick={() => setOpenDrawer(!openDrawer)}
				disableRipple
			>
				<MenuIcon className={classes.drawerIcon} />
			</IconButton>
		</React.Fragment>
	);

	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar position="static" className={classes.appbar}>
					<Toolbar disableGutters>
						<Button
							component={Link}
							to="/"
							disableRipple
							onClick={() => props.setValue(0)}
							className={classes.logoContainer}
						>
							{/* <img src={logo} alt="company logo" className={classes.logo} /> */}
						</Button>
						{matches ? drawer : tabs}
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
};

export default TopMenu;
