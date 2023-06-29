import React from 'react'
import './ListTodo.scss';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
class ListTodo extends React.Component{

    state = {
        autoId: 3,
        listTodo: [
            {id: '1',title:"title 1"},
            {id: '2',title:"title 2"},
            {id: '3',title:"title 3"}           
        ],
        selectTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            autoId: this.state.autoId + 1, 
            listTodo: [...this.state.listTodo,todo]
        })
    }

    handleEditTodo = (todo) => {
        // let {listTodo, selectTodo} = this.state;
        this.setState({
            selectTodo: todo
        });
    }

    handleChangeEditTodo = (event) => {
        this.setState({
            selectTodo: {id :this.state.selectTodo.id ,title: event.target.value}
        })
    }

    handleSaveTodo = (todo) => {
        let {listTodo, selectTodo} = this.state;
        let listTodoCopy = [...listTodo];
        let indexItem = listTodoCopy.findIndex((item => item.id === selectTodo.id));
        listTodoCopy[indexItem].title = selectTodo.title

        this.setState({
            selectTodo: {},
            listTodo: listTodoCopy
        });
        toast.success("chỉnh sửa thành công");
    }

    handleDeleteTodo = (todo) => {
        let {listTodo} = this.state;
        let listNewTodo = listTodo.filter((item) => item.id !== todo.id)
        this.setState({
            selectTodo: {},
            listTodo: listNewTodo
        });
        toast.success("xóa thành công");

    }

    render(){
        let {autoId, listTodo, selectTodo} = this.state;
        let isSelectTodo = Object.keys(selectTodo).length === 0;
        return (
            <>
            <div className="list-todo-container">

                <AddTodo autoId={autoId} addNewTodo={this.addNewTodo}/>

                <div className="list-todo-content">
                    {
                        listTodo.map((item,index) => {
                            return (<>
                                <div key ={item.id} className="list-todo-child">
                                    {
                                        (!isSelectTodo && selectTodo.id === item.id) ?
                                        <>
                                        No.&nbsp;{index}&nbsp;
                                        <input value={selectTodo.title} onChange={(event) => {this.handleChangeEditTodo(event)}}/>
                                        <button  className="save" onClick={() => {this.handleSaveTodo(item)}}>save</button>
                                        </>
                                        :
                                        <>
                                        No.&nbsp;{index}&nbsp;-{item.id} -{item.title}
                                        <button className="edit" onClick={() => {this.handleEditTodo(item)}}>edit</button>
                                        <button className="delete" onClick={() => {this.handleDeleteTodo(item)}}>delete</button>
                                        </>                                       
                                    }
                                </div>
                            </>)
                        })
                    }
                </div>
            </div>
            </>
        );
    }

} 
export default ListTodo;
