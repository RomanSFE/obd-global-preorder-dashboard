import React, { Component } from 'react'
import DashboardSidebar from './dashboardsidebar/DashboardSidebar'
import './dashboardmain.css'
import DashboardTopBar from './dashboardtopbar/DashboardTopBar'
import DashBoardRecentOrder from './dashboardhomecomponent/recentorder/DashBoardRecentOrder'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Monthly Average SALES'
  },
  subtitle: {
    text: 'Source: orponbd.com'
  },
  xAxis: {
    categories: [
      '1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','21','22','23','24','25','26','20','27','28','29','30','31',
    ],
    crosshair: true,
  },
  yAxis: {
    min: 0,
    title: {
      text: 'ORDER Status'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  // colors:['#f39685'],
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Day',
    data: [150, 230, 10, 210, 140, 200, 240, 90, 170, 150, 250, 120,400,]

  },  ]
}


export default class Dashboard extends Component {
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
                          {/* Box Section start */}
                          <div className="row obd-top-bar-main-order-total-count-boxx">
                            <div className="col-md-3">
                              <div className="obd-top-bar-main-order-total-count-boxx-single-item-box-orderx">
                                  <div className="row obd-top-bar-main-order-total-count-boxx-single-item-inner-ex-pdd">
                                    <div className="col-md-8">
                                      <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-lft-order">
                                        <h4>Orders</h4>
                                        <h5>1200</h5>
                                        <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-lft-icon-order">
                                          <img src={require('../../assets/dashboard-up-icon.svg')} alt=""/>
                                          <span>This Month</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-right-icon-order text-center">
                                        <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-right-icon-img">
                                          <img src={require('../../assets/dashboard-wv-order-icon.svg')} alt=""/>
                                        </div>
                                          
                                          <h4><i className="fas fa-plus"></i> <span>4.2%</span></h4>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="obd-top-bar-main-order-total-count-boxx-single-item-box-total-salex">
                                  <div className="row obd-top-bar-main-order-total-count-boxx-single-item-inner-ex-pdd">
                                    <div className="col-md-8">
                                      <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-lft-order">
                                        <h4>Total Sale</h4>
                                        <h5>৳ 150000.00</h5>
                                        <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-lft-icon-order">
                                          <img src={require('../../assets/dashboard-up-icon.svg')} alt=""/>
                                          <span>This Month</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-right-icon-order text-center">
                                        <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-right-icon-img-ttl-sl">
                                          <img src={require('../../assets/dashboard-ttl-sale-icn.svg')} alt=""/>
                                        </div>
                                          
                                          <h4><i className="fas fa-plus"></i> <span>4.2%</span></h4>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="obd-top-bar-main-order-total-count-boxx-single-item-box-total-revnu">
                                  <div className="row obd-top-bar-main-order-total-count-boxx-single-item-inner-ex-pdd">
                                    <div className="col-md-8">
                                      <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-lft-order">
                                        <h4>Total Revenue</h4>
                                        <h5>৳ 180000.00</h5>
                                        <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-lft-icon-order">
                                          <img src={require('../../assets/dashboard-dwnn-icon.svg')} alt=""/>
                                          <span>This Month</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-right-icon-order text-center">
                                        <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-right-icon-img-revn">
                                          <img src={require('../../assets/dashboard-totl-revn-icon.svg')} alt=""/>
                                        </div>
                                          
                                          <h4><i className="fas fa-minus"></i> <span>3.2%</span></h4>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="obd-top-bar-main-order-total-count-boxx-single-item-box-new-user">
                                  <div className="row obd-top-bar-main-order-total-count-boxx-single-item-inner-ex-pdd">
                                    <div className="col-md-8">
                                      <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-lft-order">
                                        <h4>New User</h4>
                                        <h5>1750</h5>
                                        <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-lft-icon-order">
                                          <img src={require('../../assets/dashboard-up-icon.svg')} alt=""/>
                                          <span>This Month</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-right-icon-order text-center">
                                        <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-right-icon-img-new-user">
                                          <img src={require('../../assets/dashboard-new-user.svg')} alt=""/>
                                        </div>
                                          
                                          <h4><i className="fas fa-plus"></i> <span>5.2%</span></h4>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                            </div>
                          </div>
                          {/* Box Section start */} 

                          {/* Bar Chart Section */}
                          <div className="row">
                            <div className="col-md-12">
                              <div className="obd-main-dashboard-main-sec-main-chart-box-wv">
                                <div className="obd-business-overview-and-day-month-sec-dashbrd">
                                  <div className="row">
                                    <div className="col-md-5">
                                      <div className="obd-business-overview-and-day-month-sec-das-hed">
                                        <h4>Business Overview</h4>
                                      </div>
                                    </div>
                                    <div className="col-md-7">
                                      <div className="obd-business-overview-and-day-month-sec-das-month-wek-yr-sec text-right">
                                        <ul>
                                          <li>Weekly</li>
                                          <li>Monthly</li>
                                          <li>Yearly</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <HighchartsReact
                                    highcharts={Highcharts}
                                    options={options}
                                  />
                              </div>
                          </div>
                          {/* <div className="col-4">
                              <div className="obd-main-dashboard-main-sec-main-chart-box-pie-chrt-box">
                                <div className="obd-main-dashboard-main-sec-main-chart-box-pie-chrt-hed text-center">
                                  <h4>Order Summary</h4>
                                </div>
                                <div className="shhs">
                                  <p>Some Text</p>
                                </div>
                              </div>
                            </div> */}
                          </div>
                          {/* Recent Order start */}
                          <div className="obd-recent-orderxx-product-and-new-user-dash-board-box-mn">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="obd-recent-orderxx-product-and-new-user-dash-board-inner">
                                  <DashBoardRecentOrder/>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Recent Order End */}
                        </div>
                    </div>
                </div>
            </div>

            </>
        )
    }
}



