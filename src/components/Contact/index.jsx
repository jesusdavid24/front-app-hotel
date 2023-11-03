import './index.scss';

export const Contact = () => {
  return (
    <div>
      <section className="page">
        <div className="page-header" style={{ backgroundImage: 'url(/images/header-1.jpg)' }}>
          <div className="container">
            <h2 className="title">Contact</h2>
            <p>The place, our services & our team</p>
          </div>
        </div>
        <div className="contact">
          <div className="container">
            <div className="map" id="map"></div>
              <div className="row">
                <div className="col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1">
                  <div className="contact-block">
                    <div className="banner">
                      <div className="row">
                        <div className="col-md-offset-1 col-md-10 text-center">
                          <h2 className="title">Send an email</h2>
                          <p>
                            Please use this form if you have any questions about our products <br /> and we&apos;ll get back with you very soon.
                          </p>
                          <div className="contact-form-wrapper">
                            <a className="btn btn-clean open-form" data-text-open="Contact us via form" data-text-close="Close form">Contact us via form</a>
                            <div className="contact-form clearfix">
                              <form action="#" method="post">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <input type="text" value="" className="form-control" placeholder="Your name" required="required" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <input type="email" value="" className="form-control" placeholder="Your email" required="required" />
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="form-group">
                                      <input type="text" value="" className="form-control" placeholder="Subject" required="required" />
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="form-group">
                                      <textarea className="form-control" placeholder="Your message" rows="10"></textarea>
                                    </div>
                                  </div>
                                  <div className="col-md-12 text-center">
                                    <input type="submit" className="btn btn-clean" value="Send message" />
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contact-info">
                      <div className="row">
                        <div className="col-sm-4">
                          <figure className="text-center">
                            <span className="icon icon-map-marker"></span>
                            <figcaption>
                              <strong>Where are we?</strong>
                              <span>200 12th Ave, New York, <br />NY 10001, USA</span>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="col-sm-4">
                          <figure className="text-center">
                            <span className="icon icon-phone"></span>
                            <figcaption>
                              <strong>Call us</strong>
                              <span>
                                <strong>T</strong> +1 222 333 4444 <br />
                                <strong>F</strong> +1 222 333 5555
                              </span>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="col-sm-4">
                          <figure className="text-center">
                            <span className="icon icon-clock"></span>
                            <figcaption>
                              <strong>Working hours</strong>
                              <span>
                                <strong>Mon</strong> - Sat: 10 am - 6 pm <br />
                                <strong>Sun</strong> 12pm - 2 pm
                              </span>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
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

