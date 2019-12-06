import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

class Product extends Component {
    render() {
        return (
            <div className="col-md-3">
                {/* Card */}
                <div className="card">
                    {/* Card image */}
                    <div className="view overlay">
                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg" alt="Card image cap" />
                        <a href="#!">
                            <div className="mask rgba-white-slight" />
                        </a>
                    </div>
                    {/* Card content */}
                    <div className="card-body">
                        {/* Title */}
                        <h4 className="card-title font-weight-bold"><a href="#">La Sirena restaurant</a></h4>
                        {/* Data */}
                        <ul className="list-unstyled list-inline rating mb-0">
                            <li className="list-inline-item mr-0"><i className="fas fa-star amber-text" /></li>
                            <li className="list-inline-item mr-0"><i className="fas fa-star amber-text" /></li>
                            <li className="list-inline-item mr-0"><i className="fas fa-star amber-text" /></li>
                            <li className="list-inline-item mr-0"><i className="fas fa-star amber-text" /></li>
                            <li className="list-inline-item"><i className="fas fa-star-half-alt amber-text" /></li>
                            <li className="list-inline-item">
                                <p className="text-muted">4.5 (413)</p>
                            </li>
                        </ul>
                        <p className="mb-2">$ • American, Restaurant</p>
                        {/* Button */}
                        <a href="#"><Button className="btn-green" variant="outline-success">Buy Now</Button></a>
                    </div>
                </div>
                {/* Card */}
            </div>
        )
    }
}
export default Product;