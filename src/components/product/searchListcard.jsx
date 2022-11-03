import { useNavigate } from 'react-router-dom'

function SearchListcard({ logo, name, price, id }) {
    let navigate = useNavigate()


    return (
        <div className="searchCard" onClick={() => navigate(`/product/${id}/overview`)}>
            <img src={logo} alt="The logo doesn t exist!" />
            <div className="searchCard__info">
                <h3>{name}</h3>
                <h4>USD {price}</h4>
            </div>
        </div>
    )
}

export default SearchListcard