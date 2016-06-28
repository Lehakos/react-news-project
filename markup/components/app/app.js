import React, { PropTypes } from 'react';
import ReactDOM, {render as renderDOM} from 'react-dom';
import EventEmitter from 'wolfy87-eventemitter';
import News from 'components/news/news';
import myNews from 'components/news/data/news-data';
import AddNews from 'components/add-news/add-news';

window.ee = new EventEmitter();

let itemsCounter = myNews.length;

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            news: myNews
        }
    }

    componentDidMount() {
        window.ee.on('News.add', item => {
            itemsCounter++;

            let nextNews = [{
                data: item,
                id: `news-${itemsCounter}`
            }];

            this.setState({news: nextNews.concat(this.state.news)});
        });
    }

    componentWillUnmount() {
        window.ee.off('News.add');
    }

    render() {
        return (
            <div className="app">
                <h1>Новости</h1>
                <AddNews className="app__form" />
                <News news={this.state.news} />
            </div>
        );
    }
};

renderDOM(
    <App />,
    document.getElementById('app')
);

export default App;
