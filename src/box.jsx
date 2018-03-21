import React, {Component} from 'react';

export default class Box extends Component{

    constructor(props){
        super(props);

        this.state = {text: ''};
    }

    componentDidUpdate(){
        if(this.props.isSelected) {
            this.box.focus();
        }
    }

    clicked = (e) =>{
        this.props.onBoxClick(this.props.idx)
    }

    onKeyPress = (e) => {
        var val = String.fromCharCode(e.which)
        this.setState({text: val});
        this.props.onBoxClick(this.props.idx + 1);
    }
    render(){
        return(
            <div className={this.props.isSelected ? 'panel selected' : 'panel'}
                tabIndex={1}
                ref={b => this.box = b}
                onKeyPress={this.onKeyPress}
                onClick={this.clicked}
                 >
                {this.state.text}
            </div>
        )
    }

}