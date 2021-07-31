import './header.scss';
import {profileDetails} from '../const/details';

export const Header = () => {
    return <div className="header-container">
        <div>
            <h2>{profileDetails.firstName}</h2>
            <h2>{profileDetails.lastName}</h2>
        </div>
        <div></div>
    </div>
}