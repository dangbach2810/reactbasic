import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
class UserDetail extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }
    }
    handleOnclickBack = () => {
        this.props.history.push('/user')
    }
    render() {
        let { user } = this.state
        let isEmptyObj = Object.keys(user).length === 0 // empty is return true
        console.log(user)
        return (
            <>
                {isEmptyObj !== null &&
                    <>
                        <div>User Detail</div>
                        <div>
                            Name {user.first_name} - {user.last_name}
                        </div>
                        <div>
                            Last name
                        </div>
                        <div>
                            Email {user.email}
                        </div>
                        <div>
                            <img src={user.avatar} alt="User Image" />
                        </div>
                        <div>
                            <button onClick={() => this.handleOnclickBack()}>Back</button>
                        </div>
                    </>
                }
            </>
        )
    }
}
export default withRouter(UserDetail);