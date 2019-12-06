import React, { Component } from 'react'
import Classes from './SignUp.scss'

export default class SignIn extends Component {
    render() {
        return (
            <div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100 p-t-85 p-b-20">
                            <form className="login100-form validate-form">
                                <span className="login100-form-title p-b-40">Sign up</span>
                                <div className="wrap-input100 validate-input m-b-35" data-validate="Enter username">
                                    <input className="input100" type="text" name="fullname" />
                                    <span className="focus-input100" data-placeholder="fullname" />
                                </div>
                                <div className="validate-input m-t-50 m-b-35" data-validate="Enter username">
                                    <p className="input100">Gender</p>
                                    <input className="m-l-5" type="radio" name="Gender" />Male
                                    <input className="m-l-20" type="radio" name="Gender" />Female
                                </div>
                                <div className="wrap-input100 validate-input m-t-50 m-b-35" data-validate="Enter username">
                                    <p className="input100">Date of birth</p>
                                    <input className="input100" type="date" name="dob" />
                                </div>
                                <div className="wrap-input100 validate-input m-t-50 m-b-35" data-validate="Enter username">
                                    <input className="input100" type="text" name="username" />
                                    <span className="focus-input100" data-placeholder="Username" />
                                </div>
                                <div className="wrap-input100 validate-input m-b-50" data-validate="Enter password">
                                    <input className="input100" type="password" name="pass" />
                                    <span className="focus-input100" data-placeholder="Password" />
                                </div>
                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="dropDownSelect1" />
            </div>
        )
    }
}
