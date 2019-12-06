import React, { Component } from 'react';
import Product from '../../Layouts/Product';
import classes from "./Home.scss";
import Carousel from 'react-bootstrap/Carousel';


export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="img/adolescent-adult-beauty-blur-459971.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="img/notes-macbook-study-conference-7102.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./img/people-coffee-meeting-team-7096.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <section className="my-5">
                    <div className="container">
                        <div className="col-md-12">
                            <div className="row">
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="team" className="pb-5">
                    <div className="container">
                        <h5 className="section-title h1">OUR TEACHER</h5>
                        <div className="row">
                            {/* Team member */}
                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                    <div className="mainflip">
                                        <div className="frontside">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image" /></p>
                                                    <h4 className="card-title">Sunlimetech</h4>
                                                    <p className="card-text">This is basic card with image on top, title, description and button.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className="card-title">Sunlimetech</h4>
                                                    <p className="card-text">This is basic card with image on top, title, description
                                                      and button.This is basic card with image on top, title, description and
                                                      button.This is basic card with image on top, title, description and button.</p>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-facebook" />
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-twitter" />
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-instagram" />
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-google-plus-g" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ./Team member */}
                            {/* Team member */}
                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                    <div className="mainflip">
                                        <div className="frontside">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png" alt="card image" /></p>
                                                    <h4 className="card-title">Sunlimetech</h4>
                                                    <p className="card-text">This is basic card with image on top, title, description and button.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className="card-title">Sunlimetech</h4>
                                                    <p className="card-text">This is basic card with image on top, title, description
                                                      and button.This is basic card with image on top, title, description and
                                                      button.This is basic card with image on top, title, description and button.</p>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-facebook" />
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-twitter" />
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-instagram" />
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-google-plus-g" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ./Team member */}
                            {/* Team member */}
                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                    <div className="mainflip">
                                        <div className="frontside">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_03.png" alt="card image" /></p>
                                                    <h4 className="card-title">Sunlimetech</h4>
                                                    <p className="card-text">This is basic card with image on top, title, description and button.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className="card-title">Sunlimetech</h4>
                                                    <p className="card-text">This is basic card with image on top, title, description
                                                      and button.This is basic card with image on top, title, description and
                                                      button.This is basic card with image on top, title, description and button.</p>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-facebook" />
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-twitter" />
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-instagram" />
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-google-plus-g" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ./Team member */}
                            {/* Team member */}
                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                    <div className="mainflip">
                                        <div className="frontside">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_04.jpg" alt="card image" /></p>
                                                    <h4 className="card-title">Sunlimetech</h4>
                                                    <p className="card-text">This is basic card with image on top, title, description and button.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className="card-title">Sunlimetech</h4>
                                                    <p className="card-text">This is basic card with image on top, title, description
                                                      and button.This is basic card with image on top, title, description and
                                                      button.This is basic card with image on top, title, description and button.</p>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-facebook" />
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-twitter" />
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-instagram" />
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-google-plus-g" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ./Team member */}
                            {/* Team member */}
                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                    <div className="mainflip">
                                        <div className="frontside">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_05.png" alt="card image" /></p>
                                                    <h4 className="card-title">Sunlimetech</h4>
                                                    <p className="card-text">This is basic card with image on top, title, description and button.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className="card-title">Sunlimetech</h4>
                                                    <p className="card-text">This is basic card with image on top, title, description
                                                      and button.This is basic card with image on top, title, description and
                                                      button.This is basic card with image on top, title, description and button.</p>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-facebook" />
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-twitter" />
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-instagram" />
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-google-plus-g" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ./Team member */}
                            {/* Team member */}
                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                    <div className="mainflip">
                                        <div className="frontside">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_06.jpg" alt="card image" /></p>
                                                    <h4 className="card-title">Sunlimetech</h4>
                                                    <p className="card-text">This is basic card with image on top, title, description and button.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className="card-title">Sunlimetech</h4>
                                                    <p className="card-text">This is basic card with image on top, title, description
                                                      and button.This is basic card with image on top, title, description and
                                                      button.This is basic card with image on top, title, description and button.</p>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-facebook" />
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-twitter" />
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-instagram" />
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-google-plus-g" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ./Team member */}
                        </div>
                    </div>
                </section>
                {/* Team */}
                <section className="my-5">
                    <div className="container">
                        <div className="col-md-12">
                            <div className="row my-5">
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                            </div>
                            <div className="row my-5">
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5 bg-img">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>OUR STUDENT REVIEW</h1>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card">
                                            <img className="card-img-top" src="img/75196313_718656441949057_3083366990417494016_o.jpg" alt="Card image cap" />
                                            <div className="card-body">
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <img className="card-img-top" src="img/72743082_1941137296032126_647727282084904960_o.jpg" alt="Card image cap" />
                                            <div className="card-body">
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
