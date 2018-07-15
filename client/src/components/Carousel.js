
import React from "react";

const Carousel = () => (
<div>
<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="./Asset/image/server.jpg" alt="First pic"  width='50' height='400'/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 " src="./Asset/image/server2.jpg" alt="Second pic" width='50' height='400'/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="./Asset/image/networking.jpg"   alt="Third pic"  width='50' height='400'/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 " src="./Asset/image/voip.jpg" alt="Fifth pic" width='50' height='400'/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 " src="./Asset/image/networking.jpg" alt="Fourth pic" width='50' height='400'/>
    </div>
    </div>
  </div>
</div>

)

export default Carousel