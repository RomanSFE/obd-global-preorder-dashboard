import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import DashboardSidebar from '../dashboardsidebar/DashboardSidebar';
import DashboardTopBar from '../dashboardtopbar/DashboardTopBar';
import DashPagination from '../pagination/DashPagination';
import './allcategories.css'

export default class AllCategories extends Component {
      
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

                          {/* All Categories Start */}
                          <div className="obd-preorder-all-catz-main-box-addp">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="obd-preorder-all-catz-main-box-content">
                                        {/* Head sec start */}
                                        <div className="obd-preorder-bx-color-section-box">
                                            <div className="obd-preorder-bx-txtt-hd">
                                                <h4>All Categories</h4>
                                                <div className="flltrr-bbttn-brdr-preorderz"></div>
                                            </div>
                                        </div>
                                        {/* Head sec end */}

                                        {/* All Categories */}
                                        <div className="obd-preorder-all-catz-dashz-table-box">
                                            <table class="table table-bordered">
                                                <thead style={{borderRadius: '8px'}}>
                                                    <tr>
                                                        <th style={{borderTopLeftRadius: '8px',borderBottomLeftRadius: '8px',textAlign:'center'}} scope="col col-6">Id</th>
                                                        <th style={{width: '28%'}} scope="col col-6">Category Name</th>
                                                        <th style={{textAlign: 'center'}} scope="col col-6">Slug</th>
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
                                                            Category Full Name
                                                        </td>
                                                        <td style={{textAlign: 'center'}}>category-slug</td>
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
                                                                            <Link to="/edit-category"><i class="far fa-edit"></i></Link>
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
                                                            Category Full Name
                                                        </td>
                                                        <td style={{textAlign: 'center'}}>category-slug</td>
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
                                                                            <Link to="/edit-category"><i class="far fa-edit"></i></Link>
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
                                        {/* All Categories End */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                          {/* All Category End */}
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
