import React from 'react';

export default class ClicksTester extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: 'לחץ מהר!',
            lastClick: 0,
        }
    }

    click = (e) => {
        var ts = e.timeStamp
        var interval = ts - this.state.lastClick;
        this.setState((oldState) => {return {lastClick: ts}})
        if(interval<200){
            console.log('fast');
            this.setState((oldState) => {return {message: 'לא כל כך מהר...'}});
        }
        else{
            console.log('not fast')
            this.setState((oldState) => {return {message: 'מהר יותר'}});
        }
        
    }

    render(){
        return (
            <div>
                <button onClick={this.click}>Click Fast</button>
                <p>{this.state.message}</p>
            </div>
        )
    }
}