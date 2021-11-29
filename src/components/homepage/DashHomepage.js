import React, { Component } from 'react'
import Dashboard from '../dashboard/Dashboard'

export default class DashHomepage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
           <>
            <Dashboard/>
           </>
        )
    }
}
