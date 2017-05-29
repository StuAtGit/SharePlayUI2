import React, { Component } from 'react';
import './SharePlayLearn.css';
import LoginCtrl from "./LoginCtrl";

class SharePlayLearnApp extends Component {
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
                        <a href="#/logout" id="logout-control">Logout</a>
                    </li>
                </ul>

            </div>
            <div id="wrap">
                <div class="app-content">
                    <LoginCtrl/>
                </div>
            </div>
        </div>
    );
  }
}

export default SharePlayLearnApp;
