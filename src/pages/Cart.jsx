import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import axios from 'axios'

import { UserContext } from '../contexts/userContext'
//images and videos
import leftArrow from '../img/leftArrow.png'
import rightArrow from '../img/rightArrow.png'

//components & pages
import CartList from '../components/product/CartList'

function Cart() {
    let navigate = useNavigate()
    const { user } = useContext(UserContext)


    const getPrice = () => {
        if (user) {
            let check = 0;
            for (let i = 0; i < user.cart.length; i++) check += user.cart[i].price * user.cart[i].qty
            return check;
        }
    }


    const handleCheckout = () => {
        alert("The chekout will be available soon..!")
        /*axios({
            method: "POST",
            withCredentials: false,
            data: {
                cartItems: user.cart
            },
            url: "https://ecom88.herokuapp.com/checkout"
        })
            .then(res => {
                // window.location.assign(res.data.url)
                console.log(res.data.url)
            })
*/
    }

    return (
        user !== null &&
        <div className="cart">
            <div className="cart__header">
                <img onClick={() => navigate('/')} src={leftArrow} alt="The arrow doesn t exist!" />
                <h3>Shopping Cart</h3>
            </div>

            {user.cart.length !== 0 && user.cart.map((item, index) => {
                return (<CartList id={item.id} key={index} qty={item.qty} uID={user._id} />)
            })}

            <div className="cart__empty">
                <h2>sd</h2>
            </div>
            <div className="cart__bottom">
                <div className="cart__bottom__resume">
                    <h4>Total {user !== null && user.cart.length} items </h4>
                    <h2>{`USD ${getPrice()}`}</h2>
                </div>
                <div className="cart__bottom__checkout">
                    <div onClick={handleCheckout}>
                        <h2>Procced to checkout</h2>
                        <img src={rightArrow} alt="The arrow doesn t exist!" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart