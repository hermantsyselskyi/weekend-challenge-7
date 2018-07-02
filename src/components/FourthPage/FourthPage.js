import React, {Component} from 'react'
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';



class FourthPage extends Component{
    
    render(){
        return(
            <div>
                <h1>Any comments you want to leave?</h1>
                <input></input>
                <li><Link to="/5">Page 5</Link></li>
            </div>
        )
    }
}

export default FourthPage;