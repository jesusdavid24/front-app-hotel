import './index.scss';

export const CheckoutSteps = () => {
  return (
    <div>
      <div className="page-header" style={{ backgroundImage: 'url(/images/header-1.jpg)' }}>
        <div className="container">
          <h2 className="title">Make a reservation</h2>
          <p>Proceed to booking step 2</p>
        </div>
      </div>
      <div className="step-wrapper">
        <div className="container">
          <div className="stepper">
            <ul className="row">
              <li className="col-md-4 active">
                <a href="reservation-1.html"><span data-text="Room & rates"></span></a>
              </li>
              <li className="col-md-4">
                <a href="reservation-2.html"><span data-text="Reservation"></span></a>
              </li>
              <li className="col-md-4">
                <a href="reservation-3.html"><span data-text="Checkout"></span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

