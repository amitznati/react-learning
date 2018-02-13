import React from 'react';

export default class ShoopingList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }

    addItem = (e) => {
        var newItem = {name: this.itemname.value, qnt: this.itemqnt.value,imgUrl: this.itemimg.value};
        this.setState((oldState) => ({items: [...oldState.items,newItem] }));
    }
    render(){
        return (
            <div>
                <div className="form-group">
                    <label className="form-control" htmlFor="name">Item Name</label>
                    <input ref={(itemname) => {this.itemname = itemname;}} className="form-control" id="name" type="text"/>
                </div>
                <div>
                    <label htmlFor="img">Item Image</label>
                    <input ref={(itemimg) => {this.itemimg = itemimg;} } id="img" type="file"/>
                </div>
                <div>
                    <label htmlFor="qnt">Quantity</label>
                    <input ref={(itemqnt) => {this.itemqnt = itemqnt}} id="qnt" type="text"/>
                </div>

                <button onClick={this.addItem}>Add</button>
                <table style="width:100%">
                    <tr>
                        <th>Item Image</th>
                        <th>Item Name</th> 
                        <th>Quantity</th>
                    </tr>
                    
                </table>
                
            </div>
        )
    }
}

