import React, { PropTypes } from 'react';
import Article from "components/article/article";

class News extends React.Component {
    render() {
        let data = this.props.news,
            itemsTemplate;

        if (data.length) {
            itemsTemplate = data.map((item, ind) => {
                return (
                    <Article className="news__item" key={item.id} data={item.data} />
                );
            });

        } else {

            itemsTemplate = <p>К сожалению, новостей пока нет</p>;
        }

        return (
            <div className="news">
                <div className="news__list">
                    {itemsTemplate}
                </div>
                {(() => {
                    if (data.length) {
                        return <b className="news__count">Всего новостей: {data.length}</b>;
                    }
                })()}

            </div>
        );
    }
}

export default News;
