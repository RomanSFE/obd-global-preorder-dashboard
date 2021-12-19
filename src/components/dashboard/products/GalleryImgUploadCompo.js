import React, { Component } from 'react'
import './galleryimguploadcomp.css'
import ImageUploadCompo from './ImageUploadCompo';

import Modal from 'react-bootstrap/Modal';
import DashPagination from '../pagination/DashPagination';

export default class GalleryImgUploadCompo extends Component {
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
            <div className="image-uplod-modal-main-wrap">
                <div className="obd-main-img-uppld-mn-btn">
                    <button type="button" onClick={this.handleShow}>
                        <p><i className="fas fa-upload"></i></p>
                        Upload Image
                    </button>
                </div>                             

                {/* Modal Start */}
                <Modal size="large" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header className="obd-preorder-mdl-cls-bx" closeButton></Modal.Header>
                    
                    <Modal.Body>
                        {/* Add Product Box Start */}
                        <div className="obd-dash-img-upld-main-box-addp">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="obd-dash-img-upld-main-box-content">
                                        {/* Head sec start */}
                                        <div className="obd-dash-img-upld-bx-color-section-box">
                                            <div className="obd-dash-img-upld-sectionn-paddv">
                                                <div className="obd-dash-img-upld-bx-txtt-hd">
                                                    <h4>Media Gallery</h4>
                                                    <div className="flltrr-bbttn-brdr-img-upld"></div>
                                                </div>
                                            </div>
                                            {/* Right Ab Search */}
                                            <div className="obd-immg-upld-dash-right-secz">
                                                <ul>
                                                    <li className="obd-immg-upld-dash-searchh-bx">
                                                        <input type="search" placeholder="Search"/> <span><button type="submit"><i className="fas fa-search"></i></button></span>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* Right Ab Search */}
                                        </div>
                                        {/* Head sec end */}

                                        {/* Gallery Box */}
                                        <div className="obd-img-uppld-main-sec-cont-box">
                                            <div className="row">
                                                <div className="col-md-9">

                                                    <ImageUploadCompo/>

                                                    <div className="obd-img-upld-cont-left-all-box">
                                                        <div className="row obd-media-img-uplld-bx-tabb-exx-pddd">
                                                            <div class="col-md-3">
                                                                <div class="obd-media-img-uxpld-bx-tabb-content">
                                                                    <div class="obd-media-img-uxpld-content-overlay"></div>
                                                                    <img src={require('../../../assets/global-shoppng-23.png')} alt="orponbd online shop"/>
                                                                    
                                                                    <div class="obd-media-img-upld-edit-check">
                                                                        <input type="checkbox" />
                                                                    </div>

                                                                    <div class="obd-media-img-uplld-edit-details fadeIn-top">
                                                                        <button type="submit"><i class="fas fa-edit"></i></button>
                                                                    </div>
                                                                    
                                                                    <div class="obd-media-img-uppld-content-details fadeIn-top">
                                                                        <h3 class="obd-media-img-upld-content-dlt-btn">
                                                                            <button type="submit"><i class="far fa-trash-alt"></i></button>
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3">
                                                                <div class="obd-media-img-uxpld-bx-tabb-content">
                                                                    <div class="obd-media-img-uxpld-content-overlay"></div>
                                                                    <img src={require('../../../assets/global-shoppng-22.png')} alt="orponbd online shop"/>
                                                                    
                                                                    <div class="obd-media-img-upld-edit-check">
                                                                        <input type="checkbox" />
                                                                    </div>

                                                                    <div class="obd-media-img-uplld-edit-details fadeIn-top">
                                                                        <button type="submit"><i class="fas fa-edit"></i></button>
                                                                    </div>
                                                                    
                                                                    <div class="obd-media-img-uppld-content-details fadeIn-top">
                                                                        <h3 class="obd-media-img-upld-content-dlt-btn">
                                                                            <button type="submit"><i class="far fa-trash-alt"></i></button>
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3">
                                                                <div class="obd-media-img-uxpld-bx-tabb-content">
                                                                    <div class="obd-media-img-uxpld-content-overlay"></div>
                                                                    <img src={require('../../../assets/global-shoppng-21.png')} alt="orponbd online shop"/>
                                                                    
                                                                    <div class="obd-media-img-upld-edit-check">
                                                                        <input type="checkbox" />
                                                                    </div>

                                                                    <div class="obd-media-img-uplld-edit-details fadeIn-top">
                                                                        <button type="submit"><i class="fas fa-edit"></i></button>
                                                                    </div>
                                                                    
                                                                    <div class="obd-media-img-uppld-content-details fadeIn-top">
                                                                        <h3 class="obd-media-img-upld-content-dlt-btn">
                                                                            <button type="submit"><i class="far fa-trash-alt"></i></button>
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3">
                                                                <div class="obd-media-img-uxpld-bx-tabb-content">
                                                                    <div class="obd-media-img-uxpld-content-overlay"></div>
                                                                    <img src={require('../../../assets/global-shoppng-23.png')} alt="orponbd online shop"/>
                                                                    
                                                                    <div class="obd-media-img-upld-edit-check">
                                                                        <input type="checkbox" />
                                                                    </div>

                                                                    <div class="obd-media-img-uplld-edit-details fadeIn-top">
                                                                        <button type="submit"><i class="fas fa-edit"></i></button>
                                                                    </div>
                                                                    
                                                                    <div class="obd-media-img-uppld-content-details fadeIn-top">
                                                                        <h3 class="obd-media-img-upld-content-dlt-btn">
                                                                            <button type="submit"><i class="far fa-trash-alt"></i></button>
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row obd-media-img-uplld-bx-tabb-exx-pddd">
                                                            <div class="col-md-3">
                                                                <div class="obd-media-img-uxpld-bx-tabb-content">
                                                                    <div class="obd-media-img-uxpld-content-overlay"></div>
                                                                    <img src={require('../../../assets/global-shoppng-21.png')} alt="orponbd online shop"/>
                                                                    
                                                                    <div class="obd-media-img-upld-edit-check">
                                                                        <input type="checkbox" />
                                                                    </div>

                                                                    <div class="obd-media-img-uplld-edit-details fadeIn-top">
                                                                        <button type="submit"><i class="fas fa-edit"></i></button>
                                                                    </div>
                                                                    
                                                                    <div class="obd-media-img-uppld-content-details fadeIn-top">
                                                                        <h3 class="obd-media-img-upld-content-dlt-btn">
                                                                            <button type="submit"><i class="far fa-trash-alt"></i></button>
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3">
                                                                <div class="obd-media-img-uxpld-bx-tabb-content">
                                                                    <div class="obd-media-img-uxpld-content-overlay"></div>
                                                                    <img src={require('../../../assets/global-shoppng-23.png')} alt="orponbd online shop"/>
                                                                    
                                                                    <div class="obd-media-img-upld-edit-check">
                                                                        <input type="checkbox" />
                                                                    </div>

                                                                    <div class="obd-media-img-uplld-edit-details fadeIn-top">
                                                                        <button type="submit"><i class="fas fa-edit"></i></button>
                                                                    </div>
                                                                    
                                                                    <div class="obd-media-img-uppld-content-details fadeIn-top">
                                                                        <h3 class="obd-media-img-upld-content-dlt-btn">
                                                                            <button type="submit"><i class="far fa-trash-alt"></i></button>
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3">
                                                                <div class="obd-media-img-uxpld-bx-tabb-content">
                                                                    <div class="obd-media-img-uxpld-content-overlay"></div>
                                                                    <img src={require('../../../assets/global-shoppng-23.png')} alt="orponbd online shop"/>
                                                                    
                                                                    <div class="obd-media-img-upld-edit-check">
                                                                        <input type="checkbox" />
                                                                    </div>

                                                                    <div class="obd-media-img-uplld-edit-details fadeIn-top">
                                                                        <button type="submit"><i class="fas fa-edit"></i></button>
                                                                    </div>
                                                                    
                                                                    <div class="obd-media-img-uppld-content-details fadeIn-top">
                                                                        <h3 class="obd-media-img-upld-content-dlt-btn">
                                                                            <button type="submit"><i class="far fa-trash-alt"></i></button>
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3">
                                                                <div class="obd-media-img-uxpld-bx-tabb-content">
                                                                    <div class="obd-media-img-uxpld-content-overlay"></div>
                                                                    <img src={require('../../../assets/global-shoppng-21.png')} alt="orponbd online shop"/>
                                                                    
                                                                    <div class="obd-media-img-upld-edit-check">
                                                                        <input type="checkbox" />
                                                                    </div>

                                                                    <div class="obd-media-img-uplld-edit-details fadeIn-top">
                                                                        <button type="submit"><i class="fas fa-edit"></i></button>
                                                                    </div>
                                                                    
                                                                    <div class="obd-media-img-uppld-content-details fadeIn-top">
                                                                        <h3 class="obd-media-img-upld-content-dlt-btn">
                                                                            <button type="submit"><i class="far fa-trash-alt"></i></button>
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dashpagination">
                                                        <DashPagination/>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="obd-dash-gl-img-edit-rg-main-bx">
                                                        <div className="obd-dash-gl-rg-img-edit-img">
                                                            <h3>Image Details</h3>
                                                            <img src={require('../../../assets/global-shoppng-22.png')} alt="orponbd online shop"/>
                                                        </div>
                                                        <div className="obd-dash-gl-rg-img-edit-img-cont">
                                                            {/* Single Item */}
                                                            <div className="obd-dash-gl-rg-img-edit-img-cont-sngl">
                                                                <label htmlFor="">Alt Text</label>
                                                                <input type="text" placeholder="Alt Text Here.." />
                                                            </div>
                                                            {/* Single Item End */}
                                                            <div className="obd-dash-gl-rg-img-edit-img-up-btn">
                                                                <button>Save</button>
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
                    </Modal.Body>
                    
                </Modal>
                {/* Modal End*/}
            </div>
            
            </>
        )
    }
}
