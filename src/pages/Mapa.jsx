import mapa from '../assets/Mapateste.svg'
import Footer from '../components/footer';
import Header from '../components/header';

const Mapa = () => { 
    return ( 
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 w-full overflow-hidden">
                <img 
                    src={mapa} 
                    alt="mapa" 
                    className="w-full h-full object-cover"
                />
            </div>
            <Footer />
        </div>
    )
}

export default Mapa;  