//This component detects if a valid login is available, if it is not,
//it presents a login form

import React, { Component } from 'react';

class LoginCtrl extends Component {
    constructor(props) {
        super(props);
        let splUserToken = sessionStorage.getItem('splUserToken');
        if( !splUserToken ) {
            this.state = {
                userToken:undefined
            };
        } else {
            this.state = {
                userToken: splUserToken
            }
        }
    }

    render() {
        if( this.state.userToken === undefined ) {
            //insecure_test_token is randomly generated, and checked with the server returns it back to the app
            //but since all our communications are over TLS, it's a bit redundant
            return(
                <div>
                    Login with Gmail id via Google:<br/>
                    (This site will not see your password)
                    <form method="GET" action="https://accounts.google.com/o/oauth2/auth">
                        <input type="hidden" name="client_id" value="726837865357-tqs20u6luqc9oav1bp3vb8ndgavjnrkf.apps.googleusercontent.com"/>
                        <input type="hidden" name="response_type" value="code"/>
                        <input type="hidden" name="scope" value="openid email"/>
                        <input type="hidden" name="redirect_uri" value="https://www.shareplaylearn.com/auth_api/oauth2callback"/>
                        <input type="hidden" name="state" value="insecure_test_token"/>
                        <input type="submit" value="Log in with Google" className="submit-button"/>
                    </form>
                </div>
            )
        } else {
            document.getElementById('logout-control').setAttribute("style","display: inline-block");
            return(
                <div>
                </div>
            )
        }
    }
}

export default LoginCtrl;