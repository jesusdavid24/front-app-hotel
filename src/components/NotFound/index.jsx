import './index.scss';

export const NotFound = () => {
  return (
    <div>
      <section className="not-found">
            <div className="container">
                <h1 className="title" data-title="404">404</h1>
                <div className="h4 subtitle">Sorry! Page not found.</div>
                <p>The requested URL was not found on this server. That’s all we know.</p>
                <p>Click <a href="#">here</a> to get to the front page? </p>
            </div>
        </section>
        <section className="subscribe">
            <div className="container">
                <div className="box">
                    <h2 className="title">Subscribe</h2>
                    <div className="text">
                        <p>& receive free premium gifts</p>
                    </div>
                    <div className="form-group">
                        <input type="text" value="" placeholder="Subscribe" className="form-control" />
                        <button className="btn btn-sm btn-main">Go</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

