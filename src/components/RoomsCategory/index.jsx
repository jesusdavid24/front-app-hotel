//import { Loader } from '../Loader';
import '../../styles/index.scss';

export const RoomsCategory = () => {
  return (
    <div>
      {/* <Loader /> */}
      <section className="page">
        <div className="page-header" style={{ backgroundImage: 'url(/images/header-1.jpg)' }}>
          <div className="container">
            <h2 className="title">Rooms & Suites</h2>
            <p>At home while on the road. </p>
          </div>
        </div>
        <div className="rooms rooms-category">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-6">
                <div className="item">
                  <article>
                    <div className="image">
                      <img src="/images/apartment-1.jpg" alt="" />
                    </div>
                    <div className="details">
                      <div className="text">
                        <h2 className="title"><a href="room-overview.html">Presidential Suite</a></h2>
                        <p>Family room</p>
                      </div>
                      <div className="book">
                        <div>
                          <a href="room-overview.html" className="btn btn-main">Book now</a>
                        </div>
                        <div>
                          <span className="price h2">€ 299,00</span>
                          <span>per night</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="item">
                  <article>
                    <div className="image">
                      <img src="/images/apartment-2.jpg" alt="" />
                    </div>
                    <div className="details">
                      <div className="text">
                        <h2 className="title"><a href="room-overview.html">Luxury appartment</a></h2>
                        <p>Family room</p>
                      </div>
                      <div className="book">
                        <div>
                          <a href="room-overview.html" className="btn btn-main">Book now</a>
                        </div>
                        <div>
                          <span className="price h2">€ 199,00</span>
                          <span>per night</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="item">
                  <article>
                    <div className="image">
                      <img src="/images/room-1.jpg" alt="" />
                    </div>
                    <div className="details">
                      <div className="text">
                        <h2 className="title"><a href="room-overview.html">Club Room</a></h2>
                        <p>Single room</p>
                      </div>
                      <div className="book">
                        <div>
                          <a href="room-overview.html" className="btn btn-main">Book now</a>
                        </div>
                        <div>
                          <span className="price h2">€ 98,00</span>
                          <span>per night</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="item">
                  <article>
                    <div className="image">
                      <img src="/images/room-2.jpg" alt="" />
                    </div>
                    <div className="details">
                      <div className="text">
                        <h2 className="title"><a href="room-overview.html">Classic Room</a></h2>
                        <p>Double room</p>
                      </div>
                      <div className="book">
                        <div>
                          <a href="room-overview.html" className="btn btn-main">Book now</a>
                        </div>
                        <div>
                          <span className="price h2">€ 129,00</span>
                          <span>per night</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="item">
                  <article>
                    <div className="image">
                      <img src="/images/room-3.jpg" alt="" />
                    </div>
                    <div className="details">
                      <div className="text">
                        <h2 className="title"><a href="room-overview.html">Superior Room</a></h2>
                        <p>Queen size bed</p>
                      </div>
                      <div className="book">
                        <div>
                          <a href="room-overview.html" className="btn btn-main">Book now</a>
                        </div>
                        <div>
                          <span className="price h2">€ 159,00</span>
                          <span>per night</span>
                        </div>
                      </div>
                  </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

