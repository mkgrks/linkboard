import React, { Component } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Button, Icon } from 'semantic-ui-react'

import './NavBar.css';

class NavBar extends Component {
	constructor (props) {
		super(props);
		
		this.state = {
			loading: false,
		}
		this.loginSuccess = this.loginSuccess.bind(this); 
		this.loginFailure = this.loginFailure.bind(this); 
		this.handleLoginBtn = this.handleLoginBtn.bind(this); 
	}

	loginFailure (r) {
		debugger;
		this.setState({
			loading: false,
		})
	}

	loginSuccess (r) {
		debugger;
		this.setState({
			loading: false,
		})
	}

	handleLoginBtn (r) {
		this.setState({
			loading: true,
		})
	}

	render () {
		const { loading } = this.state;

		return (
			<div className='NavBar'>
					<GoogleLogin
						className='right white no-border no-outline'
						buttonText=''
						clientId='1034286924134-8dls6589qpjbtsvn1ga1cbept7j5ksis.apps.googleusercontent.com'
						onSuccess={this.loginSuccess}
						onFailure={this.loginFailure}>
							<Button icon loading={loading} labelPosition='right' onClick={this.handleLoginBtn}>
								Sign in 
								<Icon name='right google' />
							</Button>
					</GoogleLogin>

			</div>
		);
	}
}

export default NavBar;
