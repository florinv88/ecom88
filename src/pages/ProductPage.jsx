import { useContext } from 'react'
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

//context
import { Context } from '../contexts/productContext'
import { UserContext } from '../contexts/userContext'


//images and videos
import cart from '../img/cart.png'
import leftArrow from '../img/leftArrow.png'
import { useEffect } from 'react'


function ProductPage() {

    let navigate = useNavigate()
    const { id } = useParams()

    const { getId } = useContext(Context)
    const { product } = useContext(Context)
    const { user } = useContext(UserContext)
    useEffect(() => {
        getId(id)

    }, [])

    const addProduct = () => {
        axios({
            method: "POST",
            data: {
                userID: user._id,
                productID: id
            },
            withCredentials: true,
            url: "https://ecom88.herokuapp.com/addProductToCart"
        })
            .then(res => {
                if (res.data === false) {
                    alert("Smth got wrong , please try again !")
                }
                else {
                    navigate('/cart')
                    window.location.reload(true)
                }
            })
    }



    return (
        product !== null &&
        <div>
            <div className="productPage">
                <div className="productPage__header">
                    <div className="productPage__header__icons">
                        <img onClick={() => navigate('/')} src={leftArrow} alt="" />
                        {user && (user.cart.length === 0 &&
                            <div><img onClick={() => navigate('/cart')} src={cart} alt="The cart icon doesn't exists!" /></div>
                        )}
                        {user && (user.cart.length !== 0 &&
                            <div>
                                <h3>{user.cart.length}</h3>
                                <img onClick={() => navigate('/cart')} src={cart} alt="The cart icon doesn't exists!" />
                            </div>
                        )}
                        {user === null && <div> <img onClick={() => navigate('/cart')} src={cart} alt="The cart icon doesn't exists!" /></div>}
                    </div>

                    <div className="productPage__intro">
                        <h4>{product.price} USD</h4>
                        <h2>{product.name}</h2>
                        <h2>{product.category}</h2>
                    </div>
                </div>

                <div className="productPage__content">
                    <section>
                        <Link to={`/product/${id}/overview`}>Overview</Link>
                        <Link to={`/product/${id}/features`}>Features</Link>
                        <Link to={`/product/${id}/specification`}>Specification</Link>
                        <h5 onClick={addProduct} className="hidden">Add to Card</h5>
                    </section>
                </div>

            </div >
            <Outlet />

        </div>
    )
}

export default ProductPage