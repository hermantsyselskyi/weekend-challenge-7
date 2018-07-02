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

let personReducer = (state = {}, action) => {
    if(action.type === 'ADD_PERSON'){
        return new Person(action.payload.feeling, action.payload.content, action.payload.support, action.payload.comment);
    }
}
const storeInstance = createStore(
    combineReducers({personReducer}),
    applyMiddleware(logger)
);
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();