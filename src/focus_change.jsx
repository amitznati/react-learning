import React from 'react';

export default class FocusChange extends React.Component{

    constructor(props){
        super(props);

    };

    render(){
        return(
            <div>
                <BoxesRow />
            </div>
        )
    }

}

class BoxesRow extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            clickedText: '',
            selectedIndex: 0,
        }
    }

    boxClicked = (key) => {
        this.setState((oldState) => {return {selectedIndex: key}});
    }

    // boxKeyPressed = (key,value) => {
    //     var newChildren = this.state.boxes.map(function(box, i) {
    //         if(key === i){
    //             box.text = value;
    //         }
    //     })

    //     this.setState((oldState) => {return {boxes: newChildren,selectedIndex: oldState.selectedIndex + 1}})

    // }

    render(){
        
        // var children = this.props.children.map(function(item, i) {
        //     var isSelected = item.props.key === this.state.selectedIndex;
        //     return React.cloneElement(item, {
        //         isSelected: isSelected,
        //         text: this.state.clickedText,
        //         key: item.props.key
        //     });
        // }, this);
        return(
            <div>
                <InputBox idx={1} isSelected={this.state.selectedIndex === 1} boxClicked={this.boxClicked} keyPressed={this.boxKeyPressed}/>
                <InputBox idx={2} isSelected={this.state.selectedIndex === 2} boxClicked={this.boxClicked} keyPressed={this.boxKeyPressed}/>
                <InputBox idx={3} isSelected={this.state.selectedIndex === 3} boxClicked={this.boxClicked} keyPressed={this.boxKeyPressed}/>
                <InputBox idx={4} isSelected={this.state.selectedIndex === 4} boxClicked={this.boxClicked} keyPressed={this.boxKeyPressed}/>
            </div>
        )
    }
}

class InputBox extends React.Component{

    clicked = (e) =>{
        this.props.boxClicked(this.props.idx)
    }

    onKeyPress = (e) => {
        var val = String.fromCharCode(e.which)
        console.log(val)
    }

    render(){
        return(
            <div tabIndex={1} onKeyPress={this.onKeyPress} onClick={this.clicked} 
            style={{
                width: 80,
                height: 80,
                textAlign: 'center',
                fontSize: 30,
                verticalAlign: 'center',
                background: this.props.isSelected ? 'rgba(0,50,50,0.5)' : 'white',
                borderColor: 'gray',
                borderWidth: 1,
                borderStyle: 'solid',
                display: 'inline-block',
                marginLeft: 10
                }}>
                {this.props.text}
            </div>
        )
    }
}