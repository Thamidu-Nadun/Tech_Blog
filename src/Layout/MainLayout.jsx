import {Outlet} from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';

export default function MainLayout () {
  return (
    <div className="overflow-x-hidden relative scroll-smooth">
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
