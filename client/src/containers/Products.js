import React, {Component} from "react";
// import API from "../utils/API";
import Carousel from '../components/Carousel'

class Products extends Component {

  render() {
    return (
      
      <div>
        
        <Carousel />
        <div className='row'>
          <div className='col-md-5'>
            <ul style={{margin:50}}>
            <h5 style={{textAlign:'left', paddingTop:10}}><b>IP Camera Installation</b></h5>
            <h5 style={{textAlign:'left'}}><b>Coputer Networking </b></h5>
            <h5 style={{textAlign:'left'}}><b>Sever Management</b></h5>
            </ul>
          </div>
          
          <div className='col-md-5'>
          <ul style={{margin:50}}>
            <h5 style={{textAlign:'left', paddingTop:10}}><b>Server Update</b></h5>
            <h5 style={{textAlign:'left'}}><b>Web Page Development</b></h5>
            <h5 style={{textAlign:'left'}}><b>Database Management</b></h5>
            </ul>
          </div>
        </div>
          
      </div>
    )
  }
}

export default Products;