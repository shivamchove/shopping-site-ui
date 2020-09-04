import React, { Component } from 'react'
import ProductApi from '../../apis/ProductApi';
import Pagination from '../Pagination';
import ListFilters from '../ListFilters';
import { NavLink } from 'react-router-dom';

class Products extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             checkbox:[],
             searchFields:{
                 searchText:'',
                 pageNo:0,
                 pageSize:5,
                 sortBy:'productName'
             },
             productList:{},
             pageMessage:''
        }
    }
    checkAllClicked=(e)=>{
        let checkVal=e.target.checked;
        this.state.checkbox.map(checkbox=>{
            if(checkbox===null){
                return null;
            }
            return checkbox.checked=checkVal
        })
    }
    componentDidMount=()=>{
        this.getAllProducts();
    }
    componentDidUpdate=()=>{
        //this.getAllProducts();
    }
    getAllProducts=()=>{
        ProductApi.getAllProducts((resp)=>{
            this.setState({
                productList:resp,
                pageMessage:''
            }) 
        },
        (error)=>{
            this.setState({
                productList:[],
                pageMessage:(<div className="alert alert-danger"><strong>Error: </strong>{error}</div>)
            })
        }, this.state.searchFields)
    }    
    pagingClicked=(pageNumber)=>{
        this.updateSearchField("pageNo", pageNumber);
    }
    updateSearchField=(fieldName, val)=>{
        this.setState({
            searchFields:{
                ...this.state.searchFields,
                pageNo:0,
                [fieldName]:val
            }
        },()=>{
            console.log(JSON.stringify(this.state.searchFields))
            this.getAllProducts()
        });
    }
    deleteHandler=(id)=>{
        ProductApi.deleteById((resp)=>{
            let prodlist=this.state.productList.content.filter(prod=>prod.id!==id);
            this.setState({
                productList:{
                    ...this.state.productList,
                    content:prodlist
                },
                pageMessage:(<div className="alert alert-success">{resp}</div>)
            });
            let _this=this;
            setTimeout(function(){_this.getAllProducts();},2000)
            
        },
        (error)=>{
            this.setState({
                productList:[],
                pageMessage:(<div className="alert alert-danger"><strong>Error: </strong>{error}</div>)
            })
        }, id)
    }
    render() {
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        {this.state.pageMessage}
                    </div>
                </div>
                <div className="row bottom10">
                    <div className="col-sm-6"><h2>Products</h2></div>
                    <div className="col-sm-6 text-right"><NavLink to="/admin/add-product" className="btn btn-outline-primary btn-sm">Add</NavLink></div>
                </div>
                <hr/>
                <ListFilters searchFields={this.state.searchFields} updateSearchField={this.updateSearchField}></ListFilters>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>
                                <div className="form-check-inline">
                                    <input type="checkbox" className="form-check-input" value="" onClick={this.checkAllClicked.bind(this)} checked={this.state.checked}/>
                                </div>
                            </th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.productList.hasOwnProperty("content") ? 
                        (this.state.productList.content.length>0 ? this.state.productList.content.map((product, index)=>(
                            <tr key={index}>
                            <td>
                                <div className="form-check-inline">
                                    <input type="checkbox" value={product.id} className="form-check-input listcheck" ref={(checkbox)=>{this.state.checkbox.push(checkbox)}} />
                                </div>
                            </td>
                            <td>{product.productName}</td>
                            <td>{product.cateId}</td>
                            <td>{product.productDesc}</td>
                            <td>{product.price}</td>
                            <td>
                                <i className="fa fa-remove fa-lg pointer red" onClick={()=>this.deleteHandler(product.id)}></i>
                                <NavLink to={"/admin/add-product/"+product.id} className="fa fa-edit fa-lg pointer blue left20"></NavLink>
                                <i className="fa fa fa-newspaper-o fa-lg pointer blue left20"></i>
                            </td>
                        </tr>
                        )) : <tr><td colSpan={8}><div className="alert alert-warning">No data available</div></td></tr>) : 

                        <tr >
                            <td colSpan={8}><i className='fa fa-spinner'> Loading...</i></td>
                        </tr>}
                        
                    </tbody>
                </table>
                <Pagination data={this.state.productList} pagingClicked={this.pagingClicked}></Pagination>
            </div>
        )
    }
}

export default Products
