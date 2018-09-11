import React from 'react';

// @ts-ignore
import classes from './NavigationItems.css';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link="/" active>Burger Builder</NavigationItem>
		<NavigationItem link="/">Checkout</NavigationItem>
	</ul>
);

export default navigationItems;