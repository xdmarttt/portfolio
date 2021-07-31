import './header.scss';
import {profileDetails} from '../const/details';
import logo from '../assets/images/logo.svg'

export const Header = () => {
    return <div className="header-container">
        <div className="header-details">
            <div>
                <h2>{profileDetails.firstName}</h2>
                <h2>{profileDetails.lastName}</h2>
            </div>
            <div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
        </div>
        <div className="header-img-container">
            <img src={logo} alt=""/>
        </div>
    </div>
}