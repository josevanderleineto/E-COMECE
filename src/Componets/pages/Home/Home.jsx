import Footer from "../../Footer/Footer";
import Menu from "../../Menu/Menu";
import Products from "../../Products/Products";
import '../Home/home.css';

const Home = () => {
   
    return (
        <div>
             <Menu />
            <h1 className="title">Home</h1>
            <Products />
            <Footer />
        </div>
    )
}

export default Home;