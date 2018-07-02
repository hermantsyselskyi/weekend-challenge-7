

import React, {Component} from 'react';
import { connect } from 'react-redux';
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';


const mapReduxStateToProps = (reduxStore) => ({
    reduxStore 
});


class ThirdPage extends Component{
    constructor(){
        super();
        this.state = {
          support: ''
        }
      }
      handleChange = (event) => {
        console.log(`in HandleChange`, event.target.value)
        this.setState({
          support: event.target.value
        })
    }

    handleSubmit = (event) => {
      console.log(this.state);
      event.preventDefault();
      this.sendToRedux(this.state);
    }

    sendToRedux(){
      const action = {type: 'SUPPORT_PAGE', payload: this.state.support};
      this.props.dispatch(action);
    }


    
    render(){
        return(
            <div>
                
                <h1>How well are you being supported? </h1>
                <input onChange={this.handleChange} placeholder="Rate 1 to 5" 
                        value={this.state.support} name="Rate 1 to 5"/>
                    <button onClick={this.handleSubmit}><Link to="/4">Next</Link></button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(ThirdPage);
