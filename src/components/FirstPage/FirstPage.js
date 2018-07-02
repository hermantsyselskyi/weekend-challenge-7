import React, {Component} from 'react'
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';
class FirstPage extends Component{
    
    render(){
        return(
            <div>
                <h1>How are you feeling today?</h1>
                <input></input>
                <li><Link to="/2">Page 2</Link></li>
            </div>
        )
    }
}

export default FirstPage;