import React, { Component } from 'react';

class Hint extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span id="hint">
                { this.props.county }
            </span>
        );
    }
}
export default Hint;