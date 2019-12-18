import React, {useState, useEffect} from 'react';
import FriendsCard from './FriendsCard';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import CreateFriend from './CreateFriend';

const FriendsList = () => {
    //setup useState for store friends state/data
    const [friendsData, setFriendsData] = useState([])
    //this triggers a change in useEffect to re-fetch the data
    const [isFetching, setIsFetching] = useState(false)

    //setup useEffect --> get request to get friends from api to map over and send to 'FriendsCard'
    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(response => {
                console.log(response.data)
                setFriendsData(response.data)
            })
            .catch(error => {
                console.log('No friends data returned', error)
            })
    }, [isFetching])

    return(
        <div>
            <CreateFriend isFetching={isFetching} setIsFetching={setIsFetching} />
            <div className='cardWrapper'>
              <div className='cardContainer'>
                {friendsData.map(friend => {
                  return <FriendsCard key={friend.id} friend={friend}  />
                })}
              </div>
            </div>
        </div>
    )
}

export default FriendsList;