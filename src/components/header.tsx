import {profileDetails, socialMediaList} from '../const/details';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Header = () => {
    const redirectToLink = (link: string) => {
        window.location.href = link
    }

    return <div className="header">
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
            <div className="header-img">
                <div className="social-media">
                        {
                            socialMediaList.map((socialMedia, index) => {
                                return <div className="social-media-content" key={index} onClick={() => redirectToLink(socialMedia.link)}>
                                    <FontAwesomeIcon icon={socialMedia.icon}></FontAwesomeIcon>
                                </div>
                            })
                        }
                </div>
            </div>
            <div className="header-bg-circle">
            </div>
        </div>
    </div>
}