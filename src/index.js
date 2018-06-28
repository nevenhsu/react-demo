import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom'

import reducers from './reducers';
import PostIndex from "./components/posts_index";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDom.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route path="/" component={PostIndex}/>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));

