import React from 'react';

import FocusChange from './focus_change';




class HelloWorld extends React.Component {

  render() {
    return (<div>
            <h1>Hello World</h1>
            <div>
            <FocusChange />
            </div>
            </div>
          )
  }    
}

export default HelloWorld;
