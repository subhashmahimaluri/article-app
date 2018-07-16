import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import App from './components/App';
import AddArticle from './components/AddArticle';
import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/add-article" component={AddArticle} />
            </Switch>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);