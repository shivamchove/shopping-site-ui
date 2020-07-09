import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userLogin } from '../../redux'
import { Redirect } from 'react-router-dom'


class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            formData: {
                username: '',
                password: '',
            },
            errorMsg: ''
        }
    }
    componentDidUpdate=()=>{
        console.log(JSON.stringify(this.props));
        if(this.props.userData.userDetail.hasOwnProperty("user_token")){
            sessionStorage.setItem("login_jwt", this.props.userData.userDetail.user_token);
            sessionStorage.setItem("user_data", JSON.stringify(this.props.userData.userDetail.user_data));
        }
        
    }
    changeHandler = (e) => {
        this.setState({
            formData:{...this.state.formData, [e.target.name]:e.target.value}
        }, ()=>{
            console.log(JSON.stringify(this.state.formData));
        })
    }
    formValidation = (e) => {
        let msg=[];
        let error=false;
        if(this.state.formData.username===""){
            msg.push(<div>Please enter username.</div>);
            error=true;
        }
        if(this.state.formData.password===""){
            msg.push(<div>Please enter password.</div>);
            error=true;
        }
        if(error){
            this.setState({
                errorMsg:(<div className="alert alert-danger"><strong>Error</strong>{msg}</div>)
            });
        }
        return error;
        
    }
    submitHandler = (e) => {
        e.preventDefault();
        if(!this.formValidation(e)){
            this.props.userLogin(this.state.formData);
        }
    }
    render() {
        if(this.props.userData && this.props.userData.userDetail.hasOwnProperty("user_token")){
            console.log("User loggedin");
            return <Redirect to={{
                pathname: '/admin',
                state: {}
            }}/>
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Sign In</h5>
                                <form className="form-signin" onSubmit={this.submitHandler.bind(this)}>
                                    <div className="form-group">
                                        {this.state.errorMsg}
                                        {this.props.userData.error!==""? <div className="alert alert-danger"><strong>Error</strong><br/>{this.props.userData.error}</div>: ""}
                                    </div>
                                    <div className="form-label-group">
                                        <label htmlFor="username">Username: </label>
                                        <input type="text" name="username" value={this.state.formData.username} onChange={this.changeHandler.bind(this)} className="form-control" placeholder="Username"/>
                                        
                                    </div>
                                    <br/>
                                    <div className="form-label-group">
                                        <label htmlFor="password">Password: </label>
                                        <input type="password" name="password" value={this.state.formData.password} onChange={this.changeHandler.bind(this)} className="form-control" placeholder="Password" />
                                        
                                    </div>
                                    <br/>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                                    </div>
                                    <button className="btn btn-md btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>{
    
    return{
        userLogin:(userData)=>{dispatch(userLogin(userData))}
    }
}
const mapStateToProps=state=>{
    return{
        userData:state.user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
