import React from "react";
import sev from "../img/oo.jpg";
import hd from "../img/hdd.png";

// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                                  Animation
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

export default function Services() {
  return (
    <section name="service" id="service" className="services">


{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                 heading                                  */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

      <div className="heading">
        <h1>MY SERVICES</h1>
        <img src={hd} />
      </div>
      <br />
      <br />



      <div className="container">
        <div className="row">




{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                  cards                                    */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

          <div className="col-md-4">
            <div
              data-aos="zoom-in-left"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              <div className="cardd mb-4 p-5 text-center">
                <img src={sev} className="ml-3" />
                <i className="fa fa-code"></i>
                <h3>Front-end</h3>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div
              data-aos="zoom-in-down"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              <div className="cardd mb-4 p-5 text-center">
                <img src={sev} className="ml-3" />
                <i className="fa fa-database ml-1"></i>
                <h3>Database</h3>
              </div>
            </div>
          </div>



          <div className="col-md-4">
            <div
              data-aos="zoom-in-right"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              <div className="cardd mb-4 p-5 text-center">
                <img src={sev} className="ml-3" />
                <i className="fa fa-cogs"></i>
                <br />
                <h3>Back-end</h3>
              </div>
            </div>
          </div>



        </div>
      </div>
    </section>
  );
}
