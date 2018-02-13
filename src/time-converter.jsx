import React from 'react';
import PropTypes from 'prop-types';

export default class TimeConverter extends React.Component{

    constructor(props){
        super(props);
        this.state = {seconds: 30}
    }

    timeCahnged = (newSeconds) => {
        this.setState((oldSate) => {return {seconds:  newSeconds}});
    }
    render()
    {
        return(
            <div>
                <SecondsConverter parentTimeCahnged={this.timeCahnged} seconds={this.state.seconds} name="Seconds" multipleBy={1}/>
                <SecondsConverter parentTimeCahnged={this.timeCahnged} seconds={this.state.seconds} name="Menuts" multipleBy={1 / 60}/>
                <SecondsConverter parentTimeCahnged={this.timeCahnged} seconds={this.state.seconds} name="Hours" multipleBy={1 /3600}/>
            </div>
        )
    }
}

class SecondsConverter extends React.Component{

    timeCahnged = (e) => {

        this.props.parentTimeCahnged((e.target.value / this.props.multipleBy));
    }
    render(){
        return (<div><label htmlFor={this.props.name}>{this.props.name}</label>
        <input type="number" 
        id={this.props.name} 
        onChange={this.timeCahnged} 
        value={(Math.round((this.props.seconds * this.props.multipleBy) * 10000) / 10000)}/>
        </div>)
    }
}
