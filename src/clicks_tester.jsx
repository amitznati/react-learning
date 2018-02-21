import React from 'react';

export default class ClicksTester extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: 'לחץ מהר!',
            clicks: 0,
            color: 'green'
        }
    }

    componentWillMount(){
      // this.timer = setInterval(this.countClicks, 1000);
    }

    componentWillUnmount(){
        if(this.timer)
            clearInterval(this.timer);
    }

    countClicks = () => {
        this.setState((oldState) => {return {clicks: 0}});
        this.refreshData();
    }

    refreshData =() =>{
        var mes = this.state.clicks; 
        var col = '';
        if(this.state.clicks > 3){
            mes +=  'לא כל כך מהר...';
            col = 'red'
        }
        else {
            mes += 'מהר יותר';
            col = 'green'
            if(this.state.clicks == 0){
                this.stopCount();
            }
        }
       

        this.setState((oldState) => {return {message: mes,color: col}});
    }

    startCount = () =>{
        if(!this.timer)
            this.timer = setInterval(this.countClicks, 1000);
    }

    stopCount = () =>{
        clearInterval(this.timer);
        this.timer = false;
    }

    click = (e) => {
        this.startCount();
        this.setState((oldState) => {return {clicks: oldState.clicks +1}});
        this.refreshData();
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