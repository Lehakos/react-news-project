import React, { PropTypes } from 'react';
import classNames from 'classnames';

class Checkbox extends React.Component {
    render () {
        let blockClass = classNames('checkbox', this.props.className);

        return (
            <label className={blockClass}>
                <input
                    ref='input'
                    className='checkbox__input'
                    name={this.props.name}
                    type='checkbox'
                    defaultChecked={this.props.checked}
                    onChange={this.props.changeHandler}
                />
                <span className='checkbox__main'>{this.props.text}</span>
            </label>
        );
    }
}

export default Checkbox;
