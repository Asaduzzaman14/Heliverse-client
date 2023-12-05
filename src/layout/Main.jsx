
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <div>
      <div className=''>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Main;