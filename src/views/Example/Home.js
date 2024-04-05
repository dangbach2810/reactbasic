import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Color from "./RandomColor";
class Home extends React.Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push("/todo")
    //     }, 3000)
    // }
    render() {

        return (
            <div>
                <h1>Welcome to the home page!</h1>
            </div>
        )
    }
}
export default Color(Home) //HOC :high order component