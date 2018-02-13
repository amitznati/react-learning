import React from 'react';
import Person from './person';
import MultiInput from './multiInput';
import TimeConverter from './time-converter';
import ShoopingList from './shooping_list';
import PropTypes from 'prop-types';



class HelloWorld extends React.Component {

  render() {
    return (<div>
            <h1>Hello World</h1>
            <div>
            <ShoopingList />
            </div>
            </div>
          )
  }    
}

export default HelloWorld;
