import React, { Component } from 'react';
import AuthComponent from '../AuthComponent/AuthComponent';

import './NavBar.css';

const NavBar = (props) => {
	return <div className='NavBar'>
		<AuthComponent />
	</div>
}

export default NavBar;
