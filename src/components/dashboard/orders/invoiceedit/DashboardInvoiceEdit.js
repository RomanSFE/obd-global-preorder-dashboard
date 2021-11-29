import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import DashboardSidebar from '../../dashboardsidebar/DashboardSidebar'
import DashboardTopBar from '../../dashboardtopbar/DashboardTopBar'
import './dashboardinvoiceedit.css'
import { Tabs, Tab } from 'react-bootstrap'

import Modal from 'react-bootstrap/Modal';

export default class DashboardInvoiceEdit extends Component {

    // View More Modal
    constructor(props) {
		super(props);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}
    // View More Modal

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

                          {/* all order details invoice Edit Start */}
                          <div className="row obd-all-order-details-editt-dashboard-main-section-roww">
                             <div className="col-md-12">
                                 {/* top order id and back button start */}
                                 <div className="obd-all-order-details-editt-dashboard-main-section-order-id-and-back-btn">
                                     <div className="obd-all-order-details-editt-dashboard-main-section-order-id-and-back-lnk-list">
                                         <ul>
                                             <li><Link to="/dashboard">Dashboard <span><i className="fas fa-angle-right"></i></span></Link></li>
                                             <li><Link to="/dashboard-orders">Orders <span><i className="fas fa-angle-right"></i></span></Link></li>
                                             <li><span> Order # 325458</span></li>
                                         </ul>
                                     </div>
                                     <div className="obd-all-order-details-editt-dashboard-main-section-order-id-and-back-order-idd-tx">
                                         <h3>Order # <span>325458</span></h3>
                                         <div className="obd-all-order-details-editt-dashboard-main-section-order-id-and-back-order-bk-to-orddr">
                                             <Link to="/">
                                                 <span><i className="fas fa-angle-left"></i></span> Back To Orders
                                             </Link>
                                         </div>
                                     </div>

                                 </div>
                                 {/* top order id and back button end -------------*/}

                                 {/* Order Details Tab Section Start */}
                                 <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-tabs-main-box">
                                     <div className="row">
                                         <div className="col-md-8">
                                             <div className="obd-all-order-details-editt-dashboard-main-section-orders-tab-box-lft">
                                             <Tabs defaultActiveKey="dasorderdetails" id="uncontrolled-tab-example">
                                                <Tab eventKey="dasorderdetails" title="Order Details">
                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-tab-lft-contbnt">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-lft">
                                                                    <h3>Overview</h3>

                                                                    {/* single item start */}
                                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-lft-sngl-itm">
                                                                        <h4>Created</h4>
                                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-lft-datt">
                                                                            <h3><span>:</span> Jan 20, 2021, 10:30 AM</h3>
                                                                        </span>
                                                                    </div>
                                                                    {/* single item end */}
                                                                    {/* single item start */}
                                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-lft-sngl-itm">
                                                                        <h4>Order Confirmed</h4>
                                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-lft-datt">
                                                                            <h3><span>:</span> Jan 20, 2021, 10:30 AM</h3>
                                                                        </span>
                                                                    </div>
                                                                    {/* single item end */}
                                                                    {/* single item start */}
                                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-lft-sngl-itm">
                                                                        <h4>Printed</h4>
                                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-lft-datt">
                                                                            <h3><span>:</span> Yes</h3>
                                                                        </span>
                                                                    </div>
                                                                    {/* single item end */}
                                                                    {/* single item start */}
                                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-lft-sngl-itm">
                                                                        <h4>Tracking Email</h4>
                                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-lft-datt">
                                                                            <h3><span>:</span> useremail@gmail.com</h3>
                                                                        </span>
                                                                    </div>
                                                                    {/* single item end */}
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right">
                                                                    <h3>Invoice</h3>

