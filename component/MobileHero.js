import React from 'react'
import Meet from "../public/images/client-meet.svg"
import Databiz from "../public/images/client-databiz.svg"
import Audiophile from "../public/images/client-audiophile.svg"
import Maker from "../public/images/client-maker.svg"

function MobileHero() {
  return (
    <div>
         <div  >
        <img style={{width:"550px", height:"450px"}} src="/../images/image-hero-mobile.png" alt='bg picture' />
        </div>
        <div style={{marginTop:"40px"}}>
        <h1 style={{ letterSpacing: "8px"}}><strong><center> Make remote work</center></strong></h1>
        </div>
        <div style={{marginTop:"20px"}}>
             <h6 style={{color:"grey", letterSpacing: "4px"}}>
            <small><center>
        Get your team in sync, no matter your <br/>locaation 
        Streamline processes, create <br/> team rituals, and watch productivity soar.</center>
           </small></h6>
           </div>
           <div style={{marginTop:"20px",marginBottom:"90px" }}><center>
              <button  type="button" class="btn btn-dark">Learn more</button></center>
            </div> 
            <div className='d-flex' style={{paddingLeft:"30px"}}>
          <div >
            <Databiz  />
          </div>
          <div style={{paddingLeft:"20px"}}>
            <Audiophile />
          </div>
          <div style={{paddingLeft:"30px"}}>
            <Meet />
          </div>
          <div style={{paddingLeft:"30px"}}>
            <Maker />
          </div>
          </div>
    </div>
  )
}

export default MobileHero