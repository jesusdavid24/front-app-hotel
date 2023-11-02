import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../layout/root';
import { Home } from '../pages/Home';
import { NotFound } from '../components/NotFound';
import { About } from '../components/About';
import { RoomsCategory } from '../components/RoomsCategory';

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
    ],
  },
])


