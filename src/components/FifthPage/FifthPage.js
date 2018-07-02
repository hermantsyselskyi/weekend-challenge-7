import React, {Component} from 'react'
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';




class FifthPage extends Component{
    
    render(){
        return(
            <div>
                <h1>Thank for leaving Feedback!</h1>
                <input></input>
                <li><Link to="/">Start all over again</Link></li>
          
            </div>
        )
    }
}

export default FifthPage;