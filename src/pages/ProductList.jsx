import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'


//images and videos
import leftArrow from '../img/leftArrow.png'
import cart from '../img/cart.png'
import filter from '../img/filter.png'
import upArrow from '../img/upArrow.png'


import { UserContext } from '../contexts/userContext'
//components and pages
import ListCard from '../components/product/ListCard'



function ProductList() {
    let navigate = useNavigate()
    const { user } = useContext(UserContext)
    const { category } = useParams()

    //states
    const [products, setProducts] = useState(null)
    const [productsS, setProductsS] = useState(true)

    const [priceP, setPriceP] = useState(null)
    const [filterP, setFilterP] = useState('>')
    const [priceS, setPriceS] = useState(false)

    const [newP, setNewP] = useState(null)
    const [filterN, setFilterN] = useState('>')
    const [newS, setNewS] = useState(false)

    const [relevanceP, setRelevanceP] = useState(null)
    const [filterR, setFilterR] = useState('>')
    const [relevanceS, setRelevanceS] = useState(false)

    useEffect(() => {
        if (products === null)
            axios({
                method: "POST",
                data: {
                    category_product: category
                },
                withCredentials: true,
                url: "https://ecom88.herokuapp.com/getProductsByCategory"

            })
                .then(res => {
                    setProducts(res.data)
                    setPriceP(res.data)
                    setNewP(res.data)
                    setRelevanceP(res.data)
                })

    }, [])





    //Maping

    const defProducts = products && products.map(item => {
        return <ListCard
            name={item.name}
            id={item._id}
            logo={item.logo}
            price={item.price}
            rating={item.rating}
            nr_reviews={item.nr_reviews}
            key={item._id}

        />
    })
    const priceMap = priceP && priceP.map(item => {
        return <ListCard
            name={item.name}
            id={item._id}
            logo={item.logo}
            price={item.price}
            rating={item.rating}
            nr_reviews={item.nr_reviews}
            key={item._id}

        />
    })
    const newMap = newP && newP.map(item => {
        return <ListCard
            name={item.name}
            id={item._id}
            logo={item.logo}
            price={item.price}
            rating={item.rating}
            nr_reviews={item.nr_reviews}
            key={item._id}

        />
    })
    const relevanceMap = relevanceP && relevanceP.map(item => {
        return <ListCard
            name={item.name}
            id={item._id}
            logo={item.logo}
            price={item.price}
            rating={item.rating}
            nr_reviews={item.nr_reviews}
            key={item._id}

        />
    })


    //FILTER FUNCTIONS



    const filterPrice = () => {
        if (priceP !== null) {
            if (filterP === '<') {
                for (let i = 0; i < priceP.length - 1; i++) {
                    for (let j = i + 1; j < priceP.length; j++) {
                        if (priceP[i].price > priceP[j].price) {
                            let aux = priceP[i]
                            priceP[i] = priceP[j]
                            priceP[j] = aux
                        }
                    }
                }
                setFilterP('>')

            }
            else {
                for (let i = 0; i < priceP.length - 1; i++) {
                    for (let j = i + 1; j < priceP.length; j++) {
                        if (priceP[i].price < priceP[j].price) {
                            let aux = priceP[i]
                            priceP[i] = priceP[j]
                            priceP[j] = aux
                        }
                    }
                }
                setFilterP('<')

            }
            setPriceS(true)
            setNewS(false)
            setRelevanceS(false)
            setProductsS(false)
        }

    }

    const filterNewest = () => {

        if (newP !== null) {

            if (filterN === '<') {
                for (let i = 0; i < newP.length - 1; i++) {
                    for (let j = i + 1; j < newP.length; j++) {
                        if (newP[i].date > newP[j].date) {
                            let aux = newP[i]
                            newP[i] = newP[j]
                            newP[j] = aux
                        }
                    }
                }
                setFilterN('>')
            }
            else {

                for (let i = 0; i < newP.length - 1; i++) {
                    for (let j = i + 1; j < newP.length; j++) {
                        if (newP[i].date < newP[j].date) {
                            let aux = newP[i]
                            newP[i] = newP[j]
                            newP[j] = aux
                        }
                    }
                }
                setFilterN('<')
            }
            setPriceS(false)
            setNewS(true)
            setRelevanceS(false)
            setProductsS(false)
        }

    }

    const filterRelevance = () => {
        if (relevanceP !== null) {

            if (filterR === '<') {
                for (let i = 0; i < relevanceP.length - 1; i++) {
                    for (let j = i + 1; j < relevanceP.length; j++) {
                        if (relevanceP[i].rating > relevanceP[j].rating) {
                            let aux = relevanceP[i]
                            relevanceP[i] = relevanceP[j]
                            relevanceP[j] = aux
                        }
                    }
                }
                setFilterR('>')
            }
            else {

                for (let i = 0; i < relevanceP.length - 1; i++) {
                    for (let j = i + 1; j < relevanceP.length; j++) {
                        if (relevanceP[i].rating < relevanceP[j].rating) {
                            let aux = relevanceP[i]
                            relevanceP[i] = relevanceP[j]
                            relevanceP[j] = aux
                        }
                    }
                }
                setFilterR('<')
            }
            setPriceS(false)
            setNewS(false)
            setRelevanceS(true)
            setProductsS(false)
        }

    }


    return (
        products &&
        <div className="product-list">
            <section className="product-list__header">
                <img onClick={() => navigate('/')} src={leftArrow} alt="The back arrow doesn't exists!" />
                {user && (user.cart.length === 0 &&
                    <img onClick={() => navigate('/cart')} src={cart} alt="The cart icon doesn't exists!" />
                )}
                {user && (user.cart.length !== 0 &&
                    <div>
                        <h3>{user.cart.length}</h3>
                        <img onClick={() => navigate('/cart')} src={cart} alt="The cart icon doesn't exists!" />
                    </div>
                )}
                {user === null && <div> <img onClick={() => navigate('/cart')} src={cart} alt="The cart icon doesn't exists!" /></div>}
            </section>
            <section className="product-list__intro">
                <h3>{category}</h3>
                <h2>2022 COLLECTION</h2>
                <div>
                    <div className="filter">
                        <img src={filter} alt="The filter image doesn't exists!" />
                        <h5>Filter</h5>
                    </div>
                    <div className="newest" onClick={filterRelevance}>
                        <h5>Relevance</h5>
                        <img className={`${(filterR === '<' && 'rotate')}`} src={upArrow} alt="The newest image doesn't exists!" />
                    </div>
                    <div className="newest" onClick={filterNewest}>
                        <h5>Newest</h5>
                        <img className={`${(filterN === '<' && 'rotate')}`} src={upArrow} alt="The newest image doesn't exists!" />
                    </div>
                    <div className={`newest`} onClick={filterPrice}>
                        < h5 > Price</h5>
                        <img className={`${(filterP === '<' && 'rotate')}`} src={upArrow} alt="The newest image doesn't exists!" />
                    </div>
                </div >
            </section >
            <section className="product-list__cards">
                {productsS && defProducts}
                {priceS && priceMap}
                {newS && newMap}
                {relevanceS && relevanceMap}
            </section>
        </div >
    )
}

export default ProductList