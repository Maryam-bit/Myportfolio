import React from 'react'
import Navbar from './Navbar'
import Text from './Text'
import Image from './Image'
export default function HomeSec() {
 return (
  <>
   <section name="home" id="home" className="home">
     <div className="child">
    <Navbar />
    <div className="container-fluid">
     <div className="row">
      <div className="col-md-6">
    <Text />
      </div>
      <div className="col-md-6 mt-5">
       <Image />
      </div>
     </div>
    </div>
    <br />
    <br />
</div>
   </section>
  </>
 )
}
