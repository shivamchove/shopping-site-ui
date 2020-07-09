import React, { Component } from 'react'

class Pagination extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    componentDidUpdate=()=>{
        
    }
    pagingHandler=(pageNumber)=>{
        console.log(pageNumber)
        this.props.pagingClicked(pageNumber)
    }
    createPaging=()=>{
        let pagging=[];
        let prevCls=this.props.data.hasOwnProperty("number") && this.props.data.number>0 ? 'page-item':'page-item disabled';
        pagging.push(<li key="0" className={prevCls}><span className="page-link pointer" onClick={()=>this.pagingHandler(this.props.data.hasOwnProperty("number") ? this.props.data.number-1 : 0)}>Previous</span></li>)
        if(this.props.data!=='undefined' && this.props.data.hasOwnProperty("totalPages")){
            
           for(let i=1; i<=this.props.data.totalPages; i++){
           let cls= i===this.props.data.number+1 ? 'page-item active':'page-item';
           pagging.push(<li key={i} className={cls}><span className="page-link pointer"  onClick={()=>this.pagingHandler(i-1)}>{i}</span></li>)
           }
        }
        let nextCls=this.props.data.hasOwnProperty("number") && this.props.data.number+1<this.props.data.totalPages ? 'page-item':'page-item disabled';
        pagging.push(<li key="999999" className={nextCls}><span className="page-link pointer"  onClick={()=>this.pagingHandler(this.props.data.hasOwnProperty("number") ? this.props.data.number+1 : 0)}>Next</span></li>)
        return pagging;         
    }
    render() {
        return (
            <div>
                <ul className="pagination pagination-sm justify-content-end">
                    {this.createPaging()}
                </ul>
            </div>
        )
    }
}

export default Pagination
