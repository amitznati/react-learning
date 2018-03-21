import React from 'react';

import BoxesRow from './boxes_row';




class HelloWorld extends React.Component {

  render() {
    return (<div>
            <h1>Hello World</h1>
            <div>
            <BoxesRow boxesCount={4} />
            </div>
            </div>
          )
  }    
}

export default HelloWorld;
