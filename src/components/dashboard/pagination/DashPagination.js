import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './dashpagination.css'

export default class DashPagination extends Component {
    render() {
        return (
            <>
            {/* Pagination Start */}
            <div className="row obd-bd-web-v-dash-brd-mn-pagination-compo-section text-right">
                <div className="col-md-12">
                    <div className="obd-web-v-dash-brd-mn-pagination-compo-section-box">
                        <div className="obd-web-v-dash-brd-mn-pagination-compo-section-content">
                            <ul>
                                <li className="obbd-dash-brd-mn-pagination-compo-prevv-txt-webv"><Link to="/"><span><i className="fas fa-angle-left"></i></span></Link></li>
                                <li><Link to="/">1</Link></li>
                                <li><Link to="/">2</Link></li>
                                <li><Link to="/">3</Link></li>
                                <li><Link to="/">4</Link></li>
                                <li><Link to="/">5</Link></li>
                                <li><Link to="/">6</Link></li>
                                <li className="obd-dash-brd-mn-pagination-compo-nextt-txt-webv"><Link to="/"> <span><i className="fas fa-angle-right"></i></span></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pagination End */}
            </>
        )
    }
}
