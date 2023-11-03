import { CheckoutSteps } from "../../components/CheckoutSteps";
import { Reservation } from "../../components/Reservation";
import './index.scss';

export const Checkout = () => {
  return (
    <section  className="page">
      <CheckoutSteps />
      <Reservation />
    </section>
  );
};

