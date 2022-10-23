import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { navMenu } from '../const/nav';

export const Nav = () => {
    return <div className="nav-container">
        <div className="nav-logo">
            <h4>mrtmcn</h4>
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
