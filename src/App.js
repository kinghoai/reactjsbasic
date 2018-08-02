import React, { Component } from 'react';
import './App.css';
import { Header } from './component/Header';
import { SettingText } from './component/settingText/SettingText';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SettingText/>
      </div>
    );
  }
}

export default App;
