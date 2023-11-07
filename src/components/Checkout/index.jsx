import { CardReservation } from '../CardReservation';
import { CheckoutSteps } from '../CheckoutSteps';
import './index.scss';

export const Checkout = () => {
  return (
    <section className="page">
      <CheckoutSteps />
      <div className="checkout">
        <div className="container">
          <div className="clearfix">
            <div className="cart-wrapper">
              <div className="note-block">
                <div className="row">
                  <div className="col-md-6">
                    <div className="white-block">
                      <div className="h4">Guest information</div>
                      <hr />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Name</strong> <br />
                            <span>John Doe</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Email</strong><br />
                            <span>johndoe@company.com</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Phone</strong><br />
                            <span>+122 523 352</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Zip</strong><br />
                            <span>94107</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>City</strong><br />
                            <span>San Francisco, California</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Address</strong><br />
                            <span>795 Folsom Ave, Suite 600</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Company name</strong><br />
                            <span>Your company name</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Company phone</strong><br />
                            <span>+122 333 6665</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                    <div className="col-md-6">
                      <div className="white-block">
                        <div className="h4">Reservation details</div>
                        <hr />
                        <div className="row">
                          <div className="col-md-6">
                              <div className="form-group">
                                <strong>Order no.</strong> <br />
                                <span>52522-63259226</span>
                              </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <strong>Transaction ID</strong> <br />
                              <span>2265996</span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <strong>Order date</strong> <br />
                              <span>06/30/2017</span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <strong>Shipping arrival</strong> <br />
                              <span>07/30/2017</span>
                            </div>
                          </div>
                        </div>
                        <div className="h4">Payment details</div>
                        <hr />
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <strong>Transaction time</strong> <br />
                              <span>06/30/2017 at 00:59</span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <strong>Amount</strong><br />
                              <span>$ 1259,00</span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <strong>Cart details</strong><br />
                              <span>**** **** **** 5446</span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <strong>Reservation type</strong><br />
                              <span>Luxury appartment</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <CardReservation />
          </div>
        </div>
      </div>
    </section>
  );
};

