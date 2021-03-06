import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import About from './about';
import Error from './error';


class Game extends React.Component {

  render() {

    return (
      <main>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
          <Route component={Error} />
        </Switch>
      </main>

    );
  }
}


// ========================================

ReactDOM.render(
  <BrowserRouter>
    <Game />
  </BrowserRouter>,
  document.getElementById('root')
);
