import React, { PropTypes } from 'react';
import classNames from 'classnames';

class Textarea extends React.Component {
    render () {
        let inputClass = classNames('textarea', this.props.className);

        return (
            <textarea
                className={inputClass}
                name={this.props.name}
                defaultValue={this.props.defaultValue}
                onChange={this.props.changeHandler}
                placeholder={this.props.placeholder}
            />
        );
    }
}

export default Textarea;
