import React, {useContext}from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
     if (!user) {
        return <div>please login</div>
     }else{
        <div>welcome {user.username}</div>
     }
}

export default Profile
