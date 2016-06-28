import React, { PropTypes } from 'react';
import classNames from 'classnames';

class Article extends React.Component {
    constructor () {
        super();

        this.state = {
            visible: false
        };

        this.toggleVisible = this.toggleVisible.bind(this);
    }

    toggleVisible(e) {
        e.preventDefault();
        this.setState({ visible: !this.state.visible });
    }

    render () {
        let data = this.props.data,
            visible = this.state.visible,
            articleClass = classNames('article', this.props.className),
            bigTextClass = classNames('article__big-text', { 'article__big-text_hidden': !visible });

        return (
            <article className={articleClass}>
                <h2 className="article__author">{data.author}:</h2>
                <p className="article__text">{data.text}</p>
                <a
                    className='article__more'
                    href="javascript:void(0)"
                    onClick={this.toggleVisible}
                >
                    { visible ? 'Скрыть' : 'Подробнее' }
                </a>
                <p className={bigTextClass}>{data.bigText}</p>
            </article>
        );
    }
}

Article.propTypes = {
    data: PropTypes.shape({
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        bigText: PropTypes.string.isRequired
    })
};

export default Article;
