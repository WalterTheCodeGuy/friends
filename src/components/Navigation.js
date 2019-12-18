import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className='navigation'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/Login'}>Login</NavLink>
        <NavLink to={'/FriendsList'}>Friends</NavLink>
      </div>
    </div>
  )
}

export default Navigation;