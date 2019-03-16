import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Immutable from 'immutable';

/* Import componenets */
import Map from './components/Map.jsx';
import reducers from './redux/reducers.js';

/* Import map */
import mapSource from './assets/taiwan.json';

const startState = {
    TWCounty: mapSource
};

export const initialState = Immutable.Map(startState)
export const store = createStore(reducers, startState, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <Router>
            <Route 
                path='/' 
                component={Map} />
        </Router>
    </Provider>,

    document.getElementById('app')
);
