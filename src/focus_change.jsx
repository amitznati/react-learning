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
            selectedIndex: 0
        }
    }

    boxClicked = (idx) => {
        this.changePosition(idx,'<');
    }

    changePosition = (idx,selectedKey) => {
        this.setState((oldState) => {return {clickedText: selectedKey,selectedIndex: idx}});
    }

    render(){
        
        var children = this.props.children.map(function(item, i) {
            var isSelected = item.props.key === this.state.selectedIndex;
            return React.cloneElement(item, {
                isSelected: isSelected,
                text: this.state.clickedText,
                key: item.props.key
            });
        }, this);
        return(
            <div>
                {children  }
            </div>
        )
    }
}

class InputBox extends React.Component{

    clicked = (e) =>{
        this.props.boxClicked(this.props.idx)
    }

    onKeyPress = (e) => {
        console.log(e.target.value)
    }

    render(){
        return(
            <div onKeyPress={this.onKeyPress} onClick={this.clicked} 
            style={{
                width: 80,
                height: 80,
                textAlign: 'center',
                fontSize: 30,
                verticalAlign: 'center',
                background: this.props.isSelected ? 'grey' : 'white',
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