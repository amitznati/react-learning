import React from 'react';

export default class ClicksTester extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: 'לחץ מהר!',
            lastClick: 0,
            color: 'green'
        }
    }

    click = (e) => {
        var ts = e.timeStamp
        var interval = ts - this.state.lastClick;
        this.setState((oldState) => {return {lastClick: ts}});
        var mes = ''; 
        var col = '';
        if(interval<200){
            mes = 'לא כל כך מהר...';
            col = 'red'
        }
        else{
            mes = 'מהר יותר';
            col = 'green'
        }
        this.setState((oldState) => {return {message: mes,color: col}});
    }

    render(){
        return (
            <div>
                <button onClick={this.click}>Click Fast</button>
                <p>{this.state.message}</p>
                <ClicksColor color={this.state.color}/>            
            </div>
        )
    }
}

class ClicksColor extends React.Component{

    render(){
        return(
            <div style={{background: this.props.color,width: 100,height: 100}}></div>
        )
    }
}