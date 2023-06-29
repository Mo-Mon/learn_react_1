import React from 'react'

class AddComponent extends React.Component{
    
    state = {
        name: this.props.name,
        price: this.props.price
    }

    addProduct = (event) => {
        event.preventDefault()
        this.props.funcAdd({
            id: Math.random(),
            name: this.state.name,
            price: this.state.price
        });

        this.setState({
            name:"",
            price:""
        })
    }
    changeName = (event) => {
        console.log(event.target.value);
        this.setState({
            name: event.target.value
        })
    }

    changePrice = (event) => {
        console.log(event.target.value)
        this.setState({
            price: event.target.value
        })
    }

    render(){
        return (
            <>
                <form>
                    <label>Sản phẩm: </label>
                    <input type="text" value={this.state.name} onChange={(event) => this.changeName(event)}/>
                    <br/>
                    <label>Giá: </label> 
                    <input type="text" value={this.state.price} onChange={(event) => this.changePrice(event)}/>
                    <br/>
                    <input type = "submit" value="add" onClick={(event) => this.addProduct(event)}/>
                </form>
            </>
        )
    }
}
export default AddComponent;