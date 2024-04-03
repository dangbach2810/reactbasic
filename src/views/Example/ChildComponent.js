import React from "react";
class ChildComponent extends React.Component {
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

        let { name, age } = this.props;
        return (
            //code html here   
            /**
             * react.fragment
             */
            <>
                <div>Child Component: {name} - {age}</div>
            </>

        )
    }
}
export default ChildComponent;