

import React, {Component} from 'react';
import { connect } from 'react-redux';
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';


const mapReduxStateToProps = (reduxStore) => ({
    reduxStore 
});


class SecondPage extends Component{
    constructor(){
        super();
        this.state = {
          content: ''
        }
      }
      handleChange = (event) => {
        console.log(`in HandleChange`, event.target.value)
        this.setState({
          content: event.target.value
        })
    }

    handleSubmit = (event) => {
      console.log(this.state);
      event.preventDefault();
      this.sendToRedux(this.state);
    }

    sendToRedux(){
      const action = {type: 'CONTENT_PAGE', payload: this.state.content};
      this.props.dispatch(action);
    }


    
    render(){
        return(
            <div>
                
                <h1>How well are you understanding the content?  </h1>
                <input onChange={this.handleChange} placeholder="Rate 1 to 5" 
                        value={this.state.content} name="Rate 1 to 5"/>
                    <button onClick={this.handleSubmit}><Link to="/3">Next</Link></button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps) (SecondPage);
