import React, { Component } from 'react'
import './dashboardtopbar.css'
import {Link} from 'react-router-dom';

export default class DashboardTopBar extends Component {
    render() {
        return (
            <>
            <div className="obd-top-bar-main-order-dash-board-top-search-boxx-main-box">
                <div className="row obd-top-bar-main-order-dash-board-top-search-boxx-bgg">
                    <div className="col-md-6">
                        <div className="obd-top-bar-main-order-dash-board-top-search-boxx-main-lft-serch">
                            <ul>
                                <li className="obd-top-bar-main-order-dash-board-top-search-hambergr">
                                    <button><img src={require('../../../assets/dashboard-hambargr-icon.svg')} alt=""/></button>
                                </li>
                                <li className="obd-top-bar-main-order-dash-board-top-search-src-inpt">
                                    <input type="search" placeholder="Search"/> <span><i className="fas fa-search"></i></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="obd-top-bar-main-order-dash-board-top-search-boxx-main-right-pro-notf text-right">
                            <ul>
                                <li className="obd-top-bar-main-order-dash-board-top-search-user-message-icn"><img src={require('../../../assets/dashboard-messed-icon.svg')} alt=""/></li>
                                <li className="obd-top-bar-main-order-dash-board-top-search-user-notific-icn"><i class="far fa-bell"></i></li>
                                <li className="obd-top-bar-main-order-dash-board-top-search-user-profile-img">
                                <Link to="#">
                                    <div className="obd-top-bar-main-order-dash-board-top-search-user-profile-img-box">
                                        <span><span>User Name</span> <img src={require('../../../assets/dashboard-user-image.jpg')} alt=""/> </span>
                                    </div>
                                    <span className="obd-top-bar-main-order-dash-board-top-search-user-ang-dwn"><i className="fas fa-angle-down"></i></span>
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
