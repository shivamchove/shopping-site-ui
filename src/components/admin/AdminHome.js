import React, { Component } from 'react'
import AdminHeader from './AdminHeader'
import { Switch, Route } from 'react-router-dom'
import Products from './Products'
import Categories from './Categories'
import AddEditProduct from './AddEditProduct'
import AddEditCategory from './AddEditCategory'

class AdminHome extends Component {
    render() {
        return (
            <>
            <AdminHeader></AdminHeader>
            <div style={{paddingTop:'50px', minHeight:'500px'}}>
                <Switch>
                    <Route path="/admin" exact component={Products}></Route>
                    <Route path="/admin/products" component={Products}></Route>
                    <Route path="/admin/add-product" component={AddEditProduct}></Route>
                    <Route path="/admin/categories" component={Categories}></Route>
                    <Route path="/admin/add-category" component={AddEditCategory}></Route>
                </Switch>
                

            </div>
            </>
        )
    }
}

export default AdminHome
