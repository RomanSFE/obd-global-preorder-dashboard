import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import DashboardSidebar from '../dashboardsidebar/DashboardSidebar'
import DashboardTopBar from '../dashboardtopbar/DashboardTopBar'
import './dashallproducts.css'
import { Tabs, Tab } from 'react-bootstrap'
import DashPagination from '../pagination/DashPagination';
import OrdersDatePicker from '../orders/ordersdatepicker/OrdersDatePicker';

export default class DashAllProducts extends Component {
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

                          {/* Tabs Section start */}
                          <div className="row obd-all-order-pages-dashboard-tabs-main-boxx">
                            <div className="col-md-12">
                              <div className="obd-all-order-pages-dashboard-tabs-main-boxx-content">
                                <div className="obd-all-order-pages-tabs-main-manage-order-hed">
                                  <h4>All Products</h4>
                                </div>
                                <Tabs defaultActiveKey="dashallproducts" id="uncontrolled-tab-example">
                                    <Tab eventKey="dashallproducts" title="All Products">
                                      <div className="obd-recent-order-bx-product-and-order-tabs-dash-board-main-box">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="obd-recent-order-bx-product-and-order-tabs-dash-board-main-box-content">
                                                    {/* Head sec start */}
                                                    <div className="orponbd-all-tabs-order-bx-color-section-box">
                                                        <div className="orponbd-all-tabs-order-color-sectionn-paddv">
                                                            <div className="orponbd-all-tabss-order-bx-txtt-hd">
                                                                <div className="orponbd-all-tabss-order-bx-txtt-hd-bboxx">
                                                                    <ul>
                                                                        <li><h4>All Products</h4></li>
                                                                        <li className="orponbd-all-tabss-order-bx-txtt-hd-bboxx-searchh-bx"><input type="search" placeholder="Search"/> <span><button type="submit"><i className="fas fa-search"></i></button></span></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="flltrr-bbttn-brdr-all-tabs-orderxv"></div>
                                                            </div>
                                                        </div>
                                                        <div className="orponbd-allxx-order-bx-color-section-box-right-seeall-export-ab">
                                                            <ul>
                                                                <li className="orponbd-allxx-order-bx-color-section-box-right-select-bx">
                                                                    <span>See: </span>
                                                                    <select>
                                                                        <option value="" selected>10 Entries</option>
                                                                        <option value="">50 Entries</option>
                                                                        <option value="">100 Entries</option>
                                                                        <option value="">200 Entries</option>
                                                                    </select>
                                                                </li>
                                                                <li><button>Export <span><i class="fas fa-long-arrow-alt-down"></i></span></button></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Head sec end */}
                                                    {/* Recent Order Table Box Start */}
                                                    <div className="obd-all-orders-order-bx-product-and-new-user-dash-board-table-box">
                                                        <table class="table table-bordered">
                                                            <thead style={{borderRadius: '8px'}}>
                                                                <tr>
                                                                    <th style={{borderTopLeftRadius: '8px',borderBottomLeftRadius: '8px',textAlign:'center'}} scope="col col-6">Id</th>
                                                                    <th style={{width: '28%'}} scope="col col-6">Product Name</th>
                                                                    <th style={{textAlign: 'center'}} scope="col col-6">SKU</th>
                                                                    <th style={{textAlign: 'center'}} scope="col col-6">Created</th>
                                                                    <th style={{textAlign: 'center'}} scope="col col-6">Price</th>
                                                                    <th style={{textAlign: 'center'}} scope="col col-6">Selling Price</th>
                                                                    <th style={{textAlign: 'center'}} scope="col col-6">Status</th>
                                                                    <th style={{borderTopRightRadius: '8px',borderBottomRightRadius: '8px', textAlignLast: 'center'}} scope="col col-6">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {/* single Item start */}
                                                                <tr>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        #215447
                                                                    </td>
                                                                    <td style={{textAlign: 'left'}}>
                                                                        <div className="obd-product-item-dash-img-bx">
                                                                            <div className="row obd-product-item-dash-img-ex-pxd">
                                                                                <div className="col-md-2">
                                                                                    <div className="obd-product-item-dash-img-sec">
                                                                                        <img src={require('../../../assets/women-fas-cat-6.png')} alt="orponbd online shop"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-10">
                                                                                    <div className="obd-product-item-dash-img-prod-txt">
                                                                                        <Link to="/">
                                                                                            product text Max Two Lines Here, Max Two..
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        SkU-10
                                                                    </td>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        15 Nov, 2021
                                                                    </td>
                                                                    <td style={{textAlign: 'center'}}>৳ 1700</td>
                                                                    <td style={{textAlign: 'center'}}>৳ 2400</td>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        <div className="obd-all-store-list-dash-sng-act-ck-stats">
                                                                            <label className="switch">
                                                                                <input type="checkbox"/>
                                                                                <span className="slider round"></span>
                                                                            </label>
                                                                        </div>
                                                                    </td>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        <div className="obd-alll-orderx-bx-product-and-action-bx-main-box">
                                                                            <ul>
                                                                                <li>
                                                                                    <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                        <Link to="/dashboard-invoice-details"><i class="far fa-eye"></i></Link>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                        <Link to="/"><i class="fas fa-trash"></i></Link>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                {/* Single Item End */}
                                                                {/* single Item start */}
                                                                <tr>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        #215447
                                                                    </td>
                                                                    <td style={{textAlign: 'left'}}>
                                                                        <div className="obd-product-item-dash-img-bx">
                                                                            <div className="row obd-product-item-dash-img-ex-pxd">
                                                                                <div className="col-md-2">
                                                                                    <div className="obd-product-item-dash-img-sec">
                                                                                        <img src={require('../../../assets/women-fas-cat-7.png')} alt="orponbd online shop"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-10">
                                                                                    <div className="obd-product-item-dash-img-prod-txt">
                                                                                        <Link to="/">
                                                                                            product text Max Two Lines Here, Max Two..
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        SkU-10
                                                                    </td>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        15 Nov, 2021
                                                                    </td>
                                                                    <td style={{textAlign: 'center'}}>৳ 1700</td>
                                                                    <td style={{textAlign: 'center'}}>৳ 2400</td>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        <div className="obd-all-store-list-dash-sng-act-ck-stats">
                                                                            <label className="switch">
                                                                                <input type="checkbox"/>
                                                                                <span className="slider round"></span>
                                                                            </label>
                                                                        </div>
                                                                    </td>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        <div className="obd-alll-orderx-bx-product-and-action-bx-main-box">
                                                                            <ul>
                                                                                <li>
                                                                                    <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                        <Link to="/dashboard-invoice-details"><i class="far fa-eye"></i></Link>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                        <Link to="/"><i class="fas fa-trash"></i></Link>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
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
                                    </Tab>
                                    <Tab eventKey="dashactiveprod" title="Active Products">
                                        <div className="obd-recent-order-bx-product-and-order-tabs-dash-board-main-box">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="obd-recent-order-bx-product-and-order-tabs-dash-board-main-box-content">
                                                        {/* Head sec start */}
                                                        <div className="orponbd-all-tabs-order-bx-color-section-box">
                                                            <div className="orponbd-all-tabs-order-color-sectionn-paddv">
                                                                <div className="orponbd-all-tabss-order-bx-txtt-hd">
                                                                    <div className="orponbd-all-tabss-order-bx-txtt-hd-bboxx">
                                                                        <ul>
                                                                            <li><h4>Active</h4></li>
                                                                            <li className="orponbd-all-tabss-order-bx-txtt-hd-bboxx-searchh-bx"><input type="search" placeholder="Search"/> <span><button type="submit"><i className="fas fa-search"></i></button></span></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="flltrr-bbttn-brdr-all-tabs-orderxv"></div>
                                                                </div>
                                                            </div>
                                                            <div className="orponbd-allxx-order-bx-color-section-box-right-seeall-export-ab">
                                                                <ul>
                                                                    <li className="orponbd-allxx-order-bx-color-section-box-right-select-bx">
                                                                        <span>See: </span>
                                                                        <select>
                                                                            <option value="" selected>10 Entries</option>
                                                                            <option value="">50 Entries</option>
                                                                            <option value="">100 Entries</option>
                                                                            <option value="">200 Entries</option>
                                                                        </select>
                                                                    </li>
                                                                    <li><button>Export <span><i class="fas fa-long-arrow-alt-down"></i></span></button></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        {/* Head sec end */}
                                                        {/* Recent Order Table Box Start */}
                                                        <div className="obd-all-orders-order-bx-product-and-new-user-dash-board-table-box">
                                                            <table class="table table-bordered">
                                                                <thead style={{borderRadius: '8px'}}>
                                                                    <tr>
                                                                        <th style={{borderTopLeftRadius: '8px',borderBottomLeftRadius: '8px',textAlign:'center'}} scope="col col-6">Id</th>
                                                                        <th style={{width: '28%'}} scope="col col-6">Product Name</th>
                                                                        <th style={{textAlign: 'center'}} scope="col col-6">SKU</th>
                                                                        <th style={{textAlign: 'center'}} scope="col col-6">Created</th>
                                                                        <th style={{textAlign: 'center'}} scope="col col-6">Price</th>
                                                                        <th style={{textAlign: 'center'}} scope="col col-6">Selling Price</th>
                                                                        <th style={{textAlign: 'center'}} scope="col col-6">Status</th>
                                                                        <th style={{borderTopRightRadius: '8px',borderBottomRightRadius: '8px', textAlignLast: 'center'}} scope="col col-6">Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {/* single Item start */}
                                                                    <tr>
                                                                        <td style={{textAlign: 'center'}}>
                                                                            #215447
                                                                        </td>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-product-item-dash-img-bx">
                                                                                <div className="row obd-product-item-dash-img-ex-pxd">
                                                                                    <div className="col-md-2">
                                                                                        <div className="obd-product-item-dash-img-sec">
                                                                                            <img src={require('../../../assets/women-fas-cat-2.png')} alt="orponbd online shop"/>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-md-10">
                                                                                        <div className="obd-product-item-dash-img-prod-txt">
                                                                                            <Link to="/">
                                                                                                product text Max Two Lines Here, Max Two..
                                                                                            </Link>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'center'}}>
                                                                            SkU-10
                                                                        </td>
                                                                        <td style={{textAlign: 'center'}}>
                                                                            15 Nov, 2021
                                                                        </td>
                                                                        <td style={{textAlign: 'center'}}>৳ 1700</td>
                                                                        <td style={{textAlign: 'center'}}>৳ 2400</td>
                                                                        <td style={{textAlign: 'center'}}>
                                                                            <div className="obd-all-store-list-dash-sng-act-ck-stats">
                                                                                <label className="switch">
                                                                                    <input type="checkbox"/>
                                                                                    <span className="slider round"></span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'center'}}>
                                                                            <div className="obd-alll-orderx-bx-product-and-action-bx-main-box">
                                                                                <ul>
                                                                                    <li>
                                                                                        <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                            <Link to="/dashboard-invoice-details"><i class="far fa-eye"></i></Link>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                            <Link to="/"><i class="fas fa-trash"></i></Link>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    {/* Single Item End */}
                                                                    {/* single Item start */}
                                                                    <tr>
                                                                        <td style={{textAlign: 'center'}}>
                                                                            #215447
                                                                        </td>
                                                                        <td style={{textAlign: 'left'}}>
                                                                            <div className="obd-product-item-dash-img-bx">
                                                                                <div className="row obd-product-item-dash-img-ex-pxd">
                                                                                    <div className="col-md-2">
                                                                                        <div className="obd-product-item-dash-img-sec">
                                                                                            <img src={require('../../../assets/women-fas-cat-3.png')} alt="orponbd online shop"/>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-md-10">
                                                                                        <div className="obd-product-item-dash-img-prod-txt">
                                                                                            <Link to="/">
                                                                                                product text Max Two Lines Here, Max Two..
                                                                                            </Link>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'center'}}>
                                                                            SkU-10
                                                                        </td>
                                                                        <td style={{textAlign: 'center'}}>
                                                                            15 Nov, 2021
                                                                        </td>
                                                                        <td style={{textAlign: 'center'}}>৳ 1700</td>
                                                                        <td style={{textAlign: 'center'}}>৳ 2400</td>
                                                                        <td style={{textAlign: 'center'}}>
                                                                            <div className="obd-all-store-list-dash-sng-act-ck-stats">
                                                                                <label className="switch">
                                                                                    <input type="checkbox"/>
                                                                                    <span className="slider round"></span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'center'}}>
                                                                            <div className="obd-alll-orderx-bx-product-and-action-bx-main-box">
                                                                                <ul>
                                                                                    <li>
                                                                                        <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                            <Link to="/dashboard-invoice-details"><i class="far fa-eye"></i></Link>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                            <Link to="/"><i class="fas fa-trash"></i></Link>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
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
                                    </Tab>
                                    <Tab eventKey="dashinactive" title="Inactive Products">
                                    <div className="obd-recent-order-bx-product-and-order-tabs-dash-board-main-box">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="obd-recent-order-bx-product-and-order-tabs-dash-board-main-box-content">
                                                    {/* Head sec start */}
                                                    <div className="orponbd-all-tabs-order-bx-color-section-box">
                                                        <div className="orponbd-all-tabs-order-color-sectionn-paddv">
                                                            <div className="orponbd-all-tabss-order-bx-txtt-hd">
                                                                <div className="orponbd-all-tabss-order-bx-txtt-hd-bboxx">
                                                                    <ul>
                                                                        <li><h4>Inactive</h4></li>
                                                                        <li className="orponbd-all-tabss-order-bx-txtt-hd-bboxx-searchh-bx"><input type="search" placeholder="Search"/> <span><button type="submit"><i className="fas fa-search"></i></button></span></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="flltrr-bbttn-brdr-all-tabs-orderxv"></div>
                                                            </div>
                                                        </div>
                                                        <div className="orponbd-allxx-order-bx-color-section-box-right-seeall-export-ab">
                                                            <ul>
                                                                <li className="orponbd-allxx-order-bx-color-section-box-right-select-bx">
                                                                    <span>See: </span>
                                                                    <select>
                                                                        <option value="" selected>10 Entries</option>
                                                                        <option value="">50 Entries</option>
                                                                        <option value="">100 Entries</option>
                                                                        <option value="">200 Entries</option>
                                                                    </select>
                                                                </li>
                                                                <li><button>Export <span><i class="fas fa-long-arrow-alt-down"></i></span></button></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Head sec end */}
                                                    {/* Recent Order Table Box Start */}
                                                    <div className="obd-all-orders-order-bx-product-and-new-user-dash-board-table-box">
                                                    <table class="table table-bordered">
                                                            <thead style={{borderRadius: '8px'}}>
                                                                <tr>
                                                                    <th style={{borderTopLeftRadius: '8px',borderBottomLeftRadius: '8px',textAlign:'center'}} scope="col col-6">Id</th>
                                                                    <th style={{width: '28%'}} scope="col col-6">Product Name</th>
                                                                    <th style={{textAlign: 'center'}} scope="col col-6">SKU</th>
                                                                    <th style={{textAlign: 'center'}} scope="col col-6">Created</th>
                                                                    <th style={{textAlign: 'center'}} scope="col col-6">Price</th>
                                                                    <th style={{textAlign: 'center'}} scope="col col-6">Selling Price</th>
                                                                    <th style={{textAlign: 'center'}} scope="col col-6">Status</th>
                                                                    <th style={{borderTopRightRadius: '8px',borderBottomRightRadius: '8px', textAlignLast: 'center'}} scope="col col-6">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {/* single Item start */}
                                                                <tr>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        #215447
                                                                    </td>
                                                                    <td style={{textAlign: 'left'}}>
                                                                        <div className="obd-product-item-dash-img-bx">
                                                                            <div className="row obd-product-item-dash-img-ex-pxd">
                                                                                <div className="col-md-2">
                                                                                    <div className="obd-product-item-dash-img-sec">
                                                                                        <img src={require('../../../assets/women-fas-cat-4.png')} alt="orponbd online shop"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-10">
                                                                                    <div className="obd-product-item-dash-img-prod-txt">
                                                                                        <Link to="/">
                                                                                            product text Max Two Lines Here, Max Two..
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        SkU-10
                                                                    </td>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        15 Nov, 2021
                                                                    </td>
                                                                    <td style={{textAlign: 'center'}}>৳ 1700</td>
                                                                    <td style={{textAlign: 'center'}}>৳ 2400</td>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        <div className="obd-all-store-list-dash-sng-act-ck-stats">
                                                                            <label className="switch">
                                                                                <input type="checkbox"/>
                                                                                <span className="slider round"></span>
                                                                            </label>
                                                                        </div>
                                                                    </td>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        <div className="obd-alll-orderx-bx-product-and-action-bx-main-box">
                                                                            <ul>
                                                                                <li>
                                                                                    <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                        <Link to="/dashboard-invoice-details"><i class="far fa-eye"></i></Link>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                        <Link to="/"><i class="fas fa-trash"></i></Link>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                {/* Single Item End */}
                                                                {/* single Item start */}
                                                                <tr>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        #215447
                                                                    </td>
                                                                    <td style={{textAlign: 'left'}}>
                                                                        <div className="obd-product-item-dash-img-bx">
                                                                            <div className="row obd-product-item-dash-img-ex-pxd">
                                                                                <div className="col-md-2">
                                                                                    <div className="obd-product-item-dash-img-sec">
                                                                                        <img src={require('../../../assets/women-fas-cat-5.png')} alt="orponbd online shop"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-10">
                                                                                    <div className="obd-product-item-dash-img-prod-txt">
                                                                                        <Link to="/">
                                                                                            product text Max Two Lines Here, Max Two..
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        SkU-10
                                                                    </td>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        15 Nov, 2021
                                                                    </td>
                                                                    <td style={{textAlign: 'center'}}>৳ 1700</td>
                                                                    <td style={{textAlign: 'center'}}>৳ 2400</td>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        <div className="obd-all-store-list-dash-sng-act-ck-stats">
                                                                            <label className="switch">
                                                                                <input type="checkbox"/>
                                                                                <span className="slider round"></span>
                                                                            </label>
                                                                        </div>
                                                                    </td>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        <div className="obd-alll-orderx-bx-product-and-action-bx-main-box">
                                                                            <ul>
                                                                                <li>
                                                                                    <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                        <Link to="/dashboard-invoice-details"><i class="far fa-eye"></i></Link>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                        <Link to="/"><i class="fas fa-trash"></i></Link>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
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
                                    </Tab>
                                </Tabs>
                                <div className="obd-all-order-pages-tabs-main-manage-order-date-ppckr">
                                  <OrdersDatePicker/>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Tabs Section start */} 

                        </div>
                    </div>
                </div>
            </div>

            </>
        )
    }
}
