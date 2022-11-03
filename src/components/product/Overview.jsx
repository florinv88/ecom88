import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import { Context } from '../../contexts/productContext'
import { UserContext } from '../../contexts/userContext'

function Overview() {
    const { product } = useContext(Context)
    const { user } = useContext(UserContext)
    let navigate = useNavigate()
    const { id } = useParams()

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

        <div className="overview">
            <div className="overview__Images">
                <img src={product.logo} alt="" />
            </div>

            <div className="overview__empty">
                <h2>sd</h2>
            </div>
            <div className="overview__Cart hidden">
                <div onClick={addProduct}>
                    <h4>Add to Cart</h4>
                </div>
            </div>
        </div>
    )
}

export default Overview