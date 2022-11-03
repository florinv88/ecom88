import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { UserContext } from '../contexts/userContext'



//images and videos
import burger from '../img/burger.png'
import close from '../img/close.png'
import cart from '../img/cart.png'

const Navbar = () => {
    let navigate = useNavigate()
    const { user } = useContext(UserContext)
    const [menuClass, setMenuClass] = useState("menu_hidden")
    const [isClosed, setIsClosed] = useState(true)

    const toggle = () => {
        if (isClosed) {
            setMenuClass("menu_unhidden")

        }
        else {
            setMenuClass("menu_hidden")


        }
        setIsClosed(prevState => !prevState)
    }
    return (
        <div className="navbar-burger">
            <div className='navbar'>
                <img onClick={toggle} src={burger} alt="The photo doesn't exist!" className='navbar__burger' />
                <h3 className='navbar__hello'>Hi , {user !== null ? user.username : "there"} !  </h3>
                {user && (user.cart.length === 0 &&
                    <img onClick={() => navigate('/cart')} src={cart} alt="The cart icon doesn't exists!" />
                )}
                {user && (user.cart.length !== 0 &&
                    <div>
                        <h3>{user.cart.length}</h3>
                        <img onClick={() => navigate('/cart')} src={cart} alt="The cart icon doesn't exists!" />
                    </div>
                )}
                {user === null && <div><img onClick={() => navigate('/cart')} src={cart} alt="The cart icon doesn't exists!" /></div>}

            </div>
            <div className={menuClass}>
                <img onClick={toggle} src={close} alt="The close icon doesn't exist!" />
                <section>
                    {user === null && <Link to="/register">Register</Link>}
                    {user === null && <Link to="/login">Login</Link>}
                    {user !== null && <Link to="/profile">My Profile</Link>}
                    {user !== null && <Link to="/orders">My Orders</Link>}
                </section>
            </div>
        </div>
    )
}

export default Navbar