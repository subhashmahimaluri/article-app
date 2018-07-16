import { combineReducers } from 'redux';
import { ADD_ARTICLE } from '../actions';

function article(state=[], action) {
    switch(action.type) {
        case ADD_ARTICLE: 
            action.article.id = state.length;
            return [...state, action.article];
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    article
});

export default rootReducer;