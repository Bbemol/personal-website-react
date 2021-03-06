import React, { Component } from 'react'
import './footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="footer--wrapper">
            <p className="footer--content">Contact me:<br/> benjperney[at]gmail.com</p>
          </div>
        </footer>
      </div>
    )
  }
}
