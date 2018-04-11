import React,{Component} from 'react';
import Box from './box';

export default class BoxRow extends Component{

    constructor(props){
        super(props);

        this.state = {selectedBoxIdx: 0}
    }

    onBoxClick = (idx) => {
        var index = idx >= this.props.boxesCount ? 0 : idx;
        this.setState({selectedBoxIdx: index});
    }

    getBoxes = () =>{
        var boxes = [];
        for(var i=0;i<this.props.boxesCount;i++){
            boxes.push(<Box idx={i} key={i} isSelected={i==this.state.selectedBoxIdx} onBoxClick={this.onBoxClick}/>)
        }

        return boxes;
    }

    render(){
        return(
            <div>
                {this.getBoxes()}
            </div>
        )
    }
}