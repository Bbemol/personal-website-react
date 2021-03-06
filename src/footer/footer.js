import React, { Component } from 'react'
import './footer.scss';
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="footer--wrapper">
            <p className="footer--content">
              Contact me:<br/> benjperney[at]gmail.com
            </p>
            <p className="footer--content">
              <a href="https://github.com/Bbemol" rel="noreferrer" target="_blank">
                <img className="icons" alt="github social icon" src={github} />
                </a>
              <a href="https://www.linkedin.com/in/benjamin-perney-6324b74a/" rel="noreferrer" target="_blank">
                <img className="icons" alt="linkedin social icon" src={linkedin} />
              </a>
            </p>
          </div>
        </footer>
      </div>
    )
  }
}
