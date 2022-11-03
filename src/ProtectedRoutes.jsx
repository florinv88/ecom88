import { Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'

import Login from './pages/Login'
import App from './App';



function CartProtected() {
    const isAuth = Cookies.get("userID");
    return (
        isAuth ? <Outlet /> : <Login />
    )
}

function LoginProtected() {
    const isAuth = Cookies.get("userID");
    return (
        !isAuth ? <Outlet /> : <App />
    )

}

export { CartProtected, LoginProtected }