import React from 'react';
import PropTypes from 'prop-types';

class FullName extends React.Component{

    static propTypes = {
        name: PropTypes.string
    }

    static defaultProps = {
        name: 'Amit Znati'
    }
    render(){
        return (<p>{this.props.name}</p>)
    }
}



class Birthday extends React.Component{

    render(){
        return(<p> dfg</p>)
    }
}

class Person extends React.Component{
    static propTypes = {
        fullName: PropTypes.string
    }
    render(){
        return (<div>
            <FullName name={this.props.fullName}/>
            <Birthday />
            <Clicker />
            </div>)
    }
}

class Clicker extends React.Component{
    constructor(props){
        super(props);
        this.state = {clicks: 0};
    }

    click = (e) => {
        this.setState((oldState) => {
            return {
                clicks: oldState.clicks +1,
            }
        });
    }
    render(){
        return (<div>
            <p>You clicked {this.state.clicks} times
            <button onClick={this.click}>Click Here</button>
            </p>
            </div>)
    }

}


export default Person;