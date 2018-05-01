import React, { Component } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Button, Icon, Image } from 'semantic-ui-react'

import './NavBar.css';

class NavBar extends Component {
	constructor (props) {
		super(props);
		
		this.state = {
			loading: false,
			user: false,
			picture: undefined,
		}
		this.loginSuccess = this.loginSuccess.bind(this); 
		this.loginFailure = this.loginFailure.bind(this); 
		this.handleLoginBtn = this.handleLoginBtn.bind(this); 
		this.logoutSuccess = this.logoutSuccess.bind(this); 
	}

	loginFailure (r) {
		debugger;
		this.setState({
			loading: false,
		})
	}

	loginSuccess (r) {
		this.setState({
			loading: false,
			user: true,
			picture: r.profileObj.imageUrl
		})
	}

	logoutSuccess (r) {
		debugger;
		this.setState({
			loading: false,
			user: false,
		})
	}

	handleLoginBtn (r) {
		this.setState({
			loading: true,
		})
	}

	render () {
		const { loading, user, picture } = this.state;

		return (
			<div className='NavBar'>
				{
					user ?
						<GoogleLogout
							className='right white no-border no-outline'
							buttonText=''
							onLogoutSuccess={this.logoutSuccess}>
								<Image src={picture} className='pointer' rounded size='mini' />
						</GoogleLogout>
					:
						<GoogleLogin
							className='right white no-border no-outline'
							buttonText=''
							clientId='1034286924134-8dls6589qpjbtsvn1ga1cbept7j5ksis.apps.googleusercontent.com'
							onSuccess={this.loginSuccess}
							onFailure={this.loginFailure}>
								<Button 
									icon 
									size='medium' 
									loading={loading} 
									{...(!loading ? {labelPosition:'right'} : '')} 
									onClick={this.handleLoginBtn}>
										{!loading ? 'Sign in' : ''} 
										<Icon name='right google' />
								</Button>
						</GoogleLogin>
				}
			</div>
		);
	}
}

export default NavBar;
