import React, { Component } from 'react'
import DashboardSidebar from '../dashboardsidebar/DashboardSidebar';
import DashboardTopBar from '../dashboardtopbar/DashboardTopBar';
import DashPagination from '../pagination/DashPagination';
import './gallery.css'

export default class DashGallery extends Component {
      
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
                          <div className="obd-dash-gallery-main-box-addp">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="obd-dash-gallery-main-box-addp-content">
                                        {/* Head sec start */}
                                        <div className="orponbd-gallery-bx-color-section-box">
                                            <div className="orponbd-recent-order-color-sectionn-paddv">
                                                <div className="orponbd-recent-order-bx-txtt-hd">
                                                    <h4>Media Gallery</h4>
                                                    <div className="flltrr-bbttn-brdr-recent-orderxv"></div>
                                                </div>
                                            </div>
                                            {/* Right Ab Search */}
                                            <div className="obd-gallery-dash-right-secz">
                                                <ul>
                                                    <li className="obd-media-xgalleryy-upload-bx">
                                                        <label htmlFor="file-upload" class="custom-file-upload">
                                                            <i class="fa fa-cloud-upload"></i> Upload
                                                        </label>
                                                        <input id="file-upload" type="file"/>
                                                    </li>
                                                    <li className="obd-media-xgalleryy-searchh-bx">
                                                        <input type="search" placeholder="Search"/> <span><button type="submit"><i className="fas fa-search"></i></button></span>
                                                    </li>

                                                </ul>
                                            </div>
                                            {/* Right Ab Search */}
                                        </div>
                                        {/* Head sec end */}

                                        {/* Gallery Box */}
                                        <div className="obd-gallery-main-sec-cont-box">
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <div className="obd-gallery-main-cont-left-all-box">
                                                        {/* Row Start */}
                                                        <div className="row obd-media-xgalleryy-tab-section-bx-tabb-exx-pddd">
                                                            {/* Single Item */}
                                                            <div class="col-md-3">
                                                                <div class="obd-media-xgalleryy-tab-section-bx-tabb-content">
                                                                    <div class="obd-media-xgalleryy-tab-section-content-overlay"></div>
                                                                    <img src={require('../../../assets/global-shoppng-23.png')} alt="orponbd online shop"/>
                                                                    
                                                                    <div class="obd-media-xgalleryy-edit-check">
                                                                        <input type="checkbox" />
                                                                    </div>

                                                                    <div class="obd-media-xgalleryy-edit-details fadeIn-top">
                                                                        <button type="submit"><i class="fas fa-edit"></i></button>
                                                                    </div>
                                                                    
