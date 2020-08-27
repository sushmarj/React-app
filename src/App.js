import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Employee from './components/employee/Employee';
import Product from './components/product/Product';
import Customer from './components/customer/Customer';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import NotFound from './components/pages/NotFound';
import { EditEmployee } from './components/employee/EditEmployee';
import { EditProduct } from './components/product/EditProduct';
import { EditCustomer } from './components/customer/EditCustomer';

class App extends Component {
  render() {
    return (
     <Router>
       <div>
         <Header />
         <div className="container">
         <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/about" component={About} />
           <Route exact path="/contact" component={Contact} />
           <Route exact path="/employee" component={Employee} />
           <Route exact path="/empedit/:id" component={EditEmployee} />
           <Route exact path="/product" component={Product} />
           <Route exact path="/proedit/:id" component={EditProduct} />
           <Route exact path="/customer" component={Customer} />
           <Route exact path="/custedit/:id" component={EditCustomer} />
           <Route exact path="/login" component={Login} />
           <Route exact path="/register" component={Register} />
           <Route component={NotFound} />
         </Switch>
         </div>
       </div>
     </Router>
    );
  }
}

export default App;
