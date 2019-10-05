
import React from 'react';
import './SignUp.css';

class SignUp extends React.Component {
    render() {
        return (
            <div className="sign-up-container">
                <div className="sign-up-inner-div">
                    <div className="row">
                        <div className="col-lg-5 sign-up-left-image">
                        </div>
                        <div className="col-lg-6 sign-up-right-information">
                            <p id="sign-up-info-paragraph">Fill in the information bellow</p>
                            <form>
                                <input type="email" placeholder="Email" className="form-control" autoComplete="off" />
                                <input type="password" placeholder="Password" className="form-control" />
                                <input type="password" placeholder="Repeat password" className="form-control" />
                                <input type="text" placeholder="Username" className="form-control" />
                                <button type="submit" className="btn btn-md sign-up-submit-button">
                                    Sign up
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <span>By signing up you agree to the terms and conditions of the application.</span>
            </div>
        );
    }
}

export default SignUp;