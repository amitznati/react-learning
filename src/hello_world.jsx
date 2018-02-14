import React from 'react';

import ClicksTester from './clicks_tester';




class HelloWorld extends React.Component {

  render() {
    return (<div>
            <h1>Hello World</h1>
            <div>
            <ClicksTester />
            </div>
            </div>
          )
  }    
}

export default HelloWorld;
