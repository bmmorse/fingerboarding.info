import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom';

// post Component
import { Post } from './components/Post';

import { Logo } from './components/Logo';
import './index.scss';

// data
const data = require('./data/data.json');

function App() {
  const [displayed, setDisplayed] = useState(5);

  let display = () => {
    let newData = data.map((e) => {
      let key = `${e.company} ${e.date}`;
      return <Post data={e} key={key} />;
    });

    newData.splice(displayed);
    return newData;
  };

  let loadMore = () => {
    setDisplayed(displayed + 5);
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div id='App'>
      <Router>
        <ScrollToTop />
        <Switch>
          {/* the index page */}
          <Route exact path='/'>
            <div className='header'>
              <a href='#' onClick={reload}>
                <Logo className='logo' />
              </a>
            </div>

            <div className='posts'>{display()}</div>
            <div className='load-more'>
              <button
                onClick={(e) => {
                  loadMore();
                }}
                className='load-more-button'
              >
                +
              </button>
            </div>
          </Route>

          {/* 404 redirect to index */}
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Router>
    </div>
  );
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

ReactDOM.render(<App />, document.getElementById('root'));
