import React from 'react';
import PropTypes from 'prop-types';

class MultiInput extends React.Component {
    constructor(props){
      super(props);
      this.state = {globalText: "Please write text here..."};
    }
    parentChanged = (sharedText) => {
      this.setState((oldState) => {return {globalText: sharedText}})
    }
  
    render() {
      return (<div>
              <TextInput updateChangedOnParent={this.parentChanged} sharedText={this.state.globalText}/>
              <TextInput updateChangedOnParent={this.parentChanged} sharedText={this.state.globalText}/>
              <TextInput updateChangedOnParent={this.parentChanged} sharedText={this.state.globalText}/>
              <TextInput updateChangedOnParent={this.parentChanged} sharedText={this.state.globalText}/>
              </div>
            )
    }    
  }

  class TextInput extends React.Component{
    static propTypes = {sharedText: PropTypes.string}
    static defaultProps = {sharedText: "Please write text here..."}
  
    notifyChange = (e) => {
      this.props.updateChangedOnParent(e.target.value);
    }
    render() {
      return <div><input onChange={this.notifyChange} value={this.props.sharedText} type="text"/></div> 
    }
  
  }

  export default MultiInput;