                                                                    {/* single item start */}
                                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-rightt-sngl-itm">
                                                                        <h4>Sub Total</h4>
                                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-invp">
                                                                            <h3> <span>৳</span> 1468</h3>
                                                                        </span>
                                                                    </div>
                                                                    {/* single item end */}
                                                                    {/* single item start */}
                                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-rightt-sngl-itm">
                                                                        <h4>Discount <span>(10%)</span></h4>
                                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-invp">
                                                                            <h3> <span>-৳</span> 150</h3>
                                                                        </span>
                                                                    </div>
                                                                    {/* single item end */}
                                                                    {/* single item start */}
                                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-rightt-sngl-itm">
                                                                        <h4>Delivery Charge</h4>
                                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-invp">
                                                                            <h3> <span>+৳</span> 140</h3>
                                                                        </span>
                                                                    </div>
                                                                    {/* single item end */}
                                                                    {/* single item start */}
                                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-rightt-sngl-itm">
                                                                        <h4>Invoice Card Fee</h4>
                                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-invp">
                                                                            <h3> <span>৳</span> 0</h3>
                                                                        </span>
                                                                    </div>
                                                                    {/* single item end */}
                                                                    {/* single item start */}
                                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-rightt-sngl-itm">
                                                                        <h4>Invoice Total</h4>
                                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-invp">
                                                                            <h3> <span>৳</span> 1400</h3>
                                                                        </span>
                                                                    </div>
                                                                    {/* single item end */}
                                                                    {/* single item start */}
                                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-rightt-sngl-itm">
                                                                        <h4>Paid</h4>
                                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-invp">
                                                                            <h3> <span>-৳</span> 500</h3>
                                                                        </span>
                                                                    </div>
                                                                    {/* single item end */}
                                                                    {/* single item start */}
                                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-rightt-sngl-itm balance-clr">
                                                                        <h4>Balance (TK)</h4>
                                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-invp blnsab">
                                                                            <h3> <span>৳</span> 700</h3>
                                                                        </span>
                                                                    </div>
                                                                    {/* single item end */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab>
                                                <Tab eventKey="dasstatus" title="Status">
                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-lft-statusz">
                                                        {/* Head */}
                                                        <div className="obd-all-order-dettls-editdash-invoice-status-head-color-box-sec">
                                                            <div className="orponbd-order-summary-edit-status-bx-color-section-box">
                                                                <div className="orponbd-order-summary-edit-status-color-sectionn-paddv">
                                                                    <div className="orponbd-order-summary-edit-statuxs-bx-txtt-hd">
                                                                        <h4>Status</h4>
                                                                    </div>
                                                                </div>
                                                                <div className="orponbd-order-summary-edit-ordr-color-section-box-right-seeall-statuus-ab">
                                                                    <ul>
                                                                        <li>
                                                                            <select>
                                                                                <option value="" selected>Pending</option>
                                                                                <option value="">Pending 1</option>
                                                                                <option value="">Pending 2</option>
                                                                                <option value="">Pending 3</option>
                                                                            </select>
                                                                        </li>
                                                                        <li><button>Update</button></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Head */}
                                                        <div className="obd-all-order-details-editt-dashboard-main-section-orders-summary-table-sec statuss">
                                                            <table class="table table-bordered">
                                                                <thead style={{borderRadius: '8px'}}>
                                                                    <tr>
                                                                        <th style={{borderTopLeftRadius: '8px',borderBottomLeftRadius: '8px',textAlign: 'left', width:"25%"}} scope="col col-6">Date</th>
                                                                        <th style={{textAlign: 'left',}} scope="col col-6">Status</th>
                                                                        <th style={{textAlign: 'left',}} scope="col col-6">User</th>
                                                                        <th style={{borderTopRightRadius: '8px',borderBottomRightRadius: '8px',textAlign: 'left'}} scope="col col-6">Comments</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {/* single Item start */}
                                                                    <tr>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                Jan 20, 2021, 10:30 AM
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                Pending
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                User Name
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                Comments ...
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    {/* Single Item End */}

