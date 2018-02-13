import React from 'react';
import PropTypes from 'prop-types';

export default class GussingGame extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num: 0,
            currectNum: Math.floor((Math.random() * 1000)),
            message: "Please enter Numer!",
            wrongMessage: 0
        }
        this.inputChanged = this.inputChanged.bind(this);
    }
    
    inputChanged(inVal){
        console.log(this)
        if(inVal == this.state.currectNum){
            this.setState((oldSate) => {
                return {
                    message: "You Currect, try again!",
                    num: 0,
                    currectNum: Math.floor((Math.random() * 1000)),
                }
            });
        }
        else if((inVal + 500)  < this.state.currectNum){
            this.setState((oldSate) => {
                return {
                    message: "Too Small!",
                }
            });
        }
        else if((inVal - 500)  > this.state.currectNum){
            this.setState((oldSate) => {
                return {
                    message: "Too Big!",
                }
            });
        }
        else if(inVal  > this.state.currectNum){
            var mes = "";
            if(this.state.wrongMessage === 5){
                this.setState((oldSate) => {
                    return {
                        wrongMessage: 0,
                        message: "Too Small!",
                    }
                });
            }
            else{
                this.setState((oldSate) => {
                    return {
                        message: "Big!",
                        wrongMessage: oldSate.wrongMessage +1
                    }
                });
            }
            
        }

        else if(inVal  < this.state.currectNum){
            var mes = "";
            if(this.state.wrongMessage === 5){
                this.setState((oldSate) => {
                    return {
                        wrongMessage: 0,
                        message: "Too Big!",
                    }
                });
            }
            else{
                this.setState((oldSate) => {
                    return {
                        message: "Small!",
                        wrongMessage: oldSate.wrongMessage +1
                    }
                });
            }
            
        }
        
    }

    render(){
        return (
            <div>
                <GussingInput  inputChanged={this.inputChanged}/>
                <GussingMessage message={this.state.message}/>
                {/* <p>currect num: {this.state.currectNum}</p> */}
            </div>
        )
    }
}

class GussingInput extends React.Component{
    onChange = (e) => {
        this.props.inputChanged(e.target.value);
    }
    render(){
        return <div><input onChange={this.onChange} type="text"/></div>
    }
}

class GussingMessage extends React.Component{
    render(){
        return <div><p>{this.props.message}</p></div>
    }
}