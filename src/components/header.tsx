import './header.scss';
import {profileDetails} from '../const/details';

export const Header = () => {
    return <div className="header-container">
        <div>
            <div>
                <h2>{profileDetails.firstName}</h2>
                <h2>{profileDetails.lastName}</h2>
            </div>
            <div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
        </div>
        <div></div>
    </div>
}