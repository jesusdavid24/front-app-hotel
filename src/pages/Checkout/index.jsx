import { CheckoutSteps } from "../../components/CheckoutSteps";
import { Reservation } from "../../components/Reservation";

export const Checkout = () => {
  return (
    <section  className="page">
      <CheckoutSteps />
      <Reservation />
    </section>
  );
};

