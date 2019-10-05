
import React from 'react';
import './Profile.css';
import Navbar from './Navbar';

class Profile extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="container" style={{marginTop: 70 + 'px'}}>
                    <div className="profile-header text-center">
                        <div className="profile-header-image">
                        </div>
                        <div className="sub-image-information">
                            <p id="profile-username">andrei_plesu98</p>
                            <p id="profile-email">andrei98plesoianu@gmail.com</p>
                        </div>
                        <div className="text-right profile-header-edit-button">
                            <i className="far fa-edit"></i>
                            <span style={{marginLeft: 5 + 'px'}}>Edit</span>
                        </div>
                    </div>
                    <div className="profile-body">
                        <div className="profile-change-password">
                            <button className="btn btn-md profile-change-password-button">Change password</button>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-lg-4 text-center">
                                <p id="profile-body-attribute">First name</p>
                                <p id="profile-body-value">Andrei-Bogdan</p>
                            </div>
                            <div className="col-lg-4 text-center">
                                <p id="profile-body-attribute">Last name</p>
                                <p id="profile-body-value">Plesoianu</p>
                            </div>
                            <div className="col-lg-4 text-center">
                                <p id="profile-body-attribute"><i className="far fa-heart"></i></p>
                                <p id="profile-body-value">223</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </React.Fragment>
        );
    }
}

export default Profile;