import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" to="/home"><img src="./img/logo.png" width="150px" height="auto" alt /></NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Course</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <NavLink className="dropdown-item" to="/course">Computer Science</NavLink>
                                <NavLink className="dropdown-item" to="/course">Design</NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/signup"><Button variant="success">Sign up</Button></NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink to="/signin"><Button className="btn-green" variant="outline-success">Sign in</Button></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
