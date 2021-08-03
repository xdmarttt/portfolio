import './header.scss';
import {profileDetails} from '../const/details';
import logo from '../assets/images/transparent-mart.png';

export const Header = () => {
    return <div className="header-container">
        <div className="header-details">
            <div>
                <h2>{profileDetails.firstName}</h2>
                <h2>{profileDetails.lastName}</h2>
            </div>
            <div>
                <p>Hi! I'm Mart a 24-year-old dev. I strive to give the best in my craft to create extra-ordinary technology for the global future. And yes, I write codes.</p>
            </div>
        </div>
        <div className="header-img-container">
            <div className="header-img"></div>
        </div>
    </div>
}