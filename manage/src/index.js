import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import './assets/font/iconfont.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "../src/assets/font/iconfont.css"

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);

