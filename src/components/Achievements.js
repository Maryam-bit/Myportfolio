import React from 'react'
import img1 from '../img/A1.png'
import img2 from '../img/A2.jpg'
import img3 from '../img/A3.png'
import hd from '../img/hdd.png'

export default function Achievements() {
 return (
  <section name="achievements" name="achievements" className="achievements">
    <div className="heading">
   {/* 
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <h2>
            <span>P</span><span className="o">O</span>
            RTFOLIO
          </h2>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
   */}
          <h1>ACHIEVEMENTS</h1>
          <img src={hd} />
        </div>

{/* 
<div className="container-fluid">


<div class="row">

<div class="col-lg-4 col-md-4 col-sm-12 col-12">
  <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">

    <div class="portfolio-item" data-category="web-design">
      <div class="portfolio-item-inner shadow-dark">
        <div class="portfolio-img">
          <img src={img1} width="100%" alt="" />
        </div>
        <div class="portfolio-info">
          <h4>Age Converter</h4>
          <div class="icon">
            <a href="https://maryam-bit.github.io/AgeConverter/"><i class="fa fa-eye"></i></a>
          </div>
          <div class="portfolio-date">22 july 2020</div>
        </div>
      </div>
    </div>
  </div>
</div>



<div class="col-lg-4 col-md-4 col-sm-12 col-12">
  <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">

    <div class="portfolio-item" data-category="wordpress">
      <div class="portfolio-item-inner shadow-dark">
        <div class="portfolio-img">
          <img src={img2} width="100%" alt="" />
        </div>
        <div class="portfolio-info">
          <h4>stationery Website</h4>
          <div class="icon">
            <a href="https://maryam-bit.github.io/-stationary-Website-Assignment4/"><i
                class="fa fa-eye"></i></a>
          </div>
          <div class="portfolio-date">22 july 2020</div>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="col-lg-4 col-md-4 col-sm-12 col-12">
  <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">

    <div class="portfolio-item" data-category="app-development">
      <div class="portfolio-item-inner shadow-dark">
        <div class="portfolio-img">
          <img src={img3} width="100%" alt="" />
        </div>
        <div class="portfolio-info">
          <h4>Calculator</h4>
          <div class="icon">
            <a href="https://maryam-bit.github.io/JS-Calculator-Assignment7-/"> <i class="fa fa-eye"></i></a>
          </div>
          <div class="portfolio-date">22 july 2020</div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>

 */}
 <br />
 <br />
 <br />
<div className="container">
  <div className="row">
    <div className="col-md-4">
    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900">
    
    <div class="card mb-4 shadow">
  <img class="card-img-top p-2" src={img1} alt="Card image cap" />
  {/* <div class="card-body"> 
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  */}
</div>
</div>
    </div>


<div className="col-md-4">
<div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900">
<div class="card mb-4 shadow p-2">
  <img class="card-img-top" src={img2} alt="Card image cap" />
  {/* <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
   */}
</div>
</div>
</div>

<div className="col-md-4">
<div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900">
<div class="card mb-4 shadow p-2">
  <img class="card-img-top" src={img3} alt="Card image cap" />
  {/* <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
   */}
</div>
</div>
</div>


  </div>
</div>

  </section>
 )
}
