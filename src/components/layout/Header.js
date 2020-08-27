import React from 'react';
import {Link} from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    Container,
    Card,
    Button
  } from "react-bootstrap";
const Header=()=> {
        return(
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed"
            data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"><span className="sr-only">Toggle Navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span></button>
            <Link className="navbar-brand glyphicon glyphicon-th-list" to="#"> #RJ </Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                <li className="active"><Link to="/" className="glyphicon glyphicon-home"> Home</Link><span className="sr-only">(current)</span></li>
                <li ><Link to="/about" className="glyphicon glyphicon-info-sign"> About Us</Link></li>
                <li ><Link to="/contact" className="glyphicon glyphicon-earphone"> Contact Us</Link></li>
                <li ><Link to="/employee" className="glyphicon glyphicon-sort"> ManageEmployee</Link></li>
                <li ><Link to="/product" className="glyphicon glyphicon-sort"> ManageProduct</Link></li>
                <li ><Link to="/customer" className="glyphicon glyphicon-sort"> ManageCustomer</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                <li ><Link to="/login" className="glyphicon glyphicon-user"> Login</Link></li>
                <li><Link to="/register" className="glyphicon glyphicon-cloud"> Register</Link></li>
                </ul>
            </div>
            </div>
            </nav>
            
        )
}

export default Header;