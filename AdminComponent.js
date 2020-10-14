import React from 'react'
import AdminService from './AdminService'
const axios = require('axios').default;

export default class AdminComponent extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            admins:[]
        }
    }
    componentDidMount(){
        AdminService.getAdmins().then((response) =>{
            this.setState({admins: response.data})
        });
    }
    render(){
    return (
        <div>
            <h1 className = "text-center">Admins List</h1>
            <table className = "table table-striped">
                <thead>
                    <tr>
                        <td>Admin Name</td>
                        <td>Admin Password</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.admins.map(
                            admin =>
                            <tr key = {admin.adminName}>
                                <td>  {admin.adminName}</td>
                                <td>  {admin.adminPassword}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
}

