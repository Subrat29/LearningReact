import { useContext, useState } from 'react'
import { UsernameContext, PasswordContext, AgeContext, HobbyContext } from '../context/UserContexts'

function Signin() {
    const [user, setUser] = useState('')
    const [lname, setLname] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userAge, setUserAge] = useState('')
    const [userHobby, setUserHobby] = useState('')

    const { setUsername } = useContext(UsernameContext)
    const { setPassword } = useContext(PasswordContext)
    const { setAge } = useContext(AgeContext)
    const { setHobby } = useContext(HobbyContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername({ user, lname });
        setPassword({ userPassword });
        setAge({ userAge });
        setHobby({ userHobby });
    }

    return (
        <>
            <h1>Sign in</h1>
            <input
                type="text"
                placeholder='first name'
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder='last name'
                value={lname}
                onChange={(e) => setLname(e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder='password'
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder='age'
                value={userAge}
                onChange={(e) => setUserAge(e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder='hobby'
                value={userHobby}
                onChange={(e) => setUserHobby(e.target.value)}
            />
            <br />
            <button
                type="button"
                onClick={handleSubmit}
            >Submit</button>
        </>

    )
}

export default Signin
