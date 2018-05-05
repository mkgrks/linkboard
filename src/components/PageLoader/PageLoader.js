import React from 'react';
import { connect } from 'react-redux';

import './PageLoader.css';

const PageLoader = (props) => {
	const { barHeight, barWidth, bgColor, barColor, loading } = props;

	if (loading) {
		return(
			<div className='loader' style={{height: barHeight, backgroundColor: barColor }}>
				<div className='undetermined' style={{ width: barWidth, backgroundColor: bgColor }} />
			</div>);
	} else {
		return '';
	}
};

const mapStateToProps = state => {
	return {
		loading: state.loading
	};
}

export default connect(mapStateToProps)(PageLoader);
