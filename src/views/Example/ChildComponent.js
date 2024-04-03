import React from "react";
class ChildComponent extends React.Component {
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

        let { name, age, jobArray } = this.props;
        return (
            //code html here   
            /**
             * react.fragment
             */
            <>
                <div>Child Component: {name} - {age}</div>
                <div>
                    {jobArray.map((item, index) => {
                        return (<div>
                            {item.job} - {item.salary}
                        </div>)
                    })}
                </div>
            </>

        )
    }
}
export default ChildComponent;