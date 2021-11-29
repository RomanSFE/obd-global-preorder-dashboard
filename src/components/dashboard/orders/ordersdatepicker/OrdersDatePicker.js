import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import './ordersdatepicker.css'
 
import "react-datepicker/dist/react-datepicker.css";

export default class OrdersDatePicker extends Component {

    constructor (props) {
        super(props)
        this.state = {
          startDate: new Date(),
          endDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.onFormSubmitEnd = this.onFormSubmitEnd.bind(this);
      }
    
      handleChange(date) {
        this.setState({
          startDate: date
        })
      }
      handleChangeEnd(date) {
        this.setState({
          endDate: date
        })
      }
    
      onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.startDate)
      }
      onFormSubmitEnd(e) {
        e.preventDefault();
        console.log(this.state.endDate)
      }

    render() {
        return (
            <>
            <div className="obd-all-order-pages-tabs-main-manage-order-date-picker-main-box">
                <ul>
                    <li><input type="text" placeholder="Order No."/></li>
                    <li>
                        <form onSubmit={ this.onFormSubmit }>
                            <div className="form-group">
                            <DatePicker
                                selected={ this.state.startDate }
                                onChange={ this.handleChange }
                                name="startDate"
                                placeholderText="Date From"
                                dateFormat="MM/dd/yyyy"
                            />
                            </div>
                        </form>
                    </li>
                    <li>
                        <form onSubmit={ this.onFormSubmitEnd }>
                            <div className="form-group">
                            <DatePicker
                                selected={ this.state.endDate }
                                onChange={ this.handleChangeEnd }
                                name="endDate"
                                placeholderText="Date To"
                                dateFormat="MM/dd/yyyy"
                            />
                            </div>
                        </form>
                    </li>
                    <li className="obd-dashboardd-date-pkkr-searchh-btn"><button type="submit">Search</button></li>
                </ul>
            </div>
            </>
        )
    }
}
