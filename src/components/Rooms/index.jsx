import './index.scss';

export const Rooms = () => {
  return (
    <div>
      <section className="rooms rooms-widget">
        <div className="section-header">
          <div className="container">
            <h2 className="title">Rooms accommodation <a href="rooms-category.html" className="btn btn-sm btn-clean-dark">View all</a></h2>
            <p>Designed as a privileged almost private place where you&apos;ll feel right at home</p>
          </div>
        </div>

        <div className="container">
          <div className="owl-rooms owl-theme">
            <div className="item">
              <article>
                <div className="image">
                  <img src="/images/room-1.jpg" alt="" />
                </div>
                <div className="details">
                  <div className="text">
                    <h3 className="title"><a href="room-overview.html">Club Room</a></h3>
                    <p>Single room</p>
                  </div>
                  <div className="book">
                    <div>
                      <a href="room-overview.html" className="btn btn-main">Book now</a>
                    </div>
                    <div>
                      <span className="price h4">$ 98,00</span>
                      <span>per night</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>

          <div className="item">
            <article>
              <div className="image">
                <img src="/images/room-2.jpg" alt="" />
              </div>
              <div className="details">
                <div className="text">
                  <h3 className="title"><a href="room-overview.html">Classic Room</a></h3>
                  <p>Double room</p>
                </div>
                <div className="book">
                  <div>
                    <a href="room-overview.html" className="btn btn-main">Book now</a>
                  </div>
                  <div>
                    <span className="price h4">$ 129,00</span>
                    <span>per night</span>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="item">
            <article>
              <div className="image">
                <img src="/images/room-3.jpg" alt="" />
              </div>
              <div className="details">
                <div className="text">
                  <h3 className="title"><a href="">Superior Room</a></h3>
                  <p>Queen size bed</p>
                </div>
                <div className="book">
                  <div>
                    <a href="room-overview.html" className="btn btn-main">Book now</a>
                  </div>
                  <div>
                    <span className="price h4">$ 159,00</span>
                    <span>per night</span>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="item">
            <article>
              <div className="image">
                <img src="/images/room-4.jpg" alt="" />
              </div>
              <div className="details">
                <div className="text">
                  <h3 className="title"><a href="room-overview.html">Family Suite</a></h3>
                  <p>Family room</p>
                </div>
                <div className="book">
                  <div>
                    <a href="room-overview.html" className="btn btn-main">Book now</a>
                  </div>
                  <div>
                    <span className="price h4">$ 199,00</span>
                    <span>per night</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};


