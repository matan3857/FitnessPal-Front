import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadUsers, removeUser } from '../store/user.actions'
import Swal from 'sweetalert2';


function _UsersManage(props) {
    const { user, loadUsers, removeUser } = props
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const users = await loadUsers()
        setUsers(users)
    }
    if (!user || !user.isAdmin) return (<Redirect to={'/'} />)

    const onDeleteUser = (userId, UserName, userIsAdmin) => {
        if (userIsAdmin) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'You can not delete an admin user from the system!',
            })
            return
        }
        Swal.fire({
            title: `Are you sure you want to delete the user ${UserName}?`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const response = removeUser(userId)
                if (response) {
                    Swal.fire(
                        'Deleted!',
                        'User has been deleted.',
                        'success'
                    )
                    getUsers()
                }
            }
        })
    }

    return (
        <div className="users-manage margin-top">
            <h1>Users Manage</h1>
            <table className='users'>
                <tr className='users-table-header'>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>UserName</th>
                    <th>Is Admin</th>
                    <th>Action</th>
                </tr>
                {
                    users?.length && users.map(user => (
                        <tr className='user-card' key={user._id}>
                            <th>{user._id}</th>
                            <th>{user.fullname}</th>
                            <th>{user.username}</th>
                            <th>{user.isAdmin ? 'Yes' : 'No'}</th>
                            <th>
                                <button className='danger-btn' onClick={() => { onDeleteUser(user._id, user.fullname, user.isAdmin) }}>Delete user</button>
                            </th>
                        </tr>
                    ))}
            </table>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        user: state.userModule.loggedinUser,
    };
}

const mapDispatchToProps = {
    loadUsers,
    removeUser
}

export const UsersManage = connect(mapStateToProps, mapDispatchToProps)(_UsersManage);