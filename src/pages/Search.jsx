import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


//images and videos
import leftArrow from '../img/leftArrow.png'
import search from '../img/search.png'

//components and pages
import CartList from '../components/product/CartList'
import SearchListcard from '../components/product/searchListcard'


function Search() {
    let navigate = useNavigate()
    const [products, setProducts] = useState(null)
    const [searchS, setSearch] = useState("")


    useEffect(() => {

        axios({
            method: "GET",
            withCredentials: true,
            url: "https://ecom88.herokuapp.com/getAllProducts"
        })
            .then(res => setProducts(res.data))

    }, [])

    const foundProducts = searchS === "" ? null : products.map((item, index) => {
        const name = item.name.toUpperCase()
        if (name.includes(searchS.toUpperCase()) === true) {
            return (
                <SearchListcard
                    key={index}
                    name={item.name}
                    id={item._id}
                    price={item.price}
                    logo={item.logo}
                />
            )
        }

    })



    return (
        <div className="search">
            <div className="search__header">
                <img onClick={() => navigate('/')} src={leftArrow} alt="The arrow doesn't exists!" />
                <h3>Search</h3>
            </div>
            <div className="search__input">
                <div>
                    <img src={search} alt="The search icon doesn't exists!" />
                    <input
                        type="text"
                        placeholder=' Search product'
                        value={searchS}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
            {foundProducts}
        </div>
    )
}

export default Search