
import React from 'react';
import './Login.css';

class Login extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container login-header">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login-inner-div">
                                <form>
                                    <input type="email" autoComplete="off" placeholder="Email" className="form-control form-control-md" />
                                    <input type="password" placeholder="Password" className="form-control form-control-md" />
                                    <button type="submit" className="btn btn-md" >Login</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h1>Forum application</h1>
                            <h2>Check the new forums for the best</h2>
                            <div className="login-buttons">
                                <button type="button" className="btn btn-md login-button-signup">Create account</button>
                                <button type="button" className="btn btn-md login-button-incognito">Enter incognito*</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;