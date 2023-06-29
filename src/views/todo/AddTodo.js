import React from 'react'
import './ListTodo.scss';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

class AddTodo extends React.Component{
    onChangeTodoText = (event) => {
        this.setState({
            content: event.target.value
        })
    }
    state = {
        content: ""
    }
    addTodo = () => {
        if(!this.state.content){
            toast.error("phải nhập nội dung cần thêm");
            return;
        }
        this.props.addNewTodo({
            id: this.props.autoId + 1,
            title: this.state.content
        })
        toast.success("thêm mới thành công");
    }
    render(){
        return(
            <>
                <div className="add-todo">
                    <input type="text" onChange={(event) => {this.onChangeTodoText(event)}}/>
                    <button className="add" onClick={()=>{this.addTodo()}}>add</button>
                </div>
            </>
        );
    }
}

export default AddTodo; 