import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push("/todo")
        }, 3000)
    }
    render() {
        return (
            <div>
                <h1>Welcome to the home page!</h1>
            </div>
        )
    }
}
export default withRouter(Home) //HOC :high order component