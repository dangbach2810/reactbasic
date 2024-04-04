import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";
class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: 1, title: "Doing homework" },
            { id: 2, title: "Making Video" },
            { id: 3, title: "Fix bug" }
        ]
    }
    addNewTodo = (todo) => {
        let current = this.state.listTodos;
        current.push(todo)
        this.setState({
            listTodos: current
        })
    }
    render() {
        let listTodos = this.state.listTodos
        return (
            <div className="list-todo-container">
                <AddTodo addNewTodo={this.addNewTodo} />
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    <span>{index + 1} - {item.title}</span>
                                    <button className="edit">Edit</button>
                                    <button className="delete">Delete</button>
                                </div>
                            )

                        })}

                </div>
            </div>
        )
    }
}
export default ListTodo