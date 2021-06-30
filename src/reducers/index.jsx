import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import productsReducer from './productsreducer';
import categoriesReducer from './categoriesReducer';
import cartReducer from './cartReducer';
import thunk from 'redux-thunk';
const allReducers = combineReducers({ categoriesReducer, productsReducer, cart: cartReducer });
const store = () => {
    return createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();