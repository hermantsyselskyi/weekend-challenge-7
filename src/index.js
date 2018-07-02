import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './redux/reducers/feedback.reducer';

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


const storeInstance = createStore(
    reducers,
    applyMiddleware(logger)
);
 
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
