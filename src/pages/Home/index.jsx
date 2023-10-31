import { Navbar } from '../../components/Navbar';
import { Header } from '../../components/Header';
import { Booking } from '../../components/Booking';
import { Rooms } from '../../components/Rooms';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Booking />
      <Rooms />
    </div>
  )
};

