import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


//components and pages
import BestSeller from './product/BestSeller'

//images and videos
import head2 from '../img/head2.png'
import head1 from '../img/head1.png'
import arrow from '../img/arrow.png'


const MainContent = () => {
    let navigate = useNavigate()
    const [products, setProducts] = useState(null)

    useEffect(() => {

        axios({
            method: "GET",
            withCredentials: false,
            url: "https://ecom88.herokuapp.com/getAllProducts"
        })
            .then(res => setProducts(res.data))

    }, [])





    return (
        products !== null &&
        <div className="mainContent">
            <section className="mainContent__categories">
                <h4 className="choosed">BestSeller</h4>
                <h4 onClick={() => navigate('/product_list/Headphones')}>Headphones</h4>
                <h4 onClick={() => navigate('/product_list/Mouse')}>Mouse</h4>
                <h4 onClick={() => navigate('/product_list/Laptop')}>Laptop</h4>
            </section>
            <div className="mainContent__bestSellers">
                <BestSeller
                    name={products[12].name}
                    logo={products[12].logo}
                    id={products[12]._id}
                />
                <div className="mainContent__bestSellers__bestSeller hidden">
                    <div className="mainContent__bestSellers__bestSeller__text hidden">
                        <h2 className="hidden">White SteelGaus 220X</h2>
                        <div >
                            <h4>
                                Shop now
                            </h4>
                            <img src={arrow} alt="The arrow doesn't exist!" />
                        </div>
                    </div>
                    <div className="mainContent__bestSellers__bestSeller__logo hidden">
                        <img src={head1} alt="The logo doesn't exist!" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainContent