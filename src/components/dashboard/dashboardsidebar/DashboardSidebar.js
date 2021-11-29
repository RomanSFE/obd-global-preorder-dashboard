import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './dashboardsidebar.css';

// RC Collepse
import Collapse, { Panel } from 'rc-collapse';
require('rc-collapse/assets/index.css');
// RC Collepse

export default class DashboardSidebar extends Component {
    render() {
        return (
            <>
            <div className="obd-dashboard-left-sidebar-main-wv-box">
                <div className="obd-dashboard-left-sidebar-main-wv-item-menu-content">
                    <div className="obd-dashboard-left-sidebar-main-wv-item-menu-content-logo text-center">
                        <img src={require('../../../assets/dashboard-logo.png')} alt=""/>
                    </div>
                    <Collapse accordion={true} >
                        <NavLink exact to="/" activeStyle={{color:'#f1f1f1',fontWeight: "normal",}}>
                            <Panel showArrow={false} header={<p><img src={require('../../../assets/dashboard-dash-icon.png')} alt=""/> <span>Dashboard</span> <span className="obd-dashboard-left-sidebar-main-wv-rihnt-ang-icn text-right"><i className="fas fa-angle-right"></i></span></p>}></Panel>
                        </NavLink>
                        <NavLink to="/dashboard-orders" activeStyle={{color:'#f1f1f1',fontWeight: "normal",}}>
                            <Panel showArrow={false} header={<p><img src={require('../../../assets/dashboard-orders-icon.png')} alt=""/> <span>Orders</span> <span className="obd-dashboard-left-sidebar-main-wv-rihnt-ang-icn text-right"><i className="fas fa-angle-right"></i></span></p>}></Panel>
                        </NavLink>
                        <Panel showArrow={false} header={<p><img src={require('../../../assets/dashboard-orders-icon.png')} alt=""/> <span>Products</span> <span className="obd-dashboard-left-sidebar-main-wv-rihnt-ang-icn text-right"><i className="fas fa-angle-right"></i></span></p>}>
                            <div className="obd-dashboard-left-sidebar-main-wv-item-menu-content-inner">
                                <ul>
                                    <li><NavLink to="/dash-all-products" activeClassName="selectedLink" activeStyle={{color:'#f1f1f1',fontWeight: "normal",fontSize: '13px',backgroundColor: 'rgba(249, 249, 249,.3)', display: 'block', padding: '4px 0px 4px 0px'}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/>All Products</NavLink></li>
                                    <li><NavLink to="/dash-add-product" activeStyle={{color:'#f1f1f1',fontWeight: "normal",fontSize: '13px',backgroundColor: 'rgba(249, 249, 249,.3)', display: 'block', padding: '4px 0px 4px 0px'}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Add Product</NavLink></li>
                                </ul>
                            </div>
                        </Panel>
                        <NavLink to="/dash-all-users" activeStyle={{color:'#f1f1f1',fontWeight: "normal",}}>
                            <Panel showArrow={false} header={<p><img src={require('../../../assets/dashboard-orders-icon.png')} alt=""/> <span>All Users</span> <span className="obd-dashboard-left-sidebar-main-wv-rihnt-ang-icn text-right"><i className="fas fa-angle-right"></i></span></p>}></Panel>
                        </NavLink>
                    </Collapse>
                </div>
            </div>
            </>
        )
    }
}
