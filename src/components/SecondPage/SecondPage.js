import React, {Component} from 'react'
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';




class SecondPage extends Component{
    
    render(){
        return(
            <div>
                
                <h1>How well are you understanding the content?  </h1>
                <input></input>
                <li><Link to="/3">Page 3</Link></li>
            

            </div>
        )
    }
}

export default SecondPage;