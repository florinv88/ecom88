import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

const UserContext = createContext()

const UserContextProvider = (props) => {

    const [user, setUser] = useState(null)

    useEffect(() => {

        if (Cookies.get("userID") !== undefined)
            axios({
                method: "POST",
                data: { userID: Cookies.get("userID") },
                withCredentials: true,
                url: "https://ecom88.herokuapp.com/getCurrentUser"

            })
                .then(res => setUser(res.data))

    }, [])

    return (
        <UserContext.Provider value={{ user }}>
            {props.children}
        </UserContext.Provider>
    )

}

export { UserContext, UserContextProvider }