import React from "react";
import { toast } from 'react-toastify';
class AddTodo extends React.Component {
    state = {
        title: ""
    }
    handleOnchange = (e) => {
        this.setState({ title: e.target.value })
    }
    handleOnclickAdd = () => {
        if (!this.state.title) {
            toast.error("Please enter you title")
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title
        }
        this.props.addNewTodo(todo)
        toast.success("Wow so easy")
        this.setState({
            title: ''
        })
    }
    render() {
        let title = this.state.title
        return (
            <div className="add-todo" >
                <input type="text" value={title} onChange={(e) => this.handleOnchange(e)} />
                <button className="add"
                    onClick={() => this.handleOnclickAdd()}
                >Add</button>
            </div>

        )
    }
}
export default AddTodo