import React, {Component} from 'react';
import { connect } from 'react-redux';
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';


const mapReduxStateToProps = (reduxStore) => ({
    reduxStore 
});

class FirstPage extends Component{

    constructor(){
        super();
        this.state = {
          feeling: ''
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
      const action = {type: 'FEELING_PAGE', payload: this.state.feeling};
      this.props.dispatch(action);
    }

    
    render(){
        return(
            <div>
                <h1>How are you feeling today?</h1>
                <input onChange={this.handleChange} placeholder="Rate 1 to 5" 
                        value={this.state.feeling} name="feeling"/>
                    <button onClick={this.handleSubmit}><Link to="/2">Next</Link></button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps) (FirstPage);

