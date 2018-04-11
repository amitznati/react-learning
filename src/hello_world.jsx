import React from 'react';

import SWapi  from './swapi';

class HelloWorld extends React.Component {

  render() {
    return (<div>
            <h1>Hello World</h1>
            <div>
            <SWapi />
            </div>
            </div>
          )
  }    
}

export default HelloWorld;
