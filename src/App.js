import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './App.css';
import NotificationsPage from './Components/NotifcationsPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            Notifications Client
        </header>

        <div>
          <NotificationsPage />
        </div>
      </div> 
    );
  }
}

export default App;
