import React, { Component } from 'react'
import Product from '../../Layouts/Product';
import classes from './Courses.scss'

export default class Courses extends Component {
    render() {
        return (
            <div>
                <div className="container mt-100">
                    <div className="row my-3">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                    <div className="row my-3">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                    <div className="row my-3">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                    <div className="row my-3">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </div>
        )
    }
}
