import React from "react";
// class ChildComponent extends React.Component {
//     render() {

//         let { name, age, jobArray } = this.props;
//         return (
//             //code html here   
//             /**
//              * react.fragment
//              */
//             <>
//                 <div>Child Component: {name} - {age}</div>
//                 <div>
//                     {jobArray.map((item, index) => {
//                         return (<div>
//                             {item.job} - {item.salary}
//                         </div>)
//                     })}
//                 </div>
//             </>

//         )
//     }
// }
const ChildComponent = (props) => {
    let { name, age, jobArray } = props;
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
export default ChildComponent;