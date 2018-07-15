import React, {Component} from "react";
// import API from "../utils/API";
import Carousel from '../components/Carousel'

class Products extends Component {

  render() {
    return (
      
      <div>
        
        <Carousel />
        <div className='row'>
        <div className=''> 
        <h3>Delivering Elite Service and High Value</h3>
        <p style={{paddingLeft:30,paddingRight:30, textAlign:'left'}}>In today’s fast-paced digital world, every business relies on solid IT support. But for small and medium-sized businesses, finding that kind of support can be difficult. Smaller IT firms are often stretched thin — too many clients, not enough specialized skills — while bigger IT organizations prioritize their larger clients and may not even return your calls.

            At Dream Elements IT, we specialize in delivering enterprise-level support worthy of a Fortune 500 company – at a price a small to medium-sized business can appreciate. Even better, we combine the best of both worlds: every Dream Elements  IT office is independently owned and operated, while still being backed by a nationwide network of more than 200 locations and 700 technicians. Most of our franchisees come from Fortune 500 backgrounds, meaning they understand the need to scale big company support down to each and every office, user and device. In short, no one in North America is better equipped to give small to medium-sized businesses the support they deserve than Dreamm Elements IT.

            Scroll down to learn more about the elements that encompass CMIT’s strategic approach, which we use to successfully manage the IT resources and infrastructure of all our managed service clients. Enterprise-level support at an affordable, predictable, flat -ate monthly price.</p>
      </div> 
      </div>
    </div>
    )
  }
}

export default Products;