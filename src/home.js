import React, { Component } from 'react';
import Menu from './menu';
import Title from './title/title';
import Footer from './footer/footer';

class Home extends Component {
  render() {

    return (
        <div>
          <Menu />
          <Title />
          <Footer />
        </div>
    );
  }
}

export default Home;