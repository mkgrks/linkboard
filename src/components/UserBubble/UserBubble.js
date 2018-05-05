import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import { Button, Popup, Image, Feed, Breadcrumb } from 'semantic-ui-react';
import { fetchLoginData, userLogout } from '../../store/actions/';

class UserBubble extends Component {
	constructor(props) {
		super(props);

		this.state = {
			popupVisible: true,
		}

	}


	// BUTTONS
	handleSuggestionButton() {
		console.log('suggestion');
	}

	handleFeedbackButton() {
		console.log('feedback');
	}

	handlePopupOpen() {
		this.setState({
			popupVisible: true,
		});
	}

	handlePopupClose() {
		this.setState({
			popupVisible: false,
		});
	}

	handleLogout() {
		const { logoutHandler } = this.props;

		this.setState({
			popupVisible: false,
		});

		logoutHandler();
	}

	closeModals() {
		this.setState({
			soonModal: false,
		})
	}

	render() {
		const { user: { uid, picture, email, fullName }, loginHandler } = this.props;
		const { popupVisible } = this.state;
		const style = {
			marginTop: '50px',
		}
		return (
			<Popup
				className='no-radius no-padding no-border positioning'
				trigger={<Image src={picture} avatar size='tiny' className='pointer' />}
				style={style}
				open={popupVisible}
				onOpen={this.handlePopupOpen.bind(this)}
				onClose={this.handlePopupClose.bind(this)}
				on='click'
				hideOnScroll>
				<Feed className='small-inner-padding no-events'>
					<Feed.Event>
						<Feed.Label image={picture} />
						<Feed.Content>
							<Feed.Date className='truncate'>mkgrks@gmail.com{email}</Feed.Date>
							<Feed.Summary className=''>
								{fullName}Michail Garganourakis 
							</Feed.Summary>
						</Feed.Content>
					</Feed.Event>
				</Feed>
				<Button.Group vertical labeled icon className='fill-container'>
					<Button icon='idea' content='Have an idea?' className='no-radius white' onClick={this.handleSuggestionButton} />
					<Button icon='bug' content='Feedback' className='no-radius white' onClick={this.handleFeedbackButton} />
					<Button icon='sign out' content='Log Out' className='no-radius white' color='facebook' onClick={this.handleLogout.bind(this)} />
				</Button.Group>
			</Popup>
		);
	}
}

export default connect(state => state, actions)(UserBubble);
