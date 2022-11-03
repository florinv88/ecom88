import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


import { Context } from '../../contexts/productContext'
import { UserContext } from '../../contexts/userContext'

function Specification() {
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
                <div className="features__text__table">
                    <div className="row">
                        <div className="row__1">
                            <h4>Brand</h4>
                        </div>
                        <div className="row__2">
                            <h4>{product.tech_details.brand}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row__1">
                            <h4>Item Model</h4>
                        </div>
                        <div className="row__2">
                            <h4>{product.tech_details.item_model}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row__1">
                            <h4>Hardware</h4>
                        </div>
                        <div className="row__2">
                            <h4>{product.tech_details.hardware}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row__1">
                            <h4>Operation System</h4>
                        </div>
                        <div className="row__2">
                            <h4>{product.tech_details.op}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row__1">
                            <h4>Weight</h4>
                        </div>
                        <div className="row__2">
                            <h4>{product.tech_details.weight}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row__1">
                            <h4>Dimensions</h4>
                        </div>
                        <div className="row__2">
                            <h4>{product.tech_details.dimensions}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row__1">
                            <h4>Color</h4>
                        </div>
                        <div className="row__2">
                            <h4>{product.tech_details.color}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row__1">
                            <h4>Power</h4>
                        </div>
                        <div className="row__2">
                            <h4>{product.tech_details.power}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row__1">
                            <h4>Manufacturer</h4>
                        </div>
                        <div className="row__2">
                            <h4>{product.tech_details.manufacturer}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row__1">
                            <h4>ASIN</h4>
                        </div>
                        <div className="row__2">
                            <h4>{product.tech_details.ASIN}</h4>
                        </div>
                    </div>
                </div>
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

export default Specification