import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            clicks: 0
        }
    }
    render() {
        return (
            <h1 onClick={this.updateClicks}> Welecome to {this.props.title} {this.props.year}  -({this.state.clicks})</h1>
        )
    }
   

    updateClicks = () => {
        this.setState({
            clicks: this.state.clicks + 1
        })
    }
}
Welcome.propTypes  = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number
}
Welcome.defaultProps = {
    year: 2021
}   
export default Welcome;