import React, { Component } from 'react'

class ListFilters extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            inputTimeout:''
        }
    }
    searchTextHandler=(e)=>{
        var elm=e.target;
        clearTimeout(this.state.inputTimeout);
        let tmt=setTimeout(()=>{
            this.props.updateSearchField(elm.name, elm.value)
        },2000);
        this.setState({inputTimeout:tmt});
    }
    pageSizeHandler=(e)=>{
        this.props.updateSearchField(e.target.name, e.target.value);
    }
    render() {
        let numArr=[1, 5, 10, 15, 20, 30, 40, 50, 100];
        //this.props.searchFields.hasOwnProperty("pageSize") && this.props.searchFields.hasOwnProperty("pageSize")===num ? 'selected' : 'false'
        return (
            <div className="row bottom10">
                    <div className="col-sm-1">
                        <select name="pageSize" defaultValue={this.props.searchFields.pageSize} className="form-control form-control-sm" onChange={this.pageSizeHandler.bind(this)}>
                            {numArr.map(num=>
                                <option key={num} value={num} >{num}</option>
                            )}
                        </select>
                    </div>
                    
                    <div className="col-sm-5"></div>
                    <div className="col-sm-3 text-right">
                        <label htmlFor="search">Search:</label>
                    </div>
                    <div className="col-sm-3 text-right">
                        <input type="text" name="searchText" onChange={this.searchTextHandler.bind(this)} className="form-control form-control-sm" />
                    </div>
                </div>
        )
    }
}

export default ListFilters
