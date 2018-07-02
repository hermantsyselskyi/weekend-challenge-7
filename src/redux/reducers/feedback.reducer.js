import {combineReducers} from 'redux';
const feedbackReducer = (state = {feeling: '', content: '', support: '', comment: ''}, action) => {
    console.log('In feedbackreducer');
    console.log(action.type);
    if(action.type === 'FEELING_PAGE'){
        console.log('in');
        return {...state, feeling: action.payload};
    }
    else if (action.type === 'CONTENT_PAGE'){
        console.log('in');
        return {...state, content: action.payload};        
    }
    else if (action.type === 'SUPPORT_PAGE'){
        console.log('in');
        return {...state, support: action.payload};
    }
    else if (action.type === 'COMMENT_PAGE'){
        console.log('in');        
        return {...state, comment: action.payload};            
    } else if(action.type === 'CLEAR'){
        return action.payload;
    }
    return state;
    
} 
const otherReducer = () => {
    return null;
}
export default combineReducers({
    feedbackReducer,
    otherReducer
})
