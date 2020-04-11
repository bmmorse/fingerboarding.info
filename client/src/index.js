import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";

// post Component
import { Post } from "./components/Post";

import { Logo } from "./components/Logo";
import "./index.scss";

// data
const data = require("./data/data.json");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed: 5,
    };
  }

  display = () => {
    let newData = data.map((e) => {
      return <Post data={e} key={e.key} />;
    });

    newData.splice(this.state.displayed);
    return newData;
  };

  loadMore = () => {
    this.setState({ displayed: this.state.displayed + 5 });
  };

  render() {
    return (
      <div id="App">
        <Router>
          <ScrollToTop />
          <Switch>
            {/* the index page */}
            <Route exact path="/">
              <div className="header">
                <Logo className="logo" />
                <h1>fingerboarding.info</h1>
              </div>

              <div className="posts">
                <h2>LATEST RELEASES</h2>
                {this.display()}
              </div>
              <div className="loadMore">
                <button
                  onClick={(e) => {
                    this.loadMore();
                  }}
                  className="loadButton"
                >
                  Load More
                </button>
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
