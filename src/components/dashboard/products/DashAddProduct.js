import React, { Component } from 'react'
import DashboardSidebar from '../dashboardsidebar/DashboardSidebar';
import DashboardTopBar from '../dashboardtopbar/DashboardTopBar';
import './dashaddproduct.css'

import RichTextEditor from 'react-rte';
import ImgUploadCompo from './GalleryImgUploadCompo';

export default class DashAddProduct extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }

      constructor(props) {
        super(props);
        this.state = {
            // For Text Editor Start 
            value: RichTextEditor.createEmptyValue(),
            // For Text Editor End

            // For Tags ----
            tags: [],
            // For Tags ----
            };
            // For Tags
            this.reactTags = React.createRef()
            // For Tags
    }
    
    // For Text Editor Start
    onChange = (value) => {
    this.setState({value});
    };
    // For Text Editor End

    // For Tags Start
    removeTag = (i) => {
        const newTags = [ ...this.state.tags ];
        newTags.splice(i, 1);
        this.setState({ tags: newTags });
      }
    
      inputKeyDown = (e) => {
        const val = e.target.value;
        if (e.key === 'Enter' && val) {
          if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
            return;
          }
          this.setState({ tags: [...this.state.tags, val]});
          this.tagInput.value = null;
        } else if (e.key === 'Backspace' && !val) {
          this.removeTag(this.state.tags.length - 1);
        }
      }
    // For Tags End
      
    render() {
        // For Tags
        const { tags } = this.state;
        // For Tags
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
                                                    <h4>Add Product</h4>
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
                                                            <h4>Title :</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <div className="obd-preorder-add-product-bx-rt-inpt-fld">
                                                            <input type="text" placeholder="Enter Title"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Single Item End */}
                                                {/* Single Item Start */}
                                                <div className="row obd-preorder-add-product-bx-sng-ex-pdz">
                                                    <div className="col-md-2">
                                                        <div className="obd-preorder-add-product-bx-lft-hdtxt">
                                                            <h4>Price :</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <div className="obd-preorder-add-product-bx-rt-inpt-fld">
                                                            <div className="obd-preorder-add-product-bx-rt-inpt-prc">
                                                                <ul>
                                                                    <li>
                                                                        <label htmlFor="">Selling Price</label>
                                                                        <input type="number" placeholder="1200 TK" />
                                                                    </li>
                                                                    <li>
                                                                        <label htmlFor="">Discount Price</label>
                                                                        <input type="number" placeholder="950 TK" />
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Single Item End */}
                                                {/* Single Item Start */}
                                                <div className="row obd-preorder-add-product-bx-sng-ex-pdz">
                                                    <div className="col-md-2">
                                                        <div className="obd-preorder-add-product-bx-lft-hdtxt">
                                                            <h4>Category :</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <div className="obd-preorder-add-product-bx-rt-inpt-fld">
                                                            <select>
                                                                <option value="">--- Select Category ---</option>
                                                                <option value="">kitchen Accessories</option>
                                                                <option value="">Mens Fashion</option>
                                                                <option value="">Womens Fashion</option>
                                                                <option value="">Home And Living</option>
                                                                <option value="">Baby Zone</option>
                                                                <option value="">Smart Watches</option>
                                                                <option value="">Mobile Accessories</option>
                                                                <option value="">Accessories</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Single Item End */}
                                                {/* Single Item Start */}
                                                <div className="row obd-preorder-add-product-bx-sng-ex-pdz">
                                                    <div className="col-md-2">
                                                        <div className="obd-preorder-add-product-bx-lft-hdtxt">
                                                            <h4>Description :</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <div className="obd-preorder-add-product-bx-rt-inpt-desc">
                                                            <RichTextEditor
                                                                value={this.state.value}
                                                                onChange={this.onChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Single Item End */}
                                                {/* Single Item Start */}
                                                <div className="row obd-preorder-add-product-bx-sng-ex-pdz">
                                                    <div className="col-md-2">
                                                        <div className="obd-preorder-add-product-bx-lft-hdtxt">
                                                            <h4>Keywords :</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <div className="obd-preorder-add-product-bx-rt-inpt-tags-fld">
                                                            <div className="input-tag obd-preorder">
                                                                <ul className="input-tag__tags-obd-preorder">
                                                                { tags.map((tag, i) => (
                                                                    <li key={tag}>
                                                                    {tag}
                                                                    <button type="button" onClick={() => { this.removeTag(i); }}>+</button>
                                                                    </li>
                                                                ))}
                                                                <li className="input-tag__tags__input-obd-preorder"><input type="text" placeholder="Add Keywords.." onKeyDown={this.inputKeyDown} ref={c => { this.tagInput = c; }} /></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Single Item End */}
                                                {/* Single Item Start */}
                                                <div className="row obd-preorder-add-product-bx-sng-ex-pdz">
                                                    <div className="col-md-2">
                                                        <div className="obd-preorder-add-product-bx-lft-hdtxt">
                                                            <h4>Product Image :</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <div className="obd-preorder-add-product-bx-rt-inpt-fld">
                                                            {/* <ImageUploadCompo/> */}
                                                            <ImgUploadCompo/>
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
