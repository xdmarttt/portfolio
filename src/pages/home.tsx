import {Header} from '../components/header';
import {Nav} from "../components/nav";
import './home.scss';

export const HomePage = () => {
    return <div className="home-container">
        <Nav />
        <Header />
    </div>
}