import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
    state = {
        arrayJob: [
            { id: 1, job: 'Developer', salary: "500" },
            { id: 2, job: 'Tester', salary: "400" },
            { id: 3, job: 'PM', salary: "1000" }
        ]
    }

    render() {
        return (
            //code html here   
            /**
             * react.fragment
             */
            <>
                <AddComponent />
                <ChildComponent jobArray={this.state.arrayJob} />
            </>
        )
    }
}
export default MyComponent;