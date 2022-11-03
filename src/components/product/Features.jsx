import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


import { Context } from '../../contexts/productContext'
import { UserContext } from '../../contexts/userContext'


function Features() {
    const { product } = useContext(Context)
    const { user } = useContext(UserContext)
    const { id } = useParams()
    let navigate = useNavigate()
    const addProduct = () => {
        axios({
            method: "POST",
            data: {
                userID: user._id,
                productID: id
            },
            withCredentials: false,
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
        <div className="features">
            <div className="features__text">
                <h2>{product.category}</h2>
                <h4>{product.description}</h4>
            </div>
            <div className="features__empty">
                <h2>h2</h2>
            </div>
            <div className="features__Cart hidden">
                <div onClick={addProduct}>
                    <h4>Add to Cart</h4>
                </div>
            </div>
        </div>
    )
}

export default Features