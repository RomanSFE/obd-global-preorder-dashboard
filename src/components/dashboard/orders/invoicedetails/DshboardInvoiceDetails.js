import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import DashboardSidebar from '../../dashboardsidebar/DashboardSidebar'
import DashboardTopBar from '../../dashboardtopbar/DashboardTopBar'
import './dashboardinvoicedetails.css'

export default class DshboardInvoiceDetails extends Component {
    render() {
        return (
            <>
            <div className="example-sasjghdjhgs">
                <div className="container-fluid">
                    <div className="row obd-top-bar-main-order-main-dashboard-ex-pdd">
                        <div className="col-md-2">
                            <DashboardSidebar/>
                        </div>
                        <div className="col-md-10">
                          {/* Top Search bar and profile sec start */}
                          <div className="row">
                            <div className="col-md-12">
                              <div className="obd-top-bar-main-order-dash-board-top-search-boxx">
                                <DashboardTopBar/>
                              </div>
                            </div>
                          </div>
                          {/* Top Search bar and profile sec end ---------- */}

                          {/* all order details invoice start */}
                          <div className="row obd-all-order-details-dashboard-main-section-roww">
                            <div className="col-md-9">
                                <div className="obd-all-order-details-dashboard-main-section-left-box-main">
                                    {/* Invoive and logo box start */}
                                    <div className="obd-all-order-details-dashboard-main-section-left-logo-and-inv-bx">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="obd-all-order-details-dashboard-main-section-left-logo-and-inv-bx-contnt">
                                                    <img src={require('../../../../assets/logomain.svg')} alt="orponbd online shop"/>
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="obd-all-order-details-dashboard-mainsc-left-logo-and-datex-bx-contnt text-right">
                                                    <h4>Sales Receipt</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Invoive and logo box end ----------*/}

                                    {/* Bill from and ship to start */}
                                    <div className="obd-all-order-details-dashboard-main-section-left-bill-from-shipto-bx">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="obd-all-order-details-dashboard-main-section-left-from-bbx">
                                                    <h4>From :</h4>
                                                    {/* Single Item Start */}
                                                    <div className="obd-all-order-details-dash-section-left-sngl-frm">
                                                        <h5>Shop Name :</h5>
                                                        <span className="obd-all-order-details-dash-section-rt-ab"><strong>ORPONBD</strong></span>
                                                    </div>
                                                    {/* Single Item End */}
                                                    {/* Single Item Start */}
                                                    <div className="obd-all-order-details-dash-section-left-sngl-frm">
                                                        <h5>Address :</h5>
                                                        <span className="obd-all-order-details-dash-section-rt-ab">
                                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis natus,
                                                            cumque ab nobis quos explicabo?
                                                        </span>
                                                    </div>
                                                    {/* Single Item End */}
                                                </div> 
                                            </div>
                                            <div className="col-md-6">
                                                <div className="obd-all-order-details-dashboard-main-section-rt-too-bbx">
                                                    <h4>TO :</h4>
                                                    {/* Single Item Start */}
                                                    <div className="obd-all-order-details-dash-section-rt-sngl-toz">
                                                        <h5>Name :</h5>
                                                        <span className="obd-all-order-details-dash-section-to-rt-ab">Customer Name</span>
                                                    </div>
                                                    {/* Single Item End */}
                                                    {/* Single Item Start */}
                                                    <div className="obd-all-order-details-dash-section-rt-sngl-toz">
                                                        <h5>Phone :</h5>
                                                        <span className="obd-all-order-details-dash-section-to-rt-ab">01748985768</span>
                                                    </div>
                                                    {/* Single Item End */}
                                                    {/* Single Item Start */}
                                                    <div className="obd-all-order-details-dash-section-rt-sngl-toz">
                                                        <h5>Address :</h5>
                                                        <span className="obd-all-order-details-dash-section-to-rt-ab">
                                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis natus,
                                                            cumque ab nobis quos explicabo?
                                                        </span>
                                                    </div>
                                                    {/* Single Item End */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Bill from and ship to end------- */}

                                    {/* Order Details items Table section Start */}
                                    <div className="obd-details-item-tbl-bx-main-wrap">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="obd-all-order-details-dashboard-main-section-left-table-main-box">
                                                    <table class="table table-bordered">
                                                        <thead style={{borderRadius: '8px'}}>
                                                            <tr>
                                                                <th style={{borderTopLeftRadius: '8px',borderBottomLeftRadius: '8px',textAlign: 'left',width: '50%'}} scope="col col-6">Products</th>
                                                                <th scope="col col-6">QTY</th>
                                                                <th scope="col col-6">Price</th>
                                                                <th style={{borderTopRightRadius: '8px',borderBottomRightRadius: '8px'}} scope="col col-6">Total Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {/* single Item start */}
                                                            <tr>
                                                                <td style={{textAlign: 'left'}}>
                                                                    <div className="row obd-all-order-details-dashboard-mn-section-left-exx-pdd-nn">
                                                                        <div className="col-md-2">
                                                                            <div className="obd-all-order-details-dashboard-mn-section-left-table-img-it">
                                                                                <img src={require('../../../../assets/cart-product-1.png')} alt="orponbd online shop"/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-10">
                                                                            <div className="obd-all-order-details-dashboard-mn-section-left-table-it-txt">
                                                                                <Link to="/">
                                                                                    Fish Scale Plastic Tools, Max Two Lines..
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>3</td>
                                                                <td><span>৳ </span>70</td>
                                                                <td><span>৳ </span>750</td>
                                                            </tr>
                                                            {/* Single Item End */}

                                                            {/* single Item start */}
                                                            <tr>
                                                                <td style={{textAlign: 'left'}}>
                                                                    <div className="row obd-all-order-details-dashboard-mn-section-left-exx-pdd-nn">
                                                                        <div className="col-md-2">
                                                                            <div className="obd-all-order-details-dashboard-mn-section-left-table-img-it">
                                                                                <img src={require('../../../../assets/cart-product-2.png')} alt="orponbd online shop"/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-10">
                                                                            <div className="obd-all-order-details-dashboard-mn-section-left-table-it-txt">
                                                                                <Link to="/">
                                                                                    Fish Scale Plastic Tools, Max Two Lines..
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>3</td>
                                                                <td><span>৳ </span>90</td>
                                                                <td><span>৳ </span>1250</td>
                                                            </tr>
                                                            {/* Single Item End */}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                {/* Order Details items Table Total Count Start------------- */}
                                                <div className="obd-all-order-details-dashboard-main-section-left-table-total-count-main-box">
                                                    <div className="obd-all-order-details-dashboard-main-section-left-table-total-count-price-main-box">
                                                        {/* single item start */}
                                                        <div className="obd-all-order-details-dashboard-main-section-left-table-total-count-price-mn-cnt">
                                                            <h4>Sub Total </h4>
                                                            <span className="obd-all-order-details-dashboard-main-section-left-price-abb-txt">
                                                                <h3><span>৳</span> 1400</h3>
                                                            </span>
                                                        </div>
                                                        {/* single item end */}
                                                        {/* single item start */}
                                                        <div className="obd-all-order-details-dashboard-main-section-left-table-total-count-price-mn-cnt delvry-crg-brdr">
                                                            <h4>Delivery Charge </h4>
                                                            <span className="obd-all-order-details-dashboard-main-section-left-price-abb-txt">
                                                                <h3><span>+ ৳</span> 120</h3>
                                                            </span>
                                                        </div>
                                                        {/* single item end */}
                                                        {/* single item start */}
                                                        <div className="obd-all-order-details-dashboard-main-section-left-table-total-count-price-mn-cnt balance-color-txt">
                                                            <h4>Total Price </h4>
                                                            <span className="obd-all-order-details-dashboard-main-section-left-price-abb-txt">
                                                                <h3><span>৳</span> 1520</h3>
                                                            </span>
                                                        </div>
                                                        {/* single item end */}
                                                    </div>
                                                </div>
                                                {/* Order Details items Table Total Count End------------- */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Order Details items Table section End------------- */}

                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="obd-all-order-details-dashboard-main-section-right-box-mn text-center">
                                    <div className="obd-all-order-details-dashboard-main-section-right-box-printt-btn">
                                        <button type="submit"><span><i class="fas fa-print"></i></span> Print</button>
                                    </div>
                                </div>
                            </div>
                          </div>
                          {/* all order details invoice end */} 

                        </div>
                    </div>
                </div>
            </div>

            </>
        )
    }
}
