import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: 1, title: "Doing homework" },
            { id: 2, title: "Making Video" },
            { id: 3, title: "Fix bug" }
        ]
        ,
        editTodo: {}
    }
    addNewTodo = (todo) => {
        let current = this.state.listTodos;
        current.push(todo)
        this.setState({
            listTodos: current
        })
    }
    handDeleteTodo = (todo) => {
        let current = this.state.listTodos;
        current = current.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: current
        });
        toast.info("Just Delete a Todo")
    }
    handEditTodo = (todo) => {
        this.setState({
            editTodo: todo
        })
    }
    render() {
        let { listTodos, editTodo } = this.state
        console.log(editTodo)
        let isEmptyObj = Object.keys(editTodo).length === 0 // empty is return true
        console.log(isEmptyObj)
        return (
            <div className="list-todo-container">
                <AddTodo addNewTodo={this.addNewTodo} />
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    <span>{index + 1} - {item.title}</span>
                                    <button className="edit"
                                        onClick={() => this.handEditTodo(item)}
                                    >Edit</button>
                                    <button className="delete"
                                        onClick={() => {
                                            this.handDeleteTodo(item);
                                        }}
                                    >Delete</button>
                                </div>
                            )

                        })}

                </div>
            </div>
        )
    }
}
export default ListTodo