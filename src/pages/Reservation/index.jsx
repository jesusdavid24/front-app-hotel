import { CardReservation } from '../../components/CardReservation';
import { CheckoutSteps } from '../../components/CheckoutSteps';
import './index.scss';

export const Reservation = () => {
  return (
    <section className="page">
    <CheckoutSteps />
    <div className="checkout">
      <div className="container">
        <div className="clearfix">
          <CardReservation />
        </div>
      </div>
    </div>
  </section>
  );
};
