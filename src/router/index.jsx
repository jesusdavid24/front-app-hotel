import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../layout/root';
import { Home } from '../pages/Home';
import { NotFound } from '../components/NotFound';
import { About } from '../components/About';
import { RoomsCategory } from '../components/RoomsCategory';
import { Contact } from '../components/Contact';
import { ConfirmReservation } from '../components/ConfirmReservation';
import { Checkout } from '../components/Checkout';
import { Reservation } from '../pages/Reservation';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/rooms-category',
        element: <RoomsCategory />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/reservation',
        element: <Reservation />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/confirm-reservation',
        element: <ConfirmReservation />,
      },
    ],
  },
])


