// import { Loader } from '../Loader';
import './index.scss';

export const About = () => {
  return (
    <div>
      {/* <Loader /> */}
      <section className="page">
        <div className="page-header" style={{ backgroundImage: 'url(/images/header-1.jpg)' }}>
          <div className="container">
            <h2 className="title">The hotel</h2>
            <p>The place, our services & our team</p>
          </div>
        </div>
        <div className="image-blocks image-blocks-category">
          <div className="container">
            <div className="about">
              <div className="text-block">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <div className="text">
                      <h2>About Colina Hotel</h2>
                        <div className="gallery">
                          <div className="owl-slider owl-slider-gallery">
                            <div className="item" style={{ backgroundImage: 'url(/images/slide-2.jpg)' }}></div>
                            <div className="item" style={{ backgroundImage: 'url(/images/room-3.jpg)' }}></div>
                            <div className="item" style={{ backgroundImage: 'url(/images/slide-3.jpg)' }}></div>
                          </div>
                        </div>
                        <p><strong className="text-center">The begining</strong></p>
                        <p>
                          The intimate side of our 19-room hotel enables us to provide personal customer service so we can help you during
                          stay in Paris and ensure you have a great experience.
                        </p>
                        <p>
                          We are delighted that 97.9% of our guests were happy with our service in 2015 (source – customer survey
                          This is what has made Hôtel La Tamise such a popular place among our guests who have ranked us top out of
                          1809 hotels in Paris on Trip Advisor.
                        </p>
                        <p>
                          <img src="/images/room-2.jpg" alt="Colina Hotel - Resort & accommodation" />
                        </p>
                        <p><strong className="text-center">Facilities</strong></p>
                        <p>
                          A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a
                          modest-quality mattress in a small room to large suites with bigger, higher-quality beds, a dresser, a fridge and
                          other kitchen facilities, upholstered chairs, a flatscreen television and en-suite bathrooms. Small, lower-priced
                          hotels may offer only the most basic guest services and facilities.
                        </p>
                        <p>
                          Larger, higher-priced hotels may provide additional guest facilities such as a swimming pool, business centre
                          (with computers, printers and other office equipment), childcare, conference and event facilities, tennis or basketball
                          courts, gymnasium, restaurants, day spa and social function services.
                          Hotel rooms are usually numbered (or named in some smaller hotels and B&Bs) to allow guests to
                          identify their room. Some boutique, high-end hotels have custom decorated rooms. Some hotels offer meals as part of
                          a room and board arrangement. In the United Kingdom, a hotel is required by law to serve food and drinks to all guests
                          within certain stated hours. In Japan, capsule hotels provide a tiny room suitable only for sleeping and shared
                          bathroom facilities.
                        </p>
                        <p><strong className="text-center">A bit of history</strong></p>
                        <p>
                          The precursor to the modern hotel was the inn of medieval Europe. For a period of about 200 years from the mid-17th
                          century, coaching inns served as a place for lodging for coach travelers. Inns began to cater to richer clients in
                          the mid-18th century. One of the first hotels in a modern sense was opened in Exeter in 1768. Hotels proliferated
                          throughout Western Europe and North America in the early 19th century, and luxury hotels began to spring up in the
                          later part of the 19th century.
                        </p>
                    </div>
                    <h2>Meet our team</h2>
                    <p>
                      Our architects and designers constantly and carefully monitor the environment, they accept and develop changes, research fashion and architectural, as well as sociological, changes and transform them into unique design.
                    </p>
                    <div className="team">
                      <div className="row">
                        <div className="col-sm-3">
                          <article>
                            <div className="details details-text">
                              <div className="inner">
                                <h4 className="title">Lea Nils</h4>
                                <h6 className="title">Director</h6>
                              </div>
                            </div>
                            <div className="image">
                              <img src="/images/user-5.jpg" alt="" />
                            </div>
                            <div className="details details-social">
                              <div className="inner">
                                <a href="#"><i className="fa fa-phone"></i></a>
                                <a href="#"><i className="fa fa-envelope"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                              </div>
                            </div>
                          </article>
                        </div>
                        <div className="col-sm-3">
                          <article>
                            <div className="details details-text">
                              <div className="inner">
                                <h4 className="title">Nora Star</h4>
                                <h6 className="title">Architect</h6>
                              </div>
                            </div>
                            <div className="image">
                              <img src="/images/user-4.jpg" alt="" />
                            </div>
                            <div className="details details-social">
                              <div className="inner">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-google-plus"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                              </div>
                            </div>
                          </article>
                        </div>
                        <div className="col-sm-3">
                          <article>
                            <div className="details details-text">
                              <div className="inner">
                                <h4 className="title">Jenna Hale</h4>
                                <h6 className="title">Quality director</h6>
                              </div>
                            </div>
                            <div className="image">
                              <img src="/images/user-3.jpg" alt="" />
                            </div>
                            <div className="details details-social">
                              <div className="inner">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-google-plus"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                              </div>
                            </div>
                          </article>
                        </div>
                        <div className="col-sm-3">
                          <article>
                            <div className="details details-text">
                              <div className="inner">
                                <h4 className="title">Glen Jordan</h4>
                                <h6 className="title">Supervisor</h6>
                              </div>
                            </div>
                            <div className="image">
                              <img src="/images/user-4.jpg" alt="" />
                            </div>
                            <div className="details details-social">
                              <div className="inner">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-google-plus"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <div className="blocks blocks-left">
                  <div className="item">
                    <div className="text">
                      <div className="h2">Hotel information</div>
                      <ul>
                        <li>Check-in Time: 3 PM</li>
                        <li>Check-out Time: 12 PM</li>
                        <li>Complimentary WiFi for All Members</li>
                        <li>Valet Parking $65-$75/day</li>
                        <li>Pets Welcome (fee)</li>
                        <li>Early Check-In Available</li>
                        <li>Best Prices Guaranteed</li>
                        <li>Free parking for All Inclusive package</li>
                      </ul>
                    </div>
                  </div>
                  <div className="image" style={{ backgroundImage: 'url(/images/slide-1.jpg)' }}>
                    <img src="/images/slide-1.jpg" alt="" />
                  </div>
                </div>
                <div className="blocks blocks-right">
                  <div className="item">
                    <div className="text">
                      <div className="h2">Hotel features</div>
                      <ul>
                        <li>FIT ® Gym & Fitness</li>
                        <li>Wired Business Center</li>
                        <li>All Inclusive ® Service</li>
                        <li>Bliss & Spa</li>
                        <li>SPG Keyless</li>
                        <li>Resturant & lounge bar</li>
                        <li>Private rooms</li>
                      </ul>
                    </div>
                  </div>
                  <div className="image" style={{ backgroundImage: 'url(/images/services-4.jpg)' }}>
                    <img src="/images/services-4.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


