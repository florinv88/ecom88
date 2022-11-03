import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate()


    const registerUser = () => {
        if (username === "" || password === "") {
            alert("Invalid Username or password")
        }
        else {

            axios({
                method: "POST",
                data: { username, password },
                withCredentials: false,
                url: "https://ecom88.herokuapp.com/registerUser"
            })
                .then(res => {
                    if (res === false) {
                        alert("You can't register with this username !")
                    }
                    else {
                        setUsername("")
                        setPassword("")
                        navigate('/login')
                    }
                })

        }
    }
    return (
        <div className="register">
            <div className="register__card">
                <input
                    type="text"
                    placeholder=' Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}

                />
                <input
                    type="password"
                    placeholder=' Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={registerUser}>Register</button>
            </div>
        </div>
    )
}

export default Register