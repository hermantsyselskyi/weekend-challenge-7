

import React, {Component} from 'react';
import { connect } from 'react-redux';
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';


const mapReduxStateToProps = (reduxStore) => ({
    reduxStore 
});


class FifthPage extends Component{
 

    
    render(){
        return(
            <div>
                
                <h1>Thanks for leaving feedback!</h1>
               
                    <button onClick={this.handleSubmit}><Link to="/">Go Home!</Link></button>
            </div>
        )
    }
}

export default FifthPage;

                
               