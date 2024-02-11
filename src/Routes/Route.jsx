import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';
import Root from '../Layout/Root';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Shared/Signup/Signup';
import About from '../Pages/About/About';
import Services from '../Pages/Services/Services';
import Contact from '../Pages/Contact/Contact';

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
    ],
  },
]);

export default router;
