import { useEffect, useState } from 'react'
import axios from 'axios'

//images 
import head1 from '../../img/head1.png'
import deleteP from '../../img/deleteP.png'



function CartList({ id, qty, uID }) {

    const [product, setProduct] = useState(null)


    useEffect(() => {
        axios({
            method: "POST",
            data: {
                product_id: id
            },
            url: "https://ecom88.herokuapp.com/getProduct",
            withCredentials: false
        })
            .then(res => setProduct(res.data))

    }, [])


    const deleteProduct = () => {
        axios({
            method: "POST",
            data: { uID, id },
            withCredentials: true,
            url: "http://localhost:3001/deleteProduct"
        })
            .then(res => {
                if (res.data === false) {
                    alert("Smth got wrong..please try again!")
                }
                else {
                    window.location.reload(true)
                }
            })
    }

    return (
        product !== null &&
        <div className="cartlist">
            <img src={product.logo} alt="The logo doesn't exists!" />
            <div className="cartlist__info">
                <h3>{product.name}</h3>
                <h4>USD {product.price}</h4>
                <div>
                    <h4>Qty {qty}</h4>
                    <img onClick={deleteProduct} src={deleteP} alt="The delete icon doesn't exist!" />
                </div>
            </div>
        </div>
    )
}

export default CartList