import { Header } from "../src/components/header";
import { Nav } from "../src/components/nav";

export const Home = () => {
  return (
    <div className="home-container">
      <Nav />
      <Header />
    </div>
  );
};

export default Home;
