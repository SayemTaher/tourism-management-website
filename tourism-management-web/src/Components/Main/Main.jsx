
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>
            <div className='mx-auto container'>
                <Header></Header>
                <Outlet></Outlet>  
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;