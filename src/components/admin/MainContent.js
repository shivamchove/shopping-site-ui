import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './Login'
import Footer from './Footer'
import AdminHome from './AdminHome'

class MainContent extends Component {
    render() {
        return (

            <div>
                <div >
                    <Switch>
                        {/* <Route render={(props)=><Login />} path="/login" exact ></Route> */}
                        <Route  path= {["/", "/login" ]} exact component={Login} ></Route>
                        <Route path="/admin" component={AdminHome}></Route>
                    </Switch>
                </div>
                <Footer></Footer>
            </div>

        )
    }
}

export default MainContent
