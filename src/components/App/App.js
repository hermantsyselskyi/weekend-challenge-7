import React, { Component } from 'react';
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';

import FirstPage  from '../FirstPage/FirstPage';
import SecondPage   from '../SecondPage/SecondPage';
import ThirdPage   from '../ThirdPage/ThirdPage';
import FourthPage        from '../FourthPage/FourthPage';
import FifthPage  from '../FifthPage/FifthPage';


class App extends Component {
  render() {
    return (
     <Router>
       <div>
         <Route exact path="/" component = { FirstPage } />
         <Route exact path="/2" component = { SecondPage } />
         <Route exact path="/3" component = { ThirdPage } />
         <Route exact path="/4" component = { FourthPage } />
         <Route exact path="/5" component = { FifthPage } />

       </div>
     </Router>
    );
  }
}

export default App;
