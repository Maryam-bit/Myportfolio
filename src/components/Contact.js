import React from "react";
import img from "../img/img2.jpg";
import hd from "../img/hdd.png";




// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                              Contact
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

export default function Contact() {
  return (
    <section name="contact" id="contact" className="contact">




{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                 About me                                  */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

      <div className="heading">
        <h1>CONTACT ME</h1>
        <img src={hd} />
      </div>



      <div className="container mt-5">



{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                 Image                                  */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

        <div style={{ textAlign: "center" }}>
          <img width="200px" src={img} className="rounded-circle mt-2" />
        </div>




{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                               Contact Info                                */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

        <div className="row mt-5">
          

          
          <div className="col-md-4">
            <div
              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
            >
              <div className="cardd mb-4 text-center shadow p-3">
                <i className="fa fa-envelope icon"></i>
                <h5>Email</h5>
                <p>noormaryam530@gmail.com</p>
              </div>
            </div>
          </div>



          <div className="col-md-4">
            <div
              data-aos="flip-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
            >
              <div className="cardd mb-4 text-center shadow p-3">
                <i className="fa fa-globe icon"></i>
                <h5>Social media</h5>
                <a
                  href="https://www.facebook.com/profile.php?id=100037932721862"
                  target="_blank"
                >
                  <i className="fa fa-facebook sm"></i>
                </a>
                <a href="https://github.com/Maryam-bit" target="_blank">
                  {" "}
                  <i className="fa fa-github sm"></i>
                </a>
              </div>
            </div>
          </div>



          <div className="col-md-4">
            <div
              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
            >
              <div className="cardd mb-4 text-center shadow p-3">
                <i className="fa fa-phone icon"></i>
                <h5>Contact No</h5>
                <p>03352899988</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
