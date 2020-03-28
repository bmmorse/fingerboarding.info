import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";

// ______________________________ style index
import "./index.scss";

// ______________________________ images
import images from "./images";

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Router>
          <ScrollToTop />
          <Switch>
            {/* the index page */}
            <Route exact path="/">
              <div className="header">
                <nav>
                  <img className="logo" src={images.site.logo}></img>
                  <h1>FINGERBOARDING.INFO</h1>
                  <img className="insta" src={images.site.instablack}></img>
                </nav>
              </div>

              <div className="featured">
                <img src={images.featured.lionelsimonfb}></img>
                <div className="featured__desc">
                  <p>
                    <a>@lionelsimonfb</a>
                  </p>
                  <p className="photo">
                    photo: <a className="photo">@romane_en_selle</a>
                  </p>
                </div>
              </div>

              <div className="posts">
                <div className="posts__header">
                  <h2>March 2020</h2>
                  <h3>Company Releases</h3>
                  <img className="logo" src={images.site.logo}></img>
                </div>

                <div className="posts__list">
                  <div className="post">
                    <h3>March 11</h3>
                    <img src={images.posts.darkwood_030320} alt="" />
                    <div className="post__desc">
                      <img src={images.companies.darkwood_logo} alt="" />
                      <div className="desc">
                        <h4>Darkwood Fingerboards</h4>
                        <p>
                          New stock - CNC laser engraved graphics, RARE
                          Surrealist art including MC Escher stairs
                        </p>
                        <div className="links">
                          <img
                            className="shopping"
                            src={images.site.shopping}
                            alt=""
                          />
                          <img
                            className="instawhite"
                            src={images.site.instawhite}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Route>

            {/* 404 redirect to index */}
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

/**
 * Scroll Restoration
 * https://reacttraining.com/react-router/web/guides/scroll-restoration
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

ReactDOM.render(<App />, document.getElementById("root"));
