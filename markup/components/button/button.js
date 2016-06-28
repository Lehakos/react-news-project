import React, { PropTypes } from 'react';
import classNames from 'classnames';

class button extends React.Component {
    render () {
        let btnClass = classNames('button', this.props.className);

        return (
            <button
                className={btnClass}
                onClick={this.props.clickHandler}
                disabled={this.props.disabled}
            >
                {this.props.text}
            </button>
        );
    }
}

export default button;
