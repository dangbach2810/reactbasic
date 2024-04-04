import React from "react";

class AddComponent extends React.Component {
    state = {
        job: "",
        salary: ""
    }
    handleChangeJob = (e) => {
        this.setState({
            job: e.target.value
        })
    }
    handleChangeSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <form>
                <label htmlFor="fname">Job name:</label><br />
                <input type="text" value={this.state.job} onChange={(e) => { this.handleChangeJob(e) }} />
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