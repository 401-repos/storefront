import productsReducer from './productsreducer';
import categoriesReducer from './categoriesReducer';
import cartReducer from './cartReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({categoriesReducer,productsReducer, cart:cartReducer});

export default allReducers;