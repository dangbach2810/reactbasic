import React from "react";

class AddComponent extends React.Component {
    state = {
        title: "",
        salary: ""
    }
    handleChangeJob = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleChangeSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.addJob({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Job name:</label><br />
                <input type="text" value={this.state.title} onChange={(e) => { this.handleChangeJob(e) }} />
                <br />
                <label htmlFor="lname">Salary:</label><br />
                <input type="text" value={this.state.salary} onChange={(e) => this.handleChangeSalary(e)} />

                <br /><br />
                <input type="submit" value="submit" onClick={(e) => { this.handleSubmit(e) }} />
            </form>
        )
    }
}
export default AddComponent