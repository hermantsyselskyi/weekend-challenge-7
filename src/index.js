import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


//redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';


class Person{
    constructor(feeling, content, support, comment){
        this.feeling = feeling,
        this.content = content,
        this.support = support,
        this.comment = comment
    }
}

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

const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
);
 
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
