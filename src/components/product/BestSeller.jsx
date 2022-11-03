import { useNavigate } from 'react-router-dom'


//images and videos
import head2 from '../../img/head2.png'
import arrow from '../../img/arrow.png'


function BestSeller({ name, logo, id }) {

    let navigate = useNavigate()

    const shopNow = () => {
        navigate(`/product/${id}/specification`)
    }

    return (
        <div className="mainContent__bestSellers__bestSeller">
            <div className="mainContent__bestSellers__bestSeller__text">
                <h2 >{name}</h2>
                <div onClick={shopNow}>
                    <h4>
                        Shop now
                    </h4>
                    <img src={arrow} alt="The arrow doesn't exist!" />
                </div>
            </div>
            <div className="mainContent__bestSellers__bestSeller__logo">
                <img src={logo} alt="The logo doesn't exist!" />
            </div>

        </div>
    )
}

export default BestSeller