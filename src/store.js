import {createStore , applyMiddleware, compose} from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';

const initialstate = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,initialstate,
    compose(
        applyMiddleware(...middleware)
    )
)

export default store;