

import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import FirstPage  from '../FirstPage/FirstPage';
import SecondPage   from '../SecondPage/SecondPage';
import ThirdPage   from '../ThirdPage/ThirdPage';
import FourthPage        from '../FourthPage/FourthPage';
import FifthPage  from '../FifthPage/FifthPage';



class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
          step: 1,
          fieldValues = {
              FirstPage: null,
              SecondPage: null,
              ThirdPage: null,
              FourthPage: null,
              FifthPage: null
          }
        };
      }
 
	render() {
		switch (this.state.step) {
			case 1:
				return <FirstPage />
			case 2:
				return <SecondPage />
			case 3:
				return <ThirdPage />
			case 4:
				return <FourthPage />
            case 5:
                return <FifthPage />
		}
	}
}


export default Feedback;