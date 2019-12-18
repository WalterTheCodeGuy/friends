import React, { Component } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends Component {
    state = {
        credentials: {
            username: '',
            password: ''
        },
        isFetching: false
    }

    //handleInputChanges
    handleInputChanges = (event) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    //handleSubmit
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('button fired')
        this.setState({
            isFetching: true
        })

        //setup 'axiosWithAuth' for login
        // '/login' --> baseURL
        axiosWithAuth()
            .post('/login', this.state.credentials)
            .then(response => {
                console.log(response)
                localStorage.setItem('token', response.data.payload)

                //sets values to empty
                this.setState({
                    credentials: {
                        username: '',
                        password: ''
                    }
                })
                this.props.history.push('/FriendsList')
            })
            .catch(error => {
                console.log('No data returned', error)
            })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Please login!</h1>
                <form onSubmit={this.handleSubmit} >
                    <input
                        type='text'
                        name='username'
                        placeholder='Name'
                        value={this.state.credentials.username}
                        onChange={this.handleInputChanges}
                    />
                    <input
                        type='text'
                        name='password'
                        placeholder='Password'
                        value={this.state.credentials.password}
                        onChange={this.handleInputChanges}
                    />
                    <div>
                        <button className='login' type='submit'>Login to friends app</button>{this.state.isFetching && 'logging in'}
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;