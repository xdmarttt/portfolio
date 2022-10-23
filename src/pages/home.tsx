import {Header} from '../components/header';
import {Nav} from "../components/nav";
import './home.module.scss';

export const Home = () => {
    return <div className="home-container">
        <Nav />
        <Header />
    </div>
}