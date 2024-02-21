import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import WorkDay from '../WorkingDay/WorkDay';
import Menu from '../../Shared/Navbar/Menu';
import Products from '../Products/Products';
import Teams from '../Teams/Teams';
import Features from '../Features/Features';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <div>
        <Menu></Menu>
        <Banner></Banner>
        <About></About>
        <Services></Services>
        <WorkDay></WorkDay>
        <Products></Products>
        <Teams></Teams>
        <Features></Features>
        <Testimonial></Testimonial>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
