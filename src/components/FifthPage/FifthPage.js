import React, {Component} from 'react';
import { connect } from 'react-redux';
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

// const mapReduxStateToProps = (reduxStore) => ({
//     reduxStore 
// });

const mapReduxStateToProps = (reduxStore) => {
    return{
        reduxStore:reduxStore
    }
}


class FifthPage extends Component{
 
    componentDidMount(){
        const formData =this.props.reduxStore.feedback
        axios.post('feedback',formData)
        .then( (response ) => {
            console.log(response)
        })
    }

    
    render(){
        return(
            <div>
                
                <h1>Thanks for leaving feedback!</h1>
               
                    <button onClick={this.handleSubmit}><Link to="/">Go Home!</Link></button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(FifthPage);

                
               