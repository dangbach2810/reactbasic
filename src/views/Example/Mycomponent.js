import React from "react";
class MyComponent extends React.Component {
    state = {
        name: "BachDang",
        channel: "Bachcoder"
    }
    handleOnchangeName = (e) => {
        this.setState({ name: e.target.value })
    }
    render() {
        return (
            //code html here   
            /**
             * react.fragment
             */
            <>
                <div className="first">

                    My channel {this.state.channel}</div>
                <div className="my-component">
                    <input value={this.state.name} type="text" onChange={(e) => this.handleOnchangeName(e)} />
                    Hello My Component. My name is {this.state.name}
                </div>
            </>

        )
    }
}
export default MyComponent;