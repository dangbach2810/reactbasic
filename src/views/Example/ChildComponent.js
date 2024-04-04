import React from "react";
class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
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
                    <div><button onClick={() => { this.handleShowHide() }}>Show</button></div>
                    :
                    <>
                        <div className="job-lists">
                            {jobArray.map((item, index) => {
                                if (item.salary >= 500) {
                                    return (<div>
                                        {item.job} - {item.salary} $
                                    </div>)
                                }
                            })}</div>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>

        )
    }
}

export default ChildComponent;