import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import DashPagination from '../../pagination/DashPagination';
import './dashboardrecentorder.css'

export default class DashBoardRecentOrder extends Component {
    render() {
        return (
            <>
            <div className="obd-recent-order-bx-product-and-new-user-dash-board-main-box">
                <div className="row">
                    <div className="col-md-12">
                        <div className="obd-recent-order-bx-product-and-new-user-dash-board-main-box-content">
                            {/* Head sec start */}
                            <div className="orponbd-recent-order-bx-color-section-box">
                                <div className="orponbd-recent-order-color-sectionn-paddv">
                                    <div className="orponbd-recent-order-bx-txtt-hd">
                                        <h4>Recent Order</h4>
                                        <div className="flltrr-bbttn-brdr-recent-orderxv"></div>
                                    </div>
                                </div>
                                <div className="orponbd-recent-order-bx-color-section-box-right-seeall-export-ab">
                                    <ul>
                                        <li><Link to="/">See All</Link></li>
                                        <li><button>Export <span><i class="fas fa-long-arrow-alt-down"></i></span></button></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Head sec end */}
                            {/* Recent Order Table Box Start */}
                            <div className="obd-recent-order-bx-product-and-new-user-dash-board-table-box">
                                <table class="table table-bordered">
                                    <thead style={{borderRadius: '8px'}}>
                                        <tr>
                                            <th style={{borderTopLeftRadius: '8px',borderBottomLeftRadius: '8px'}} scope="col col-6">Order No</th>
                                            <th scope="col col-6">Date</th>
                                            <th scope="col col-6">Customer Name</th>
                                            <th scope="col col-6">Address</th>
                                            <th scope="col col-6">Payment Method</th>
                                            <th scope="col col-6">Total Amount</th>
                                            <th style={{textAlign: 'center'}} scope="col col-6">Status</th>
                                            <th style={{borderTopRightRadius: '8px',borderBottomRightRadius: '8px'}} scope="col col-6">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* single Item start */}
                                        <tr>
                                            <td>252545524</td>
                                            <td style={{textAlign: 'center'}}>2 Sep, 2020  <br/> <span>3:00 PM</span></td>
                                            <td>Customer Full Name</td>
                                            <td>Shipping address</td>
                                            <td style={{textAlign: 'center'}}>Bkash</td>
                                            <td style={{textAlign: 'center'}}>৳ 2400</td>
                                            <td style={{textAlign: 'center'}}>
                                                <div className="obd-recent-order-bx-product-and-payment-stts-sec">
                                                    <div className="obd-recent-order-bx-product-and-payment-stts-pendng">
                                                        <button>Pending</button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td style={{textAlign: 'center'}}>
                                                <div className="obd-recent-order-bx-product-and-action-bx">
                                                    <Link to="/"><i class="far fa-eye"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Single Item End */}
                                        {/* single Item start */}
                                        <tr>
                                            <td>252545524</td>
                                            <td style={{textAlign: 'center'}}>2 Sep, 2020 <br/> <span>3:00 PM</span></td>
                                            <td>Customer Full Name</td>
                                            <td>Shipping address</td>
                                            <td style={{textAlign: 'center'}}>Card</td>
                                            <td style={{textAlign: 'center'}}>৳ 2400</td>
                                            <td style={{textAlign: 'center'}}>
                                                <div className="obd-recent-order-bx-product-and-payment-stts-sec">
                                                    <div className="obd-recent-order-bx-product-and-payment-stts-in-transt">
                                                        <button>In Transit</button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td style={{textAlign: 'center'}}>
                                                <div className="obd-recent-order-bx-product-and-action-bx">
                                                    <Link to="/"><i class="far fa-eye"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Single Item End */}
                                        {/* single Item start */}
                                        <tr>
                                            <td>252545524</td>
                                            <td style={{textAlign: 'center'}}>2 Sep, 2020 <br/> <span>3:00 PM</span></td>
                                            <td>Customer Full Name</td>
                                            <td>Shipping address</td>
                                            <td style={{textAlign: 'center'}}>Card</td>
                                            <td style={{textAlign: 'center'}}>৳ 2400</td>
                                            <td style={{textAlign: 'center'}}>
                                                <div className="obd-recent-order-bx-product-and-payment-stts-sec">
                                                    <div className="obd-recent-order-bx-product-and-payment-stts-deliverd">
                                                        <button>Delivered</button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td style={{textAlign: 'center'}}>
                                                <div className="obd-recent-order-bx-product-and-action-bx">
                                                    <Link to="/"><i class="far fa-eye"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Single Item End */}
                                        {/* single Item start */}
                                        <tr>
                                            <td>252545524</td>
                                            <td style={{textAlign: 'center'}}>2 Sep, 2020 <br/> <span>3:00 PM</span></td>
                                            <td>Customer Full Name</td>
                                            <td>Shipping address</td>
                                            <td style={{textAlign: 'center'}}>Card</td>
                                            <td style={{textAlign: 'center'}}>৳ 2400</td>
                                            <td style={{textAlign: 'center'}}>
                                                <div className="obd-recent-order-bx-product-and-payment-stts-sec">
                                                    <div className="obd-recent-order-bx-product-and-payment-stts-cancelld">
                                                        <button>Cancelled</button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td style={{textAlign: 'center'}}>
                                                <div className="obd-recent-order-bx-product-and-action-bx">
                                                    <Link to="/"><i class="far fa-eye"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Single Item End */}

                                    </tbody>
                                </table>
                                {/* Pagination Start */}
                                <div className="obd-preorder-dash-pagination">
                                    <DashPagination/>
                                </div>
                                {/* Pagination End */}
                            </div>
                            {/* Recent Order Table Box End */}
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
