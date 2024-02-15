import React, { useContext } from 'react'
import { UsernameContext, PasswordContext, AgeContext, HobbyContext } from '../context/UserContexts'

function Profile() {
    const { username } = useContext(UsernameContext)
    const { password } = useContext(PasswordContext)
    const { age } = useContext(AgeContext)
    const { hobby } = useContext(HobbyContext)

    if (!username) return <div>Incorrect credentials</div>
    else
        return <div>
            Name: {username.user}<br />
            Last Name: {username.lname} <br />
            Password: { password.userPassword} <br />
            Age: { age.userAge } <br />
            Hobby: { hobby.userHobby }
        </div> //todo
}

export default Profile
