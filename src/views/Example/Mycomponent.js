import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
    state = {
        arrayJob: [
            { id: 1, title: 'Developer', salary: "500" },
            { id: 2, title: 'Tester', salary: "400" },
            { id: 3, title: 'PM', salary: "1000" }
        ]
    }
    addJob = (job) => {
        // let current = this.state.arrayJob
        // current.push(job)
        this.setState({
            arrayJob: [...this.state.arrayJob, job]
        })
    }
    deleteAJob = (job) => {
        let current = this.state.arrayJob;
        current = current.filter(item => item.id !== job.id)// mỗi phần từ trong current đem ra so sánh với job.id 
        // thằng nào khác với job.id thì keep it
        this.setState({
            arrayJob: current
        });
    }
    render() {
        return (
            //code html here   
            /**
             * react.fragment
             */
            <>
                <AddComponent addJob={this.addJob} />
                <ChildComponent jobArray={this.state.arrayJob} deleteAJob={this.deleteAJob} />
            </>
        )
    }
}
export default MyComponent;