import productsReducer from './productsreducer';
import categoriesReducer from './categoriesReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({categoriesReducer,productsReducer});

export default allReducers;