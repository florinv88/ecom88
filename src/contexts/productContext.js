import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const Context = createContext()

const ContextProvider = (props) => {

    const [product, setProduct] = useState(null)
    const [id, setId] = useState(null)

    useEffect(() => {
        if (id !== null)
            axios({
                method: "POST",
                data: {
                    product_id: id
                },
                url: "https://ecom88.herokuapp.com/getProduct",
                withCredentials: false
            })
                .then(res => setProduct(res.data))
                .catch(err => console.log(err))

    }, [id])

    const getId = (newId) => { setId(newId) }


    return (
        <Context.Provider value={{ product, getId }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }