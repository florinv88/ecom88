import { useNavigate } from 'react-router-dom'


//images and components
import head2 from '../../img/head2.png'
import star from '../../img/star.png'
function ListCard({ name, price, logo, rating, nr_reviews, id }) {
    let navigate = useNavigate()
    return (
        <div className="card" onClick={() => navigate(`/product/${id}/specification`)}>
            <img src={logo} alt="The logo doesn't exist!" />
            <h3>{name}</h3>
            <h4>USD {price}</h4>
            <section className="card__feedback">
                <div className="rating">
                    <img src={star} alt="The star doesn't exist!" />
                    <h5>{rating}</h5>
                </div>
                <h5>{nr_reviews} Reviews</h5>
                <h3>...</h3>
            </section>
        </div>
    )
}

export default ListCard