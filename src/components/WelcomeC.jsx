import { useNavigate } from 'react-router-dom'

//images and videos
import search from '../img/search.png'


const WelcomeC = () => {
    let navigate = useNavigate()
    return (
        <div className="welcomeC">
            <h4 className="welcomeC__name">Hi , Florin</h4>
            <div className="welcomeC__container">
                <h2>What are you looking for today ?</h2>
                <div onClick={() => navigate('/search')} className="welcomeC__container__input">
                    <img src={search} alt="The logo doesn't exist!" className="welcomeC__container__input__search" />
                    <div> Search a product</div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeC