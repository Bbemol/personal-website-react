import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import About from './about';
import TicTacToe from './tictactoe/tictactoe';
import Error from './error';

class App extends React.Component {

  render() {

    return (
      <main>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
          <Route path='/tictactoe' component={TicTacToe} />
          <Route component={Error} />
        </Switch>
      </main>

    );
  }
}


// ========================================

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
