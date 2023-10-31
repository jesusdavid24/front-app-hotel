import './index.scss';

export const NearBy = () => {
  return (
    <div>
      <section className="cards">
        <div className="section-header">
          <div className="container">
            <h2 className="title">Near by <a href="#" className="btn btn-sm btn-clean-dark">View all</a></h2>
            <p>Here&apos;s a selection of ionic sites related to art, fashion and design.</p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-8">
              <figure>
                <figcaption style={{ background: 'url(/images/activity-1.jpg)' }}>
                  <img src="/images/activity-1.jpg" alt="" />
                </figcaption>
                <a href="#" className="btn btn-clean" onClick="">Museums</a>
              </figure>
            </div>

            <div className="col-xs-6 col-md-4">
              <figure>
                <figcaption style={{ background: 'url(/images/activity-2.jpg)' }}>
                  <img src="/images/activity-2.jpg" alt="" />
                </figcaption>
                <a href="#" className="btn btn-clean">Nightlife</a>
              </figure>
            </div>

            <div className="col-xs-6 col-md-4">
              <figure>
                <figcaption style={{ background: 'url(/images/activity-3.jpg)' }}>
                  <img src="/images/activity-3.jpg" alt="" />
                </figcaption>
                <a href="#" className="btn btn-clean">Food & drink</a>
              </figure>
            </div>

            <div className="col-xs-6 col-md-4">
              <figure>
                <figcaption style={{ background: 'url(/images/activity-4.jpg)' }}>
                  <img src="/images/activity-4.jpg" alt="" />
                </figcaption>
                <a href="#" className="btn btn-clean">Shopping</a>
              </figure>
            </div>

            <div className="col-xs-6 col-md-4">
              <figure>
                <figcaption style={{ background: 'url(/images/activity-5.jpg)' }}>
                  <img src="/images/activity-5.jpg" alt="" />
                </figcaption>
                <a href="#" className="btn btn-clean">The City</a>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
