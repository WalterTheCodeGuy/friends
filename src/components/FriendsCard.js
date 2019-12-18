import React from 'react';

const FriendsCard = (props) => {
    const { id, name, age, email } = props.friend;
    return (
      <div className='card'>
        <p>ID: {id}</p>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    )
}

export default FriendsCard;