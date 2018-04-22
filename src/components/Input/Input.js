import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Input.css';
import { urlPasted } from '../../store/actions/urlActions';

class Input extends Component {
    constructor (props) {
        super(props);

        this.state = {
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handlePaste = this.handlePaste.bind(this);
    }

    handleChange (event) {
        this.setState({ value: event.target.value });
    }

    handlePaste () {
        setTimeout(function () { this.props.urlHandler(this.state.value) }.bind(this), 0);
    }

    render () {
        const { value } = this.state;

        return (
            <div className='Input shadow sizing'>
                <input className='main-input' type='url' placeholder='Just paste your link here' value={value}  onChange={this.handleChange} onPaste={this.handlePaste} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        url: state.url,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        urlHandler: url => dispatch(urlPasted(url)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);
