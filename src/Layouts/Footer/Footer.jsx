import React, { Component } from 'react';
import classes from './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <footer className="bg-black py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Explore</h3>
                            <ul id="footer-menu">
                                <li><a>Home</a></li>
                                <li><a>About us</a></li>
                                <li><a>Courses</a></li>
                                <li><a>Unlock your potential</a></li>
                                <li><a>Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h3>Explore</h3>
                            <ul id="footer-menu">
                                <li><a>Home</a></li>
                                <li><a>About us</a></li>
                                <li><a>Courses</a></li>
                                <li><a>Unlock your potential</a></li>
                                <li><a>Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h3>Explore</h3>
                            <ul id="footer-menu">
                                <li><a>Home</a></li>
                                <li><a>About us</a></li>
                                <li><a>Courses</a></li>
                                <li><a>Unlock your potential</a></li>
                                <li><a>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="green-bar my-3" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 p-0">
                            <img src="img/logo@2x_white.png" width="150px" height="auto" alt />
                        </div>
                        <div className="col-md-4 offset-md-4 pt-2">
                            <p>Copyright 2019 all right reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;