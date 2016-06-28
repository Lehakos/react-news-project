import React, { PropTypes } from 'react';
import ReactDOM, {findDOMNode} from 'react-dom';
import classNames from 'classnames';
import Input from 'components/input/input';
import Button from 'components/button/button';
import Textarea from 'components/textarea/textarea';
import Checkbox from 'components/checkbox/checkbox';

class AddNews extends React.Component {
    constructor () {
        super();

        this.state = {
            authorIsEmpty: true,
            messageIsEmpty: true,
            agreeNotChecked: true,
            disabled: true
        }

        this.addNews = this.addNews.bind(this);
        this.checkDisableState = this.checkDisableState.bind(this);
        this.validate = this.validate.bind(this);
    }

    checkDisableState() {
        let disabled = false;

        if (this.state.authorIsEmpty ||
            this.state.messageIsEmpty ||
            this.state.agreeNotChecked) {

            disabled = true;
        }

        if (this.state.disabled === disabled) {
            return;
        }

        this.setState({
            disabled: disabled
        });
    }

    validate(field) {
        let fieldName = field.name,
            value = field.value.trim(),
            validationState,
            notValid = true;

        switch (fieldName) {
            case 'author':
                validationState = 'authorIsEmpty';
                break;

            case 'message':
                validationState = 'messageIsEmpty';
                break;

            case 'rules':
                validationState = 'agreeNotChecked';
                break;
        }

        if (field.type === 'checkbox') {
            notValid = !field.checked;
        } else {
            if (value.length > 0) {
                notValid = false;
            }
        }

        if (this.state[validationState] === notValid) {
            return;
        }

        this.setState({ [validationState]: notValid }, this.checkDisableState);
    }

    addNews(e) {
        e.preventDefault();

        let authorField = findDOMNode(this.refs.author),
            textField = findDOMNode(this.refs.message);

        var item = {
            author: authorField.value,
            text: textField.value,
            bigText: '...'
        };

        window.ee.emit('News.add', item);

        textField.value = '';
        this.validate(textField);
    }

    render () {
        let blockClass = classNames('add-news', this.props.className),
            buttonClass = classNames(
                {'button_disabled': this.state.disabled},
                'add-news__btn');

        let changeHandler = e => {
            this.validate(e.target);
        };

        return(
            <form className={blockClass}>
                <div className='add-news__row'>
                    <Input
                        ref='author'
                        className='add-news__input'
                        name='author'
                        placeholder='Имя автора'
                        changeHandler={changeHandler}
                    />
                </div>

                <div className='add-news__row'>
                    <Textarea
                        ref='message'
                        className='add-news__textarea'
                        name='message'
                        placeholder='Введите текст новости'
                        changeHandler={changeHandler}
                    />
                </div>

                <div className='add-news__row'>
                    <Checkbox
                        ref='checkrules'
                        className='add-news__checkbox'
                        name='rules'
                        checked={false}
                        text='Я согласен с правилами'
                        changeHandler={changeHandler}
                    />
                </div>

                <div className='add-news__row'>
                    <Button
                        className={buttonClass}
                        clickHandler={this.addNews}
                        text='Добавить новость'
                        disabled={this.state.disabled}
                    />
                </div>
            </form>
        );
    }
}

export default AddNews;
