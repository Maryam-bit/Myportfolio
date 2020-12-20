import React from "react";
import ProgressBar from "react-animated-progress-bar";
import hd from "../img/hdd.png";



// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                               skills
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
export default function Skills() {
  return (
    <section name="skills" id="skills" className="skills">



{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                  heading                                  */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

      <div className="heading">
        <h1>SKILLS</h1>
        <img src={hd} />
      </div>




      <div className="container mt-3">
        <div className="row">



          <div className="col-md-6 pl-3 pr-3">
            <div data-aos="fade-right">
              <p>HTML5</p>
              <ProgressBar
                style={{ width: "85%" }}
                height="10px"
                rect
                fontColor="grey"
                rectBorderRadius="10px"
                trackPathColor="transparent"
                bgColor="#333333"
                trackBorderColor="grey"
                percentage="94"
                trackPathColor="#f0f0f0"
                trackBorderColor="lightgrey"
                defColor={{
                  fair: "orangered",
                  good: "yellow",
                  excellent: "#0282c7",
                  poor: "red",
                }}
              />
            </div>
            <br />


            <div data-aos="fade-right">
              <p>Bootstrap</p>
              <ProgressBar
                style={{ width: "85%" }}
                height="10px"
                rect
                fontColor="grey"
                rectBorderRadius="10px"
                trackPathColor="transparent"
                bgColor="#333333"
                trackBorderColor="grey"
                percentage="92"
                trackPathColor="#f0f0f0"
                trackBorderColor="lightgrey"
                defColor={{
                  fair: "orangered",
                  good: "yellow",
                  excellent: "#0282c7",
                  poor: "red",
                }}
              />
            </div>
            <br />


            <div data-aos="fade-right">
              <p>Firebase</p>
              <ProgressBar
                style={{ width: "85%" }}
                height="10px"
                rect
                fontColor="grey"
                rectBorderRadius="10px"
                trackPathColor="transparent"
                bgColor="#333333"
                trackBorderColor="grey"
                percentage="70"
                trackPathColor="#f0f0f0"
                trackBorderColor="lightgrey"
                defColor={{
                  fair: "orangered",
                  good: "#0282c7",
                  excellent: "#0282c7",
                  poor: "red",
                }}
              />
            </div>
            <br />
          </div>




          <div className="col-md-6 pl-3 pr-3">


            <div data-aos="fade-left">
              <p>CSS3</p>
              <ProgressBar
                style={{ width: "85%" }}
                height="10px"
                rect
                fontColor="grey"
                rectBorderRadius="10px"
                trackPathColor="transparent"
                bgColor="#333333"
                trackBorderColor="grey"
                percentage="91"
                trackPathColor="#f0f0f0"
                trackBorderColor="lightgrey"
                defColor={{
                  fair: "orangered",
                  good: "yellow",
                  excellent: "#0282c7",
                  poor: "red",
                }}
              />
            </div>
            <br />



            <div data-aos="fade-left">
              <p>JavaScript</p>
              <ProgressBar
                style={{ width: "85%" }}
                height="10px"
                rect
                fontColor="grey"
                rectBorderRadius="10px"
                trackPathColor="transparent"
                bgColor="#333333"
                trackBorderColor="grey"
                percentage="69"
                trackPathColor="#f0f0f0"
                trackBorderColor="lightgrey"
                defColor={{
                  fair: "orangered",
                  good: "#0282c7",
                  excellent: "#0282c7",
                  poor: "red",
                }}
              />
            </div>
            <br />


            <div data-aos="fade-left">
              <p>React</p>
              <ProgressBar
                style={{ width: "85%" }}
                height="10px"
                rect
                fontColor="grey"
                rectBorderRadius="10px"
                trackPathColor="transparent"
                bgColor="#333333"
                trackBorderColor="grey"
                percentage="89"
                trackPathColor="#f0f0f0"
                trackBorderColor="lightgrey"
                defColor={{
                  fair: "orangered",
                  good: "yellow",
                  excellent: "#0282c7",
                  poor: "red",
                }}
              />
            </div>
            <br />

          </div>


        </div>
      </div>
    </section>
  );
}
