import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import Loader from 'react-loader-spinner';


const CreateFriend = (props) => {
    //setup useState to store date and setup initial state
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: Number,
        email: '',
    })

    //isAdding --> loader for adding a new friend
    const [isAdding, setIsAdding] = useState(false);

    //handleInputChanges
    const handleInputChanges = (event) => {
       setNewFriend({
           ...newFriend,
           [event.target.name]: event.target.value
       })
    }

    //handleSubmit --> use 'axiosWithAuth()' to post new friend inside handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault()
        setIsAdding(true)
        
        //axiosWithAuth() here to post/add new friend
        // '/friends' --> baseURL
        axiosWithAuth()
            .post('/friends', newFriend)
            .then(response => {
                console.log(response)

                //set values to empty
                setNewFriend({
                    name: '',
                    age: '',
                    email: ''
                })

                setIsAdding(false)
                //triggers re-render of parent component --> passed FriendsList as props
                props.setIsFetching(!props.isFetching)
            })
            .catch(error => {
                console.log('Failed to create a new friend', error)
            })
    }

    return(
        <div>
            <h3>Add a new friend to the family...</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type='name'
                    name='name'
                    placeholder='Name'
                    value={newFriend.name}
                    onChange={handleInputChanges}
                />
                <input 
                    type="age"
                    name='age'
                    placeholder='Age'
                    value={newFriend.age}
                    onChange={handleInputChanges}
                />
                <input 
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={newFriend.email}
                    onChange={handleInputChanges}
                />
                {isAdding && 
                    <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    />
                }
                <button className='create' type='submit'>Add new friend</button>
            </form>
                
        </div>
    )
}

export default CreateFriend;