import React, { Component } from "react";
import './title.scss'

export default class title extends Component {
  render() {
    return (
      <div>
        <div className="title">
          <div className="title--text -small">
            Salut, I am
          </div>
          <div className="title--text -big">
            <span>Benjamin</span>
          </div>
          <div className="title--text -small">
            a web developer based in
          </div>
          <div className="title--text -big -end">
            <span>PARIS</span>
          </div>
        </div>
      </div>
    );
  }
}
