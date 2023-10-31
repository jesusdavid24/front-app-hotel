import { Header } from '../../components/Header';
import { Booking } from '../../components/Booking';
import { Rooms } from '../../components/Rooms';
import { NearBy } from '../../components/NearBy';

export const Home = () => {
  return (
    <div>
      <Header />
      <Booking />
      <Rooms />
      <NearBy />
    </div>
  )
};

