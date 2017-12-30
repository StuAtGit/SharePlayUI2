import React, { Component } from 'react';
import './SharePlayLearn.css';
import { Route, Link } from 'react-router-dom';
import Learn from './Learn';
import LoginCtrl from "./LoginCtrl";
import LoginCallback from './LoginCallback';

class SharePlayLearnApp extends Component {
  render() {
    return (
        <div>
            <div className="header">
                <ul>
                    <li className="header-section">
                        <a href="/share">Share</a>
                    </li>
                    <li className="header-section">
                        <a href="/play">Play</a>
                    </li>
                    <li className="header-section">
                        <nav>
                            <Link to="/learn">Learn</Link>
                        </nav>
                    </li>
                    <li className="login">
                        <Link to="/login" id="login-control">Login</Link>
                    </li>
                </ul>

            </div>
            <div id="wrap">
                <div className="app-content">
                <Route path="/learn" component={Learn}/>
                <Route path="/login" component={LoginCtrl}/>
                <Route path="/login_callback" component={LoginCallback}/>
                </div>
            </div>
        </div>
    );
  }
}

export default SharePlayLearnApp;
