

import React, {Component} from 'react';
import { connect } from 'react-redux';
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';


const mapReduxStateToProps = (reduxStore) => ({
    reduxStore 
});


class FourthPage extends Component{
    constructor(){
        super();
        this.state = {
          content: ''
        }
      }
      handleChange = (event) => {
        console.log(`in HandleChange`, event.target.value)
        this.setState({
          feeling: event.target.value
        })
    }

    handleSubmit = (event) => {
      console.log(this.state);
      event.preventDefault();
      this.sendToRedux(this.state);
    }

    sendToRedux(){
      const action = {type: 'COMMENT_PAGE', payload: this.state.content};
      this.props.dispatch(action);
    }


    
    render(){
        return(
            <div>
                
                <h1>Thanks for leaving feedback!</h1>
                <input onChange={this.handleChange} placeholder="Rate 1 to 5" 
                        value={this.state.feeling} name="Rate 1 to 5"/>
                    <button onClick={this.handleSubmit}><Link to="/4">Next</Link></button>
            </div>
        )
    }
}

export default FourthPage;

                
               