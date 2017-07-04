import React, { Component } from 'react';
import './SharePlayLearn.css';
import { Route, Link } from 'react-router-dom';
import Learn from './Learn';
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
                        <nav>
                            <Link to="/Learn">Learn</Link>
                        </nav>
                    </li>
                    <li className="login">
                        <a href="#/logout" id="logout-control">Logout</a>
                    </li>
                </ul>

            </div>
            <div id="wrap">
                <Route path="/Learn" component={Learn}/>
                <div class="app-content">
                    <LoginCtrl/>
                </div>
            </div>
        </div>
    );
  }
}

export default SharePlayLearnApp;
