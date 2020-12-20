import React from "react";
import img1 from "../img/p1.jpg";
import img2 from "../img/p2.jpg";
import img3 from "../img/p3.jpg";
import img4 from "../img/p4.jpg";
import img5 from "../img/p5.PNG";
import img6 from "../img/p6.PNG";
import hd from "../img/hdd.png";




// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                             portfolio
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

export default function Portfolio() {
  return (
    <section name="portfolio" name="portfolio" className="portfolio">



{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                  heading                                  */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
      <div className="heading">
        <h1>PORTFOLIO</h1>
        <img src={hd} />
      </div>
      <br />
      <br />
      <br />



{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                   cards                                   */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

      <div className="container">
        <div className="row">



          <div className="col-md-4">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div class="card mb-5 shadow ml-3 mr-3">
                <img
                  class="card-img-top pl-4 pr-4"
                  src={img1}
                  alt="Card image cap"
                />
                <div class="card-body text-center">
                  <h5 class="card-title">Expense Tracker</h5>
                  <a
                    href="http://maryam-expense-tracker.surge.sh/"
                    target="_blank"
                  >
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <a
                    href="https://github.com/Maryam-bit/expense-Trancker"
                    target="_blank"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>



          <div className="col-md-4">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div class="card mb-5 shadow ml-3 mr-3">
                <img
                  class="card-img-top pl-4 pr-4"
                  src={img2}
                  alt="Card image cap"
                />
                <div class="card-body text-center">
                  <h5 class="card-title">Covid-19 Tracker</h5>
                  <a
                    href="http://covid19Tracker009.surge.sh"
                    target="_blank"
                  >
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <a
                    href="https://github.com/Maryam-bit/covid19-tracker"
                    target="_blank"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>



          <div className="col-md-4">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div class="card mb-5 shadow ml-3 mr-3">
                <img
                  class="card-img-top pl-4 pr-4"
                  src={img3}
                  alt="Card image cap"
                />
                <div class="card-body text-center">
                  <h5 class="card-title">Shoe Store</h5>
                  <a href="http://shoestore009.surge.sh/" target="_blank">
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <a
                    href="https://github.com/Maryam-bit/shoe-store"
                    target="_blank"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>



          <div className="col-md-4">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div class="card mb-5 shadow ml-3 mr-3">
                <img
                  class="card-img-top pl-4 pr-4"
                  src={img4}
                  alt="Card image cap"
                />
                <div class="card-body text-center">
                  <h5 class="card-title">OLX clone</h5>
                  <a href="https://olx-react-88571.web.app/" target="_blank">
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <a href="https://github.com/Maryam-bit/olx" target="_blank">
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>




          <div className="col-md-4">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div class="card mb-5 shadow ml-3 mr-3 ">
                <img
                  class="card-img-top pl-4 pr-4"
                  src={img5}
                  alt="Card image cap"
                />
                <div class="card-body text-center">
                  <h5 class="card-title">Landing Page</h5>
                  <a
                    href="https://maryam-bit.github.io/purple-web/"
                    target="_blank"
                  >
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <a
                    href="https://github.com/Maryam-bit/purple-web"
                    target="_blank"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>




          <div className="col-md-4">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div class="card mb-5 shadow ml-3 mr-3">
                <img
                  class="card-img-top pl-4 pr-4"
                  src={img6}
                  alt="Card image cap"
                />
                <div class="card-body text-center">
                  <h5 class="card-title">Student Portfolio Template</h5>
                  <a
                    href="https://maryam-bit.github.io/My-portfolio/"
                    target="_blank"
                  >
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <a
                    href="https://github.com/Maryam-bit/My-portfolio"
                    target="_blank"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>



{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                 button                                  */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

        <div className="moreProj text-center">
          <a href="https://github.com/Maryam-bit" target="_blank">
            <button className="btn btn-light">More Projects</button>
          </a>
        </div>

      
      </div>
    </section>
  );
}
