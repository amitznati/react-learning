import React from 'react';
import _ from 'underscore';

export default class FindTheRed extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            score: 0,
            boxes: this.getBoxes(),
            message: 'Click On Red Box' 
        }
    }

    getBoxes(){
        var boxes = [];
        for(var i=0;i<10;i++){
            boxes.push(<Box key={i} color={i==0?'red':'grey'} boxClicked={this.boxClicked}/>)
        }
        return boxes;
    }

    newGame = (e) => {
        this.setState((oldState) => {
            return {
                score: 0,
                boxes: _.shuffle(oldState.boxes),
                message: 'Click On Red Box' 
            }
        })
    }

    boxClicked = (boxColor) =>{
        if(boxColor == 'red')
        {
            this.setState((oldState) => {
                return {
                    score: oldState.score +10,
                    message: 'You Correct :), again!',
                    boxes: _.shuffle(oldState.boxes)
                }
            })
        }
        else{
            this.setState((oldState) => {
                return {
                    score: oldState.score -5,
                    message: 'You Wrong :(, again!'
                }
            })
        }
    }
    render(){ 
        return(
            <div>
                <p>Your Score is: {this.state.score}</p>
                <p>{this.state.message}</p>
                <div><button onClick={this.newGame}>New Game</button></div>
                {this.state.boxes}
            </div>
        )
    }
}

class Box extends React.Component{
	onClick = (e) => {
		this.props.boxClicked(this.props.color);
    }

	render(){
        return(
            <div onClick={this.onClick} style={{
                backgroundColor: this.props.color,
                height: 100,
                width: 100,
                display: 'inline-block',
                margin: 10
            }}>

            </div>
        )
    }
}