import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import CategoryApi from '../../apis/CategoryApi'
import ProductApi from '../../apis/ProductApi'

class AddEditProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fields: {
                productName: '',
                productDesc: '',
                price: '',
                cateId: ''
            },
            pageMessage: '',
            tmt: '',
            productImages: [],
            cateList: []
        }
    }
    componentDidMount = () => {
        this.fetchCategory();
    }
    fetchCategory = () => {
        CategoryApi.getAllCategory((res) => {
            if (res.hasOwnProperty("content")) {
                this.setState({ cateList: res.content })
            }
        },
            (error) => {
                
                this.setState({
                    cateList: [],
                    pageMessage: (<div className="alert alert-danger"><strong>Error: </strong>{error}</div>)
                })
            }, "", "cateName")
    }
    changeHandler = (e) => {
        this.setState({ pageMessage: "" });
        this.setState({
            fields: { ...this.state.fields, [e.target.name]: e.target.value }
        });
        localStorage.setItem(e.target.name, e.target.value);
    }

    formValidation = (e) => {
        let error = false;
        const errorMsg = [];

        if (this.state.fields.cateId === "" || this.state.fields.cateId === "-1") {
            errorMsg.push(<div key="cateId">Please select category</div>);
            error = true;
        }
        if (this.state.fields.productName === "") {
            errorMsg.push(<div key="productName">Please enter productName</div>);
            error = true;
        }
        if (this.state.fields.productDesc === "") {
            errorMsg.push(<div key="productDesc">Please enter productDesc</div>);
            error = true;
        }
        if (this.state.fields.price === "") {
            errorMsg.push(<div key="price">Please enter price</div>);
            error = true;
        }
        if (error) {
            this.setState({ pageMessage: (<div className="alert alert-danger"><strong>Error</strong>{errorMsg}</div>) });
        }
        else {
            this.setState({ pageMessage: errorMsg });
        }
        return !error;
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        let isValid = this.formValidation(e);
        if (isValid) {
            const formData = new FormData();
            for (let i = 0; i < this.state.productImages.length; i++) {
                formData.append("productImage", this.state.productImages[i]);
            }
            formData.append("product", JSON.stringify(this.state.fields))
            console.log(JSON.stringify(formData))
            ProductApi.saveProduct(formData,
                (res) => {
                    console.log("Resp: " + res);
                    this.setState({
                        pageMessage: (<div className="alert alert-success">{res.data}</div>),
                        fields: {
                            productName: '',
                            productDesc: '',
                            price: '',
                            cateId:"-1"
                        },
                        productImages:[]
                    });
                },
                (err) => {
                    console.log(err);
                    this.setState({ pageMessage: (<div className="alert alert-danger">{err}</div>) })
                }
            )
        }
    }
    fileChangeHandler = (e) => {
        this.setState({
            productImages:e.target.files
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row bottom10">
                    <div className="col-sm-6"><h2>Add Product</h2></div>
                    <div className="col-sm-6 text-right"><NavLink to="/admin/products" className="btn btn-outline-primary btn-sm">Products</NavLink></div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-0"></div>
                    <div className="col-sm-10">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group" id="messageHolder">
                                    {this.state.pageMessage}
                                </div>
                                <form name="userForm" onSubmit={this.onFormSubmit.bind(this)}>
                                    <div className="form-group">
                                        <label htmlFor="cateId">Category:</label>
                                        <select name="cateId" className="form-control" defaultValue={this.state.fields.cateId} onChange={this.changeHandler.bind(this)}>
                                            <option value="-1">-Select Category-</option>
                                            {this.state.cateList.length > 0 ?
                                                this.state.cateList.map((cate) => <option key={cate.id} value={cate.id}>{cate.cateName}</option>) : ''}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productName">Product name:</label>
                                        <input type="text" id="productName" name="productName" value={this.state.fields.productName} onChange={this.changeHandler.bind(this)} className="form-control" placeholder="Enter product name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productDesc">Product Desc:</label>
                                        <input type="text" id="productDesc" name="productDesc" value={this.state.fields.productDesc} onChange={this.changeHandler.bind(this)} className="form-control" placeholder="Enter desc" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Price:</label>
                                        <input type="email" id="price" name="price" value={this.state.fields.price} onChange={this.changeHandler.bind(this)} className="form-control" placeholder="Enter price" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Product images:</label>
                                        <input type="file" name="productImages" onChange={this.fileChangeHandler.bind(this)} className="form-control" multiple />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" onClick={this.onFormSubmit} className="btn btn-info">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        )
    }
}

export default AddEditProduct