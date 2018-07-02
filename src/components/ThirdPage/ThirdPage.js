import React, {Component} from 'react'
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';




class ThirdPage extends Component{
    
    render(){
        return(
            <div>
                <h1>How well are you being supported? </h1>
                <input></input>
                <li><Link to="/4">Page 4</Link></li>
           

            </div>
        )
    }
}

export default ThirdPage;