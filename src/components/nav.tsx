import './nav.scss';
import logo from '../assets/images/logo.svg'

export const Nav = () => {
    return <div className="nav-container">
        <div className="nav-logo">
            <img src={logo} alt=""/>
        </div>
        <div className="nav-menu">
            <ul>
                <li>Home</li>
                <li>Works</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
}
