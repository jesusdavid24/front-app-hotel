import { Loader } from '../Loader';
import './index.scss';

export const Navbar = () => {
  return (
    <div>
      <Loader />
      <header>
        <div className="container">
          <nav className="navigation-top clearfix">
            <div className="navigation-top-left">
              <a className="box" href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a className="box" href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a className="box" href="#">
                <i className="fa fa-youtube"></i>
              </a>
            </div>

            <div className="navigation-top-right">
              <a className="box" href="#">
                <i className="icon icon-star"></i>
                Special offers
              </a>
              <a className="box" href="reservation-1.html">
                <i className="icon icon-tag"></i>
                Reservations
              </a>
              <a className="box" href="#">
                <i className="icon icon-phone-handset"></i>
                (01) 252-3333
              </a>
            </div>
          </nav>

          <nav className="navigation-main clearfix">
            <div className="logo animated fadeIn mt-5">
              <a href="/">
                <img className="logo-desktop" src="/images/logo-1.png" alt="Alternate Text" />
                <img className="logo-mobile" src="/images/logo-mobile.png" alt="Alternate Text" />
              </a>
            </div>

            <div className="toggle-menu"><i className="icon icon-menu"></i></div>

            <div className="navigation-block clearfix">
              <ul className="navigation-left">
                <li>
                  <a href="index.html">Home <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></a>
                  <ul>
                    <li><a href="index.html">Home - Booking intro</a></li>
                    <li><a href="index-2.html">Home - Booking box</a></li>
                    <li><a href="index-3.html">Home - Rooms intro</a></li>
                  </ul>
                </li>

                <li>
                  <a href="#">Pages <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></a>
                  <ul>
                    <li><a href="about.html">About us</a></li>
                    <li><a href="rooms-category.html">Rooms category</a></li>
                    <li><a href="room-overview.html">Room overview</a></li>
                    <li><a href="404.html">404 Not found</a></li>
                    <li><a href="shortcodes.html">Shortcodes</a></li>
                  </ul>
                </li>

                <li>
                  <a href="#">Booking <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></a>
                  <ul>
                    <li><a href="reservation-1.html">Booking step 1</a></li>
                    <li><a href="reservation-2.html">Booking step 2</a></li>
                    <li><a href="reservation-3.html">Booking step 3</a></li>
                  </ul>
                </li>
              </ul>

              <ul className="navigation-right">
                <li>
                  <a href="facility.html">Facilities</a>
                </li>

                <li>
                  <a href="#">Blog <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></a>
                  <ul>
                    <li><a href="blog-category.html">Blog category</a></li>
                    <li><a href="blog-item.html">Blog item</a></li>
                  </ul>
                </li>

                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};


