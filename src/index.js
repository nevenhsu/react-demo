import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './containers/posts_index';
import PostsNew from './components/post_new';
import PostsShow from './components/posts_show';

import { ConnectedRouter } from 'connected-react-router'

import { createBrowserHistory } from 'history'

import { connectRouter, routerMiddleware } from 'connected-react-router'

const history = createBrowserHistory()
const initialState = {}

const store = createStore(
  connectRouter(history)(reducers), // new root reducer with router state
  initialState,
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      promise
    ),
  ),
)


ReactDom.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Switch>
                    <Route path="/posts/new" component={PostsNew}/>
                    <Route path="/posts/:id" component={PostsShow}/>
                    <Route path="/" component={PostsIndex}/>
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>
    , document.querySelector('.container'));

