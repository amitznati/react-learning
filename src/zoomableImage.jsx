import React,{ Component } from 'react';
import $ from 'jquery';
import ZooMove from '../node_modules/zoomove/dist/zoomove.min.js'

export default class ZoomableImage extends Component{

    
    componentDidMount(){
        console.log($(this.refs.el));
        $(this.refs.el).ZooMove({
            image: this.props.image,
            scale: "2"
        });
    }


    render(){
        return <div className="zoo-item" ref="el"></div>
    }
}