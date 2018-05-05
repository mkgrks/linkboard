import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Button, Icon, Image, Reveal } from 'semantic-ui-react'
import UserBubble from '../UserBubble/UserBubble';

class AuthComponent extends Component {
		constructor(props) {
				super(props);

				this.state = {
						loading: false,
						user: false,
						picture: undefined,
						popup: false,
				}

				this.loginSuccess = this.loginSuccess.bind(this);
				this.loginFailure = this.loginFailure.bind(this);
				this.handleLoginBtn = this.handleLoginBtn.bind(this);
				this.logoutSuccess = this.logoutSuccess.bind(this);
		}

		loginFailure(r) {
				// const { loadHandler } = this.props;

				// loadHandler(false);
				this.setState({
						loading: false,
				})
		}

		loginSuccess(r) {
				debugger;
				const { userLogin } = this.props;

				userLogin(r);
				this.setState({
						loading: false,
						user: true,
						picture: r.profileObj.imageUrl
				})
		}

		logoutSuccess(r) {
				this.setState({
						loading: false,
						user: false,
				})
		}

		handleLoginBtn(r) {
				this.setState({
						loading: true,
				})
		}

		render() {
				const { loading, user, picture, popup } = this.state;

				return (
						<div className='AuthComponent'>
								{
										user ?
											<div>
												<GoogleLogout
														className='right white no-border no-outline'
														buttonText=''
														onLogoutSuccess={this.logoutSuccess}>
														<Image src={picture} className='pointer' rounded size='mini' />
												</GoogleLogout>
												{/* <UserBubble open={popup} /> */}
											</div>
												:
												<GoogleLogin
														className='right white no-border no-outline'
														buttonText=''
														clientId='1034286924134-8dls6589qpjbtsvn1ga1cbept7j5ksis.apps.googleusercontent.com'
														onSuccess={this.loginSuccess}
														onFailure={this.loginFailure}>
														<Button
																icon
																className='no-radius'
																size='medium'
																loading={loading}
																{...(!loading ? { labelPosition: 'right' } : '')}
																onClick={this.handleLoginBtn}>
																{!loading ? 'Sign in' : ''}
																<Icon name={!loading ? 'google' : ''} color='red' />
														</Button>
												</GoogleLogin>
								}
						</div>
				);
		}
}

export default connect(state => state, actions)(AuthComponent);
