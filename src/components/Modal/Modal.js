import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUrlInfo } from '../../functions/utils';

import './Modal.css';

class Modal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
		}
	}
	componentWillReceiveProps(nextProps) {
		const { url: { value } }= nextProps;
		
		if (value) {
			this.setState({
				title:fetchUrlInfo(value),
			});
		}
	}

	render() {
		const { url:{ value } } = this.props;
		const { title } = this.state;

		return (
			value 
				?	<div className='modal'>
						<div className='modal-window'>
							<a className='modal-close pointer'>&times;</a>
							<h2>Select boards to connect</h2>
							<h3>{title}</h3>
							<div className='modal-content'>
								<p>A CSS-only modal based on the :target pseudo-className. Hope you find it helpful.</p>
							</div>
						</div>
					</div>
				: ''
		);
	}
}

const mapStateToProps = state => {
	return {
		url: state.url,
	};
}

export default connect(mapStateToProps, null)(Modal);
