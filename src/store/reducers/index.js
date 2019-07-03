import { combineReducers } from 'redux';
import PostReducer from './productreducer';

const rootReducer = combineReducers({
    posts: PostReducer
})

export default rootReducer;