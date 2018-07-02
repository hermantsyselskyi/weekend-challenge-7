

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
          comment: ''
        }
      }
      handleChange = (event) => {
        console.log(`in HandleChange`, event.target.value)
        this.setState({
          comment: event.target.value
        })
    }

    handleSubmit = (event) => {
      console.log(this.state);
      event.preventDefault();
      this.sendToRedux(this.state);
    }

    sendToRedux(){
      const action = {type: 'COMMENT_PAGE', payload: this.state.comment};
      this.props.dispatch(action);
    }


    
    render(){
        return(
            <div>
                
                <h1>Any comments you want to leave?</h1>
                <input onChange={this.handleChange} placeholder="Comment!" 
                        value={this.state.comment} name="Comment"/>
                    <button onClick={this.handleSubmit}><Link to="/5">Next</Link></button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(FourthPage);

                
               