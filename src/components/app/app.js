import Header from "../header/header";
import Promo from "../promo/promo";
import Services from "../services/services";
import First from "../first/first";
import Service from "../service/service";
import Prices from "../prices/prices";
import Footer from "../footer/footer";

function App() { 
    return (
        <div>
            <Header />
            <Promo />
            <Services />
            <First />
            <Service />
            <Prices />
            <Footer/>
        </div>
    )
}

export default App;