import React, { Component } from 'react';
import './SharePlayLearn.css';

class App extends Component {
  render() {
    return (
        <div>
            <div className="header">
                <ul>
                    <li className="header-section">
                        <a href="#/share">Share</a>
                    </li>
                    <li className="header-section">
                        <a href="#/play">Play</a>
                    </li>
                    <li className="header-section">
                        <a href="#">Learn</a>
                    </li>
                    <li className="login">
                        <a href="#/login" id="login-control">Login</a>
                        <a href="#/logout" id="logout-control">Logout</a>
                    </li>
                </ul>

            </div>
            <div id="wrap">
                <div class="app-content" ng-view>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
