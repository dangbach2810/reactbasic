import React from "react";
import axios from "axios";
import './ListUsers.scss';
class ListUsers extends React.Component {
    state = {
        listuser: []
    }
    async componentDidMount() {
        let getUsers = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            listuser: getUsers && getUsers.data && getUsers.data.data ? getUsers.data.data : []
        })
    }
    render() {
        let listUsers = this.state.listuser
        return (
            <div className="list-user-container">
                <div className="title">
                    Fetch all list users
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div className="child" key={item.id}>
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        )
    }
}
export default ListUsers