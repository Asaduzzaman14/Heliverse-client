
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Main = () => {
  return (
    <div>
      <div className=''>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Main;