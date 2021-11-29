import React, { Component } from 'react'
import DashboardSidebar from '../dashboardsidebar/DashboardSidebar';
import DashboardTopBar from '../dashboardtopbar/DashboardTopBar';
import DashPagination from '../pagination/DashPagination';
import './dashallusers.css'

export default class DashAllUsers extends Component {
      
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

                          {/* Add Product Box Start */}
                          <div className="obd-recent-order-bx-product-and-new-user-dash-board-main-box-addp">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="obd-recent-order-bx-product-and-new-user-dash-board-main-box-content">
                                        {/* Head sec start */}
                                        <div className="orponbd-recent-order-bx-color-section-box">
                                            <div className="orponbd-recent-order-color-sectionn-paddv">
                                                <div className="orponbd-recent-order-bx-txtt-hd">
                                                    <h4>All Users</h4>
                                                    <div className="flltrr-bbttn-brdr-recent-orderxv"></div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Head sec end */}

                                        {/* All Users Box */}
                                        <div className="obd-recent-order-bx-product-and-new-user-dash-board-table-box">
                                            <table class="table table-bordered">
                                                <thead style={{borderRadius: '8px'}}>
                                                    <tr>
                                                        <th style={{borderTopLeftRadius: '8px',borderBottomLeftRadius: '8px'}} scope="col col-6">ID</th>
                                                        <th style={{width: '20%'}} scope="col col-6">User Name</th>
                                                        <th style={{width: '35%'}} scope="col col-6">Address</th>
                                                        <th style={{borderTopRightRadius: '8px',borderBottomRightRadius: '8px'}} scope="col col-6">Phone Number</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* single Item start */}
                                                    <tr>
                                                        <td>252545524</td>
                                                        <td>User Full Name</td>
                                                        <td>Full address here...</td>
                                                        <td style={{textAlign: 'left'}}>01748548955</td>
                                                    </tr>
                                                    {/* Single Item End */}
                                                    {/* single Item start */}
                                                    <tr>
                                                        <td>252545524</td>
                                                        <td>User Full Name</td>
                                                        <td>Full address here...</td>
                                                        <td style={{textAlign: 'left'}}>01748548955</td>
                                                    </tr>
                                                    {/* Single Item End */}
                                                    {/* single Item start */}
                                                    <tr>
                                                        <td>252545524</td>
                                                        <td>User Full Name</td>
                                                        <td>Full address here...</td>
                                                        <td style={{textAlign: 'left'}}>01748548955</td>
                                                    </tr>
                                                    {/* Single Item End */}
                                                    {/* single Item start */}
                                                    <tr>
                                                        <td>252545524</td>
                                                        <td>User Full Name</td>
                                                        <td>Full address here...</td>
                                                        <td style={{textAlign: 'left'}}>01748548955</td>
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
                                        {/* All Users Box End */}
                                    </div>
                                </div>
                                </div>
                            </div>
                          {/* Add Product Box End */}
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
