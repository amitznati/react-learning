import React from 'react';
import PropTypes from 'prop-types';

export default class ColorChanger extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: "black",
        }
        
    }
    tinycolor = require("tinycolor2");
    colorChanged= (newColor) => {
        this.setState((oldState) => {return {color: newColor}})
    }

    render(){
        var allColor = [];
        for(var i=40;i>-50;i-=10){
            allColor.push(<ColorShower key={i} color={this.tinycolor(this.state.color).lighten(i)} />)
        }
        return(
            <div>
                <ColorInput textChanged={this.textChanged} colorChanged={this.colorChanged}/>
                {allColor}
            </div>
        )
    }
}

class ColorInput extends React.Component{

    valueChanged = (e) =>{
        this.props.colorChanged(e.target.value);
    }
    render(){
        return (
            <div>
                <input onChange={this.valueChanged} type="color"/>
            </div>
        )
    }
}
class ColorShower extends React.Component{
    render(){
        return (
            <div
            
            style={{backgroundColor: this.props.color,height: 100,width: 100,display: 'inline-block'}}
            ></div>
        )
    }
}