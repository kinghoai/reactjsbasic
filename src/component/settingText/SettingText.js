import React, { Component } from 'react';

export class SettingText extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <div className="color">
              <span className="mau"></span>
              <span className="mau"></span>
              <span className="mau"></span>
              <span className="mau"></span>
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="font">
              div font
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text-info">
          Color: , Font Size: .
          </div>
          <div className="text-show">
          </div>
        </div>
      </div>
      
    );
  }
}