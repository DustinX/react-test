import React from 'react';

// @ts-ignore
import burgerLogo from '../../assets/images/burger-logo.png';
// @ts-ignore
import classes from './Logo.css';

const logo = (props) => (
	<div className={classes.Logo}>
		<img src={burgerLogo} alt="burger"/>
	</div>
);

export default logo;