import React from 'react';

class ChildComponentTest extends React.Component {
    state = {
        flagShow: false
    }
    click = (event) => {
        event.preventDefault()
        this.setState({
            flagShow: !this.state.flagShow
            }
        )
    }

    deleteItem = (item) => {
        this.props.funcDel(item);
    }

    render(){
        let {name, age, arrayItem} = this.props;
        
        return (
            <>
                <div>
                    ChildComponentTest: Tên {name} tuổi {age}
                    {
                        this.state.flagShow?
                        <div><button onClick={(event) => this.click(event)}>show</button></div>
                        :

                        <div>
                            {
                                arrayItem.map((item,index) => {
                                    return (<div key ={index}>no. {index} name {item.name} price {item.price} 
                                    &nbsp;<span onClick={() => this.deleteItem(item)}>x</span></div>)
                                })
                            }
                            <button onClick={(event) => this.click(event)}>hide</button>
                        </div>
                    }
                </div>
            </>
            
        )
    }

}
 export default ChildComponentTest;