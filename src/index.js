import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './containers/posts_index';
import PostsNew from './components/post_new';
import PostsShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDom.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/posts/new" component={PostsNew}/>
                    <Route path="/posts/:id" component={PostsShow}/>
                    <Route path="/" component={PostsIndex}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));

