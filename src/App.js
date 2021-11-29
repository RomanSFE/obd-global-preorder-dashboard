import React from 'react';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// Main Dashboard Start
import DashboardOrder from './components/dashboard/orders/DashboardOrder';
import DshboardInvoiceDetails from './components/dashboard/orders/invoicedetails/DshboardInvoiceDetails';
import DashHomepage from './components/homepage/DashHomepage';
import DashAllProducts from './components/dashboard/products/DashAllProducts';
import DashAddProduct from './components/dashboard/products/DashAddProduct';
import DashAllUsers from './components/dashboard/allusers/DashAllUsers';
// Main Dashboard End

function App() {
  return (
    <>
      <div className="orpon-bd-web-version-main-section-box">

        <Switch>
          <Route exact path="/" component={DashHomepage}/>
          <Route path="/dashboard-orders" component={DashboardOrder}/>
          <Route path="/dashboard-invoice-details" component={DshboardInvoiceDetails}/>
          <Route path="/dash-all-products" component={DashAllProducts}/>
          <Route path="/dash-add-product" component={DashAddProduct}/>
          <Route path="/dash-all-users" component={DashAllUsers}/>
          {/*Main Dashboard end*/}

        </Switch>
        
      </div>
      </>
  );
}

export default App;
