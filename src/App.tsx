import * as React from 'react';
import './App.css';
import Clock from './components/clock/Clock';
import { Header } from './components/header/header';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header message="Time is running fast"/>
        <Clock />
      </div>
    );
  }
}

export default App;
