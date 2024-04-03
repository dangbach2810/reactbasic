import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        arrayJob: [
            { id: 1, job: 'Developer', salary: "500$" },
            { id: 2, job: 'Tester', salary: "400$" },
            { id: 3, job: 'PM', salary: "1000$" }
        ]
    }
    handleChangeFirst = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }
    handleChangeLast = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            //code html here   
            /**
             * react.fragment
             */
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName} onChange={(e) => { this.handleChangeFirst(e) }} />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName} onChange={(e) => this.handleChangeLast(e)} />
                    <br /><br />
                    <input type="submit" value="submit" onClick={(e) => { this.handleSubmit(e) }} />
                </form>
                {this.state.arrayJob.map((item, index) => {
                    return (
                        <div>
                            {item.job} - {item.salary}
                        </div>
                    )
                })}
                <ChildComponent name={this.state.firstName} age={12} jobArray={this.state.arrayJob} />
            </>
        )
    }
}
export default MyComponent;