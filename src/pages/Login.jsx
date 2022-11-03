import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'

function Register() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate()


    const loginUser = () => {
        if (username === "" || password === "") {
            alert("Invalid Username or password")
        }
        else {

            axios({
                method: "POST",
                data: { username, password },
                withCredentials: true,
                url: "https://ecom88.herokuapp.com/loginUser"
            })
                .then(res => {
                    if (res === false) {
                        alert("Username or Password Incorrect")
                    }
                    else {
                        Cookies.set("userID", res.data.id)
                        setUsername("")
                        setPassword("")
                        navigate('/')
                        window.location.reload(true)
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
                <button onClick={loginUser}>Login</button>
                <h3 onClick={() => navigate('/register')}>Don't have an account ? Click here to register!</h3>
            </div>
        </div>
    )
}

export default Register