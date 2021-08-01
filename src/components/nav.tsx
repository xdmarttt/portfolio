import './nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBriefcase, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faAddressCard} from "@fortawesome/free-regular-svg-icons";


const navMenu = [
    {
        label: 'About',
        icon: faAddressCard
    },
    {
        label: 'Works',
        icon: faBriefcase
    },
    {
        label: 'Contact',
        icon: faPhone
    }
]

export const Nav = () => {
    return <div className="nav-container">
        <div className="nav-logo">
            <h4>mrtmcns</h4>
        </div>
        <div className="nav-menu">
            <ul>
                {
                    navMenu.map((menu, index) => {
                        return <li key={index}>
                            <span className="nav-icon"><FontAwesomeIcon icon={menu.icon}/></span>
                            <span className="nav-text">{menu.label}</span>
                        </li>
                    })
                }
            </ul>
        </div>
    </div>
}
