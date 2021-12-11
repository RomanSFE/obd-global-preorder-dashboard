import React, { Component } from 'react'
import DashboardSidebar from '../dashboardsidebar/DashboardSidebar';
import DashboardTopBar from '../dashboardtopbar/DashboardTopBar';
import './addcategory.css'


export default class AddCategory extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
      
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

                          {/* Add Category Start */}
                          <div className="obd-preorder-add-cat-dash-main-box">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="obd-preorder-add-cat-dash-box-content">
                                        {/* Head sec start */}
                                        <div className="obd-preorder-ct-bx-color-section-box">
                                                <div className="obd-preorder-ct-bx-txtt-hd">
                                                    <h4>Add Category</h4>
                                                    <div className="flltrr-bbttn-brdr-preorderz-ct"></div>
                                                </div>
                                        </div>
                                        {/* Head sec end */}

                                        {/* Add Product Field Box */}
                                        <form action="">
                                            <div className="obd-preorder-add-catg-bx-main-wrap">
                                                {/* Single Item Start */}
                                                <div className="row obd-preorder-add-catg-bx-sng-ex-pdz">
                                                    <div className="col-md-2">
                                                        <div className="obd-preorder-add-catg-bx-lft-hdtxt">
                                                            <h4>Category Name :</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <div className="obd-preorder-add-catg-bx-rt-inpt-fld">
                                                            <input type="text" placeholder="Enter Category Name.."/>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Single Item End */}

                                                {/* Save Button */}
                                                <div className="obd-add-prod-save-bbtn text-center">
                                                    {/* <div className="row"> */}
                                                        <button type="button">Add Category</button>
                                                    {/* </div> */}
                                                </div>
                                                {/* Save Button */}
                                            </div>
                                        </form>
                                        {/* Add Product Field Box End */}
                                    </div>
                                </div>
                                </div>
                            </div>
                          {/* Add Category End */}
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
