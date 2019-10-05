
import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar navbar-default navbar-expand-lg fixed-top">
                <div className="container">
                    <span className="navbar-brand" href="#">
                        <img src="" id="navbar-brand-image" className="rounded-circle" />
                        andrei_plesu98
                    </span>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item" id="logout-button">
                                <a className="nav-link" href="#">Logout</a>
                            </li>
                            <li className="nv-item" id="profile-button">
                                <a className="nav-link" href="#">Profile</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

export default Navbar;