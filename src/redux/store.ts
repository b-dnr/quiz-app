import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducer';

const middlewares = [];

export function configureStore(initialState = {}){
    const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

    const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middlewares)));
    return store;
}