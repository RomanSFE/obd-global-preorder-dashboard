import React, { Component } from 'react'
import DashboardSidebar from '../dashboardsidebar/DashboardSidebar';
import DashboardTopBar from '../dashboardtopbar/DashboardTopBar';
import './dashsettings.css'

export default class DashSettings extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }

    // Logo Upload start
    constructor(props) {
        super(props);
        this.state = {
          file: '',
          imagePreviewUrl: ''
        };
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
      }
    
      _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
      }
    
      _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }
    // Logo Upload End
      
    render() {
        // Logo Upload
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} alt=""/>);
        }
        // Logo Upload
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
                                                    <h4>Settings</h4>
                                                    <div className="flltrr-bbttn-brdr-recent-orderxv"></div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Head sec end */}

                                        {/* Add Product Field Box */}
                                        <form action="">
                                            <div className="obd-preorder-add-product-bx-main-wrap">
                                                {/* Single Item Start */}
                                                <div className="row obd-preorder-add-product-bx-sng-ex-pdz">
                                                    <div className="col-md-2">
                                                        <div className="obd-preorder-add-product-bx-lft-hdtxt">
                                                            <h4>Logo :</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <div className="obd-preorder-add-product-bx-rt-inpt-fld">
                                                            {/* Image Upload */}
                                                            <div className="obd-add-new-user-dash-bx-product-dash-board-main-left-img-upld">
                                                                <form onSubmit={this._handleSubmit}>
                                                                    <input type="file" onChange={this._handleImageChange} />
                                                                    <button type="submit" onClick={this._handleSubmit}>Upload Logo</button>
                                                                </form>
                                                                {$imagePreview}
                                                            </div>
                                                            {/* Image Upload */}
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Single Item End */}
                                                {/* Single Item Start */}
                                                <div className="row obd-preorder-add-product-bx-sng-ex-pdz">
                                                    <div className="col-md-2">
                                                        <div className="obd-preorder-add-product-bx-lft-hdtxt">
                                                            <h4>Title (Color) :</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <div className="obd-preorder-add-product-bx-rt-inpt-fld">
                                                            <input type="text" placeholder="Color Title Here.." />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Single Item End */}
                                                {/* Single Item Start */}
                                                <div className="row obd-preorder-add-product-bx-sng-ex-pdz">
                                                    <div className="col-md-2">
                                                        <div className="obd-preorder-add-product-bx-lft-hdtxt">
                                                            <h4>Sub Title :</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <div className="obd-preorder-add-product-bx-rt-inpt-fld">
                                                            <input type="text" placeholder="Sub Title Here.." />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Single Item End */}
                                                {/* Single Item Start */}
                                                <div className="row obd-preorder-add-product-bx-sng-ex-pdz">
                                                    <div className="col-md-2">
                                                        <div className="obd-preorder-add-product-bx-lft-hdtxt">
                                                            <h4>Banner Full :</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <div className="obd-preorder-add-product-bx-rt-inpt-fld">
                                                            <div className="obd-all-store-list-dash-sng-act-ck-stats">
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Single Item End */}
                                                {/* Single Item Start */}
                                                <div className="row obd-preorder-add-product-bx-sng-ex-pdz">
                                                    <div className="col-md-2">
                                                        <div className="obd-preorder-add-product-bx-lft-hdtxt">
                                                            <h4>Footer Text :</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <div className="obd-preorder-add-product-bx-rt-inpt-fld">
                                                            <input type="text" placeholder="Footer Text Here.." />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Single Item End */}

                                                {/* Save Button */}
                                                <div className="obd-add-prod-save-bbtn text-center">
                                                    {/* <div className="row"> */}
                                                        <button type="button">Save</button>
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
                          {/* Add Product Box End */}
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
