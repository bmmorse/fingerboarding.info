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
const prefix = "https://s3.us-east-2.amazonaws.com/fingerboarding.info/";
const images = {
  logo: `${prefix}logo_50x50.png`,
  insta: `${prefix}insta_250x250.png`,
  main: `${prefix}main.jpg`
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
  }

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
                  <img className="logo" src={images.logo}></img>
                  <img className="insta" src={images.insta}></img>
                </nav>
                <h2>
                  Keeping track of the world's best fingerboarding companies
                </h2>
                <div className="month">
                  <h3>March 2020</h3>
                </div>
              </div>

              <div className="featured__img">
                <img className="main-img" src={images.main}></img>
              </div>

              <div className="cards_desc">
                <h3>March Releases</h3>
              </div>
              <div className="cards">
                <div className="card_wrap">
                  <div className="card">1</div>
                </div>
                <div className="card_wrap">
                  <div className="card">2</div>
                </div>
                <div className="card_wrap">
                  <div className="card">3</div>
                </div>
                <div className="card_wrap">
                  <div className="card">4</div>
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
