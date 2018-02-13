import React from 'react';
import update from 'immutability-helper';

export default class ShoopingList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items: [],
            imgSrc: ""
        }
    }

    deleteItem = (index) =>{
        this.setState(prevState => ({
            items: update(prevState.items, {$splice: [[index, 1]]})
        }))
    }

    updateBought = (count,index) => {
        var newItems = this.state.items.slice();
        var item = newItems[index];
        item.qnt-= count;
        this.setState((oldState) => ({
            items: newItems
        }));

    }

    onImgChange = (e) => {
        var file = this.itemimg.files[0];
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            this.setState({
                imgSrc: reader.result
            })
          }.bind(this);
    }

    addItem = (e) => {
        console.log(this.state.counter)
        var newItem = { 
            name: this.itemname.value,
            qnt: this.itemqnt.value, 
            img_url: this.state.imgSrc 
        }
        this.setState((oldState) => ({items: [...oldState.items,newItem],imgSrc: ''}));
        this.itemimg.value = '';
        this.itemname.value = '';
        this.itemqnt.value = '';
        
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
                    <input accept=".jpg,.png" ref={(itemimg) => {this.itemimg = itemimg;} } onChange={this.onImgChange} id="img" type="file"/>
                </div>
                <div>
                    <label htmlFor="qnt">Quantity</label>
                    <input ref={(itemqnt) => {this.itemqnt = itemqnt}} id="qnt" type="text"/>
                </div>

                <button onClick={this.addItem}>Add</button>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Bought</th>
                            <th>Bought Submit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.items.map((item,idx) =>(
                            <ItemRow updateBought={this.updateBought} deleteItem={this.deleteItem} index={idx} key={idx} name={item.name} qnt={item.qnt} img_url={item.img_url} />
                        ))}
                    </tbody>
                </table>
                
            </div>
        )
    }
}

class ItemRow extends React.Component{

    bought = (e) => {
        this.props.updateBought(this.bought_count.value,this.props.index);
        this.bought_count.value = '';
    }
    deleteItem = (e) =>{
        this.props.deleteItem(this.props.index);
    } 
    render(){
        return(
            <tr>
                <td><img style={{width: 50,height: 50}} src={this.props.img_url} /></td>
                <td>{this.props.name}</td>
                <td>{this.props.qnt}</td>
                <td><input min="0" ref={(bought_count) => {this.bought_count = bought_count}} type="number"/></td>
                <td><button onClick={this.bought}>Bought Submit</button></td>
                <td><button onClick={this.deleteItem}>Delete</button></td>
            </tr>
        )
    }
}

