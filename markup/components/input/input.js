import React, { PropTypes } from 'react';
import classNames from 'classnames';

class Input extends React.Component {
    render () {
        let inputClass = classNames('input', this.props.className);

        return (
            <input
                className={inputClass}
                name={this.props.name}
                defaultValue={this.props.defaultValue}
                onChange={this.props.changeHandler}
                placeholder={this.props.placeholder}
            />
        );
    }
}

export default Input;
