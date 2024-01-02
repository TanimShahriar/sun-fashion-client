
import { Outlet } from 'react-router-dom';

import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import Footer2 from '../Pages/Shared/Footer/Footer2';

const Main = () => {

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Footer2></Footer2>
    </div>
  );
};

export default Main;