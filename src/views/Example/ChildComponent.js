import React from "react";
import './Demo.scss';
class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnClickDelete = (item) => {
        this.props.deleteAJob(item);
    }
    render() {

        let { jobArray } = this.props;
        let { showJobs } = this.state;

        return (
            //code html here   
            /**
             * react.fragment
             */
            <>
                {showJobs === false
                    ?
                    <div><button className="btn-show"
                        onClick={() => { this.handleShowHide() }}>Show</button></div>
                    :
                    <>
                        <div className="job-lists">
                            {jobArray.map((item, index) => {
                                return (<div key={jobArray.id}>
                                    {item.title} - {item.salary} $ <span onClick={() => this.handleOnClickDelete(item)}> x </span>
                                </div>)
                            })}</div>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>

        )
    }
}

export default ChildComponent;