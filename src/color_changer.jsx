import React from 'react';
import PropTypes from 'prop-types';

export default class ColorChanger extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: "black",
            contect: "sdfsdfs"
        }
    }

    colorChanged= (newColor) => {
        this.setState((oldState) => {return {color: newColor}})
    }

    textChanged = (newText) => {
        this.setState((oldState) => {return {contect: newText}})
    }


    render(){
        return(
            <div>
                <ColorInput textChanged={this.textChanged} colorChanged={this.colorChanged}/>
                <ColorShower contect={this.state.contect} color={this.state.color}/>
            </div>
        )
    }
}

class ColorInput extends React.Component{

    valueChanged = (e) =>{
        this.props.colorChanged(e.target.value);
    }

    textChanged = (e) => {
        this.props.textChanged(e.target.value)
    }
    render(){
        return (
        <div>
            <input onChange={this.valueChanged} type="color"/>
            <input onChange={this.textChanged} type="text"/>
            </div>)
    }
}
class ColorShower extends React.Component{
    render(){
        return <div style={{backgroundColor: this.props.color,height: 500,width: 500}}>{this.props.contect}</div>
    }
}