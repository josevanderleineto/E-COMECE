import Menu from "../../Menu/Menu";
import '../Home/home.css'

const Home = () => {
    return (
        <div>
             <Menu />
            <h1 className="title">Home</h1>
            <section className="produtos">
                <p>Aqui vai ser renderizado os produtos</p>
            </section>
        </div>
    )
}

export default Home;