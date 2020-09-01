import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Common } from '../../config/Common'

class AdminHeader extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-light navbar-light">

                <NavLink className="navbar-brand" to="/admin" >Logo</NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/products" activeClassName="active">Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/categories" activeClassName="active">Categories</NavLink>
                    </li>

                </ul>
                <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <div className="nav-link ">{Common.getUsername()}</div>
                            
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login" activeClassName="active">Sign Out</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default AdminHeader
