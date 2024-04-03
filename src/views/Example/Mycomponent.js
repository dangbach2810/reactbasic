import React from "react";
class MyComponent extends React.Component {
    state = {
        firstName: "",
        lastName: ""
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
        console.log("click tao", this.state)
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
            </>

        )
    }
}
export default MyComponent;