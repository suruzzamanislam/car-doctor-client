import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';
import Root from '../Layout/Root';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Shared/Signup/Signup';
import About from '../Pages/About/About';
import Services from '../Pages/Services/Services';
import Contact from '../Pages/Contact/Contact';
import ServiceDetails from '../Pages/ServiceDetails/ServiceDetails';
import Booking from '../Pages/Booking/Booking';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <Signup></Signup>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/services',
        element: <Services></Services>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/details/:id',
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: '/booking',
        element: (
          <PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
