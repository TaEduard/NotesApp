import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component{
render(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/" >NotesApp</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <Link className="nav-link" to="/SignUp">Sign Up</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/SignIn">Sign In</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/SignOut">Sign Out</Link>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}
}