                                                                    {/* single Item start */}
                                                                    <tr>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                Jan 20, 2021, 10:30 AM
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                Pending
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                User Name
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                Comments ...
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    {/* Single Item End */}
                                                                    
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </Tab>
                                                <Tab eventKey="daspaymntdet" title="Payment Details">
                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-lft-statusz">
                                                        {/* Head */}
                                                        <div className="obd-all-order-dettls-editdash-invoice-status-head-color-box-sec">
                                                            <div className="orponbd-order-summary-edit-status-bx-color-section-box">
                                                                <div className="orponbd-order-summary-edit-status-color-sectionn-paddv">
                                                                    <div className="orponbd-order-summary-edit-statuxs-bx-txtt-hd">
                                                                        <h4>Payment Details</h4>
                                                                    </div>
                                                                </div>
                                                                <div className="orponbd-order-summary-edit-ordr-color-section-box-right-seeall-statuus-ab">
                                                                    <ul>
                                                                        <li className="orponbd-order-summary-edit-ordr-color-section-box-right-seeall-statuus-payment-dtls">
                                                                            <button><span><i class="far fa-paper-plane"></i></span>Send Invoice</button>
                                                                        </li>
                                                                        <li><button><span><i className="fas fa-plus"></i></span> Add Payment</button></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Head */}
                                                        <div className="obd-all-order-details-editt-dashboard-main-section-orders-summary-table-sec statuss">
                                                            <table class="table table-bordered">
                                                                <thead style={{borderRadius: '8px'}}>
                                                                    <tr>
                                                                        <th style={{borderTopLeftRadius: '8px',borderBottomLeftRadius: '8px',textAlign: 'left', width:"25%"}} scope="col col-6">Date</th>
                                                                        <th style={{textAlign: 'center',}} scope="col col-6">Transaction id</th>
                                                                        <th style={{textAlign: 'center',}} scope="col col-6">Amount</th>
                                                                        <th style={{textAlign: 'center',}} scope="col col-6">Status</th>
                                                                        <th style={{borderTopRightRadius: '8px',borderBottomRightRadius: '8px',textAlign: 'center'}} scope="col col-6">Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {/* single Item start */}
                                                                    <tr>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                Jan 20, 2021, 10:30 AM
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'center'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                #25478
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'center'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                ৳ 700
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'center'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item payment-dtls-stts">
                                                                                <button>Delivered</button>
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'center'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                Action
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    {/* Single Item End */}

                                                                    {/* single Item start */}
                                                                    <tr>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                Jan 20, 2021, 10:30 AM
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'center'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                #25478
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'center'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                ৳ 700
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'center'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item payment-dtls-stts">
                                                                                <button>Delivered</button>
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'center'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                Action
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    {/* Single Item End */}
                                                                    
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </Tab>
                                                <Tab eventKey="dasrefund" title="Refunds">
                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-lft-statusz">
                                                        {/* Head */}
                                                        <div className="obd-all-order-dettls-editdash-invoice-status-head-color-box-sec">
                                                            <div className="orponbd-order-summary-edit-status-bx-color-section-box">
                                                                <div className="orponbd-order-summary-edit-status-color-sectionn-paddv">
                                                                    <div className="orponbd-order-summary-edit-statuxs-bx-txtt-hd">
                                                                        <h4>Refunds</h4>
                                                                    </div>
                                                                </div>
                                                                <div className="orponbd-order-summary-edit-ordr-color-section-box-right-seeall-statuus-ab">
                                                                    <ul>
                                                                        <li><button><span><i className="fas fa-plus"></i></span> Add New</button></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Head */}
                                                        <div className="obd-all-order-details-editt-dashboard-main-section-orders-summary-table-sec statuss">
                                                            <table class="table table-bordered">
                                                                <thead style={{borderRadius: '8px'}}>
                                                                    <tr>
                                                                        <th style={{borderTopLeftRadius: '8px',borderBottomLeftRadius: '8px',textAlign: 'left', width:"25%"}} scope="col col-6">Date</th>
                                                                        <th style={{textAlign: 'left',}} scope="col col-6">Return</th>
                                                                        <th style={{textAlign: 'left',}} scope="col col-6">Amount</th>
                                                                        <th style={{textAlign: 'left',}} scope="col col-6">User</th>
                                                                        <th style={{textAlign: 'left',}} scope="col col-6">Attachment</th>
                                                                        <th style={{borderTopRightRadius: '8px',borderBottomRightRadius: '8px',textAlign: 'left'}} scope="col col-6">Comments</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {/* single Item start */}
                                                                    <tr>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                Jan 20, 2021, 10:30 AM
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                21354
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                ৳ 700
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                User Name
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item refund-pdf-prients">
                                                                                <button><span><i class="fas fa-print"></i></span> filename.pdf</button>
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                Comments ...
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    {/* Single Item End */}

                                                                    {/* single Item start */}
                                                                    <tr>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                Jan 20, 2021, 10:30 AM
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                21354
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                ৳ 700
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                User Name
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item refund-pdf-prients">
                                                                                <button><span><i class="fas fa-print"></i></span> filename.pdf</button>
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                Comments ...
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    {/* Single Item End */}
                                                                    
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </Tab>
                                                <Tab eventKey="dascomments" title="Comments">
                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-lft-statusz">
                                                        {/* Head */}
                                                        <div className="obd-all-order-dettls-editdash-invoice-status-head-color-box-sec">
                                                            <div className="orponbd-order-summary-edit-status-bx-color-section-box">
                                                                <div className="orponbd-order-summary-edit-status-color-sectionn-paddv">
                                                                    <div className="orponbd-order-summary-edit-statuxs-bx-txtt-hd">
                                                                        <h4>Comments</h4>
                                                                    </div>
                                                                </div>
                                                                <div className="orponbd-order-summary-edit-ordr-color-section-box-right-seeall-statuus-ab">
                                                                    <ul>
                                                                        <li><button><span><i className="fas fa-plus"></i></span> Add New</button></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Head */}
                                                        <div className="obd-all-order-details-editt-dashboard-main-section-orders-summary-table-sec statuss">
                                                            <table class="table table-bordered">
                                                                <thead style={{borderRadius: '8px'}}>
                                                                    <tr>
                                                                        <th style={{borderTopLeftRadius: '8px',borderBottomLeftRadius: '8px',textAlign: 'left', width:"25%"}} scope="col col-6">Date</th>
                                                                        <th style={{textAlign: 'left',}} scope="col col-6">User</th>
                                                                        <th style={{textAlign: 'left',}} scope="col col-6">Attachment</th>
                                                                        <th style={{borderTopRightRadius: '8px',borderBottomRightRadius: '8px',textAlign: 'left'}} scope="col col-6">Comments</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {/* single Item start */}
                                                                    <tr>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                Jan 20, 2021, 10:30 AM
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                User Name
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item refund-pdf-prients">
                                                                                <button><span><i class="fas fa-print"></i></span> filename.pdf</button>
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                Comments ...
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    {/* Single Item End */}
                                                                    
                                                                    {/* single Item start */}
                                                                    <tr>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                Jan 20, 2021, 10:30 AM
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                User Name
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item refund-pdf-prients">
                                                                                <button><span><i class="fas fa-print"></i></span> filename.pdf</button>
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                                                Comments ...
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    {/* Single Item End */}
                                                                    
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </Tab>
                                             </Tabs>
                                             </div>
                                         </div>
                                         <div className="col-md-4">
                                             <div className="obd-all-order-details-editt-dashboard-main-section-orders-custm-det-right">
                                                {/* Customer Details Head start */}
                                                <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-custm-detls">
                                                    <h4>Customer Details</h4>
                                                    <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-custm-dtls-ab">
                                                        <button>Edit</button>
                                                    </span>
                                                </div>
                                                {/* Customer Details Head end */}
                                                <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-custm-nm-addrs">
                                                    {/* Name start */}
                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-custm-fnm-hd">
                                                        <h4>First Name:</h4>
                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-custm-lnmhd-ab">
                                                            <h4>Last Name:</h4>
                                                        </span>
                                                    </div>
                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-custm-fnm-hd mnnam">
                                                        <h4>Anisur</h4>
                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-custm-lnmhd-ab mnab">
                                                            <h4>Rahman</h4>
                                                        </span>
                                                    </div>
                                                    {/* Name end */}

                                                    {/* Address Details start */}
                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-custm-addrs-dtls">
                                                        <h5>Address:</h5>
                                                        <p>
                                                            IDLC Finance Ltd., 1024, রহমত টাওয়ার, ৩য় তলা, চান্দনা চৌরাস্তা, (ব্রাক ব্যাংক এর বিল্ডিং এর
                                                            ৩য় তলা), টাংগাইল রোড, Gazipur Sadar, Gazipur., District - Gazipur, Upazila - Chandona
                                                            Chowrasta
                                                        </p>
                                                    </div>
                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-custm-addrs-dtls">
                                                        <h5>Email:</h5>
                                                        <h4>anis_r54@yahoo.com</h4>
                                                    </div>
                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-custm-addrs-dtls">
                                                        <h5>Contact No:</h5>
                                                        <h4>01911553348</h4>
                                                    </div>
                                                    {/* Address Details end */}
                                                </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 {/* Order Details Tab Section End ----------------*/}

                                 {/* Order Summary Start ----------------*/}
                                 <div className="obd-all-order-details-editt-dashboard-main-section-orders-summary-main-box">
                                     {/* Head */}
                                     <div className="obd-all-order-dettls-editdash-invoice-summary-head-color-box-sec">
                                        <div className="orponbd-order-summary-edit-ordr-bx-color-section-box">
                                            <div className="orponbd-order-summary-edit-ordr-color-sectionn-paddv">
                                                <div className="orponbd-order-summary-edit-ordr-bx-txtt-hd">
                                                    <h4>Order Summary</h4>
                                                    <div className="flltrr-bbttn-brdr-order-summary-edit-ordr"></div>
                                                </div>
                                            </div>
                                            <div className="orponbd-order-summary-edit-ordr-color-section-box-right-seeall-add-item-ab">
                                                <ul>
                                                    <li><button><span><i class="fas fa-plus"></i></span> Add Item</button></li>
                                                </ul>
                                            </div>
                                        </div>
                                     </div>
                                     {/* Head */}
                                     <div className="obd-all-order-details-editt-dashboard-main-section-orders-summary-table-sec">
                                        <table class="table table-bordered">
                                            <thead style={{borderRadius: '8px'}}>
                                                <tr>
                                                    <th style={{borderTopLeftRadius: '8px',borderBottomLeftRadius: '8px',textAlign: 'left', width:"30%"}} scope="col col-6">Item</th>
                                                    <th scope="col col-6">Color</th>
                                                    <th scope="col col-6">Size</th>
                                                    <th scope="col col-6">QTY</th>
                                                    <th scope="col col-6">Cost/unit</th>
                                                    <th style={{borderTopRightRadius: '8px',borderBottomRightRadius: '8px',textAlign: 'center'}} scope="col col-6">Total Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* single Item start */}
                                                <tr>
                                                    <td style={{textAlign: 'left'}}>
                                                        <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                            <select>
                                                                <option value="" selected>Fish Scale Plastic Tools.....</option>
                                                                <option value="">Fish Scale Plastic Tools 2.....</option>
                                                                <option value="">Fish Scale Plastic Tools 3.....</option>
                                                                <option value="">Fish Scale Plastic Tools 4.....</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                            <select>
                                                                <option value="" selected>Color</option>
                                                                <option value="">Color 1</option>
                                                                <option value="">Color 2</option>
                                                                <option value="">Color 3</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                            <select>
                                                                <option value="" selected>Size</option>
                                                                <option value="">Size 1</option>
                                                                <option value="">Size 2</option>
                                                                <option value="">Size 3</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                            <input type="text"/>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item-cst text-center">
                                                            <h4>12</h4>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item-total-amnt-and-settng">
                                                            <ul>
                                                                <li className="obd-all-order-dashboard-main-section-orders-summary-only-prices" style={{color: '#FF6347', fontWeight: '500'}}><p><span>৳ </span>750</p></li>
                                                                <li>
                                                                    <div className="obd-all-order-orders-summary-table-sec-item-total-amnt-and-settng-only-box">
                                                                        <div className="obd-all-order-orders-summary-table-sec-item-total-delete-only-icn">
                                                                            <button><span><i class="fas fa-times"></i></span></button>
                                                                        </div>
                                                                        <div className="obd-all-order-orders-summary-table-sec-item-total-setting-only-icn">
                                                                            {/* Modal Start */}
                                                                            <button onClick={this.handleShow}>
                                                                                <i class="fas fa-cog"></i>
                                                                            </button>
                                                                                <Modal show={this.state.show} onHide={this.handleClose}>
                                                                                    <Modal.Header closeButton>
                                                                                        {/* <Modal.Title>Modal heading</Modal.Title> */}
                                                                                    </Modal.Header>

                                                                                    <Modal.Body>
                                                                                        Modal Body
                                                                                    </Modal.Body>
                                                                                </Modal>
                                                                                {/* Modal End*/}
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {/* Single Item End */}
                                                {/* single Item start */}
                                                <tr>
                                                    <td style={{textAlign: 'left'}}>
                                                        <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                            <select>
                                                                <option value="" selected>Fish Scale Plastic Tools.....</option>
                                                                <option value="">Fish Scale Plastic Tools 2.....</option>
                                                                <option value="">Fish Scale Plastic Tools 3.....</option>
                                                                <option value="">Fish Scale Plastic Tools 4.....</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                            <select>
                                                                <option value="" selected>Color</option>
                                                                <option value="">Color 1</option>
                                                                <option value="">Color 2</option>
                                                                <option value="">Color 3</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                            <select>
                                                                <option value="" selected>Size</option>
                                                                <option value="">Size 1</option>
                                                                <option value="">Size 2</option>
                                                                <option value="">Size 3</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                            <input type="text"/>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item-cst text-center">
                                                            <h4>12</h4>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item-total-amnt-and-settng">
                                                            <ul>
                                                                <li className="obd-all-order-dashboard-main-section-orders-summary-only-prices" style={{color: '#FF6347', fontWeight: '500'}}><p><span>৳ </span>750</p></li>
                                                                <li>
                                                                    <div className="obd-all-order-orders-summary-table-sec-item-total-amnt-and-settng-only-box">
                                                                        <div className="obd-all-order-orders-summary-table-sec-item-total-delete-only-icn">
                                                                            <button><span><i class="fas fa-times"></i></span></button>
                                                                        </div>
                                                                        <div className="obd-all-order-orders-summary-table-sec-item-total-setting-only-icn">
                                                                             {/* Modal Start */}
                                                                             <button onClick={this.handleShow}>
                                                                                <i class="fas fa-cog"></i>
                                                                            </button>
                                                                                <Modal show={this.state.show} onHide={this.handleClose}>
                                                                                    <Modal.Header closeButton>
                                                                                        {/* <Modal.Title>Modal heading</Modal.Title> */}
                                                                                    </Modal.Header>

                                                                                    <Modal.Body>
                                                                                        Modal Body 2
                                                                                    </Modal.Body>
                                                                                </Modal>
                                                                                {/* Modal End*/}
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {/* Single Item End */}
                                                
                                            </tbody>
                                        </table>
                                     </div>
                                 </div>
                                 {/* Order Summary End ----------------*/}
                             </div>
                          </div>
                          {/* all order details invoice Edit end */} 

                        </div>
                    </div>
                </div>
            </div>

            </>
        )
    }
}
