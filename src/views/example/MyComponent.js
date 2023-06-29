import React from 'react';
import ChildComponentTest from './ChildComponentTest';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
    state = {
        name: "",
        price: "",
        arrayItem: [
            {id:1,name:"iphone",price:"1000"},
            {id:2,name:"samsung",price:"800"},
            {id:3,name:"xiaomi",price:"500"}
        ]
    }

    addNewItem = (item) => {
        this.setState({
            arrayItem: [...this.state.arrayItem, item]
        })
    }

    deleteItem = (item) => {
        let currentArray = this.state.arrayItem.filter(itemNew => item.id !== itemNew.id);
        this.setState({
            arrayItem: currentArray
        }) 
        console.log(item);
    }

    render(){
        return (
            <div>
                <AddComponent name={this.state.name} price ={this.state.price}  funcAdd = {this.addNewItem}/>               
                <ChildComponentTest name={"Mai Ngọc Tùng Sơn"} age ={18}  arrayItem = {this.state.arrayItem} funcDel = {this.deleteItem}/>
            </div>       
        )
    }

}
 export default MyComponent;