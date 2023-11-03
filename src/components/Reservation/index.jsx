import { Link } from 'react-router-dom';

export const Reservation = () => {
  return (
    <div className="checkout">
      <div className="container">
        <div className="clearfix">
          <div className="cart-wrapper">
            <div className="cart-block cart-block-header clearfix">
              <div>
                <span>Room type</span>
              </div>
              <div className="text-right">
                <span>Price</span>
              </div>
            </div>
            <div className="clearfix">
              <div className="cart-block cart-block-item clearfix">
                <div className="image">
                  <a href="room-overview.html"><img src="/images/room-4.jpg" alt="" /></a>
                </div>
                <div className="title">
                  <div className="h2"><a href="room-overview.html">Luxury appartment</a></div>
                  <p>
                    <strong>Arrival date</strong> <br /> <a href="#">(September 22, 2017)</a>
                  </p>
                  <p>
                    <strong>Guests</strong> <br />  2 Adults, 1 Child
                  </p>
                  <p>
                    <strong>Nights</strong> <br /> 7
                  </p>
                </div>
                <div className="price">
                  <span className="final h3">$ 1.998</span>
                  <span className="discount">$ 2.666</span>
                </div>
                <span className="icon icon-cross icon-delete"></span>
              </div>
            </div>
            <div className="clearfix">
              <div className="cart-block cart-block-footer clearfix">
                <div>
                  <strong>Discount 15%</strong>
                </div>
                <div>
                  <span>$ 159,00</span>
                </div>
              </div>
              <div className="cart-block cart-block-footer clearfix">
                <div>
                  <strong>TAX</strong>
                </div>
                <div>
                  <span>$ 59,00</span>
                </div>
              </div>
            </div>
            <div className="clearfix">
              <div className="cart-block cart-block-footer cart-block-footer-price clearfix">
                <div>
                  <span className="checkbox">
                    <input type="checkbox" id="couponCodeID" />
                    <label htmlFor="couponCodeID">Promo code</label>
                    <input type="text" className="form-control form-coupon" value="" placeholder="Enter your coupon code" />
                  </span>
                </div>
                <div>
                  <div className="h2 title">$ 1259,00</div>
                </div>
              </div>
            </div>
            <div className="clearfix">
              <div className="cart-block cart-block-footer cart-block-footer-price clearfix">
                <div>
                  <a href="#" className="btn btn-clean-dark">Change</a>
                </div>
                <div>
                  <Link to="/confirm-reservation" className="btn btn-main">Reservation <span className="icon icon-chevron-right"></span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