                                                                    <div class="obd-media-xgalleryy-tab-content-details fadeIn-top">
                                                                        <h3 class="obd-media-xgalleryy-content-dlt-btn">
                                                                            <button type="submit"><i class="far fa-trash-alt"></i></button>
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* single item end */}
                                                            {/* Single Item */}
                                                            <div class="col-md-3">
                                                                <div class="obd-media-xgalleryy-tab-section-bx-tabb-content">
                                                                    <div class="obd-media-xgalleryy-tab-section-content-overlay"></div>
                                                                    <img src={require('../../../assets/global-shoppng-22.png')} alt="orponbd online shop"/>
                                                                    
                                                                    <div class="obd-media-xgalleryy-edit-check">
                                                                        <input type="checkbox" />
                                                                    </div>
                                                                    <div class="obd-media-xgalleryy-edit-details fadeIn-top">
                                                                        <button type="submit"><i class="fas fa-edit"></i></button>
                                                                    </div>
                                                                    <div class="obd-media-xgalleryy-tab-content-details fadeIn-top">
                                                                        <h3 class="obd-media-xgalleryy-content-dlt-btn">
                                                                            <button type="submit"><i class="far fa-trash-alt"></i></button>
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* single item end */}
                                                            {/* Single Item */}
                                                            <div class="col-md-3">
                                                                <div class="obd-media-xgalleryy-tab-section-bx-tabb-content">
                                                                    <div class="obd-media-xgalleryy-tab-section-content-overlay"></div>
                                                                    <img src={require('../../../assets/global-shoppng-21.png')} alt="orponbd online shop"/>
                                                                    
                                                                    <div class="obd-media-xgalleryy-edit-check">
                                                                        <input type="checkbox" />
                                                                    </div>
                                                                    <div class="obd-media-xgalleryy-edit-details fadeIn-top">
                                                                        <button type="submit"><i class="fas fa-edit"></i></button>
                                                                    </div>
                                                                    <div class="obd-media-xgalleryy-tab-content-details fadeIn-top">
                                                                        <h3 class="obd-media-xgalleryy-content-dlt-btn">
                                                                            <button type="submit"><i class="far fa-trash-alt"></i></button>
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* single item end */}
                                                            {/* Single Item */}
                                                            <div class="col-md-3">
                                                                <div class="obd-media-xgalleryy-tab-section-bx-tabb-content">
                                                                    <div class="obd-media-xgalleryy-tab-section-content-overlay"></div>
                                                                    <img src={require('../../../assets/global-shoppng-23.png')} alt="orponbd online shop"/>
                                                                    
                                                                    <div class="obd-media-xgalleryy-edit-check">
                                                                        <input type="checkbox" />
                                                                    </div>
                                                                    <div class="obd-media-xgalleryy-edit-details fadeIn-top">
                                                                        <button type="submit"><i class="fas fa-edit"></i></button>
                                                                    </div>
                                                                    <div class="obd-media-xgalleryy-tab-content-details fadeIn-top">
                                                                        <h3 class="obd-media-xgalleryy-content-dlt-btn">
                                                                            <button type="submit"><i class="far fa-trash-alt"></i></button>
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* single item end */}
                                                        </div>
                                                        {/* Row End */}
                                                        {/* Row Start */}
                                                        <div className="row obd-media-xgalleryy-tab-section-bx-tabb-exx-pddd">
                                                            {/* Single Item */}
                                                            <div class="col-md-3">
                                                                <div class="obd-media-xgalleryy-tab-section-bx-tabb-content">
                                                                    <div class="obd-media-xgalleryy-tab-section-content-overlay"></div>
                                                                    <img src={require('../../../assets/women-fas-cat-2.png')} alt="orponbd online shop"/>
                                                                    
                                                                    <div class="obd-media-xgalleryy-edit-check">
                                                                        <input type="checkbox" />
                                                                    </div>
                                                                    <div class="obd-media-xgalleryy-edit-details fadeIn-top">
                                                                        <button type="submit"><i class="fas fa-edit"></i></button>
                                                                    </div>
                                                                    
                                                                    <div class="obd-media-xgalleryy-tab-content-details fadeIn-top">
                                                                        <h3 class="obd-media-xgalleryy-content-dlt-btn">
                                                                            <button type="submit"><i class="far fa-trash-alt"></i></button>
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* single item end */}
                                                            {/* Single Item */}
                                                            <div class="col-md-3">
                                                                <div class="obd-media-xgalleryy-tab-section-bx-tabb-content">
                                                                    <div class="obd-media-xgalleryy-tab-section-content-overlay"></div>
                                                                    <img src={require('../../../assets/women-fas-cat-3.png')} alt="orponbd online shop"/>
                                                                    
                                                                    <div class="obd-media-xgalleryy-edit-check">
                                                                        <input type="checkbox" />
                                                                    </div>
                                                                    <div class="obd-media-xgalleryy-edit-details fadeIn-top">
                                                                        <button type="submit"><i class="fas fa-edit"></i></button>
                                                                    </div>
                                                                    <div class="obd-media-xgalleryy-tab-content-details fadeIn-top">
                                                                        <h3 class="obd-media-xgalleryy-content-dlt-btn">
                                                                            <button type="submit"><i class="far fa-trash-alt"></i></button>
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* single item end */}
                                                            {/* Single Item */}
                                                            <div class="col-md-3">
                                                                <div class="obd-media-xgalleryy-tab-section-bx-tabb-content">
                                                                    <div class="obd-media-xgalleryy-tab-section-content-overlay"></div>
                                                                    <img src={require('../../../assets/women-fas-cat-5.png')} alt="orponbd online shop"/>
                                                                    
                                                                    <div class="obd-media-xgalleryy-edit-check">
                                                                        <input type="checkbox" />
                                                                    </div>
                                                                    <div class="obd-media-xgalleryy-edit-details fadeIn-top">
                                                                        <button type="submit"><i class="fas fa-edit"></i></button>
                                                                    </div>
                                                                    <div class="obd-media-xgalleryy-tab-content-details fadeIn-top">
                                                                        <h3 class="obd-media-xgalleryy-content-dlt-btn">
                                                                            <button type="submit"><i class="far fa-trash-alt"></i></button>
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* single item end */}
                                                            {/* Single Item */}
                                                            <div class="col-md-3">
                                                                <div class="obd-media-xgalleryy-tab-section-bx-tabb-content">
                                                                    <div class="obd-media-xgalleryy-tab-section-content-overlay"></div>
                                                                    <img src={require('../../../assets/global-shoppng-23.png')} alt="orponbd online shop"/>
                                                                    
                                                                    <div class="obd-media-xgalleryy-edit-check">
                                                                        <input type="checkbox" />
                                                                    </div>
                                                                    <div class="obd-media-xgalleryy-edit-details fadeIn-top">
                                                                        <button type="submit"><i class="fas fa-edit"></i></button>
                                                                    </div>
                                                                    <div class="obd-media-xgalleryy-tab-content-details fadeIn-top">
                                                                        <h3 class="obd-media-xgalleryy-content-dlt-btn">
                                                                            <button type="submit"><i class="far fa-trash-alt"></i></button>
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* single item end */}
                                                        </div>
                                                        {/* Row End */}
                                                    </div>

                                                    {/* Pagination Start */}
                                                    <div className="obd-preorder-dash-pagination">
                                                        <DashPagination/>
                                                    </div>
                                                    {/* Pagination End */}
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="obd-dash-gl-img-edit-main-bx">
                                                        <div className="obd-dash-gl-img-edit-img">
                                                            <h3>Image Details</h3>
                                                            <img src={require('../../../assets/global-shoppng-22.png')} alt="orponbd online shop"/>
                                                        </div>
                                                        <div className="obd-dash-gl-img-edit-img-cont">
                                                            {/* Single Item */}
                                                            <div className="obd-dash-gl-img-edit-img-cont-sngl">
                                                                <label htmlFor="">Alt Text</label>
                                                                <input type="text" placeholder="Alt Text Here.." />
                                                            </div>
                                                            {/* Single Item End */}
                                                            <div className="obd-dash-gl-img-edit-img-up-btn">
                                                                <button type="submit">Update</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Gallery Box End */}
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
