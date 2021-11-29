import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class RoutingMainSection extends Component {
    render() {
        return (
            <>
            <div className="orponbd-main-routing-section-web-versn-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="orponbd-main-routing-section-web-versn-content">
                                <ul>
                                    <li><Link to="/">Home</Link></li>

                                    {/*Main Dashboard Start*/}
                                    <li><Link to="/dashboard-orders">Orders</Link></li>
                                    <li><Link to="/dashboard-invoice-details">Dashboard Orders Details</Link></li>
                                    <li><Link to="/dash-all-products">Dashboard All Products</Link></li>
                                    <li><Link to="/dash-add-product">Dashboard Add Product</Link></li>
                                    <li><Link to="/dash-all-users">Dashboard All Users</Link></li>
                                    {/*Main Dashboard end*/}

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
