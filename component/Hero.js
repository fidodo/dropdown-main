import React,{useState} from 'react'
import Meet from "../public/images/client-meet.svg"
import Databiz from "../public/images/client-databiz.svg"
import Audiophile from "../public/images/client-audiophile.svg"
import Maker from "../public/images/client-maker.svg"


function Hero() {
  
  return (
    <>
      <div className="container">
         <div style={{margin:"20px"}} className="row">
            <div style={{paddingTop:"180px"}} className="col-6">
              <div style={{marginBottom:"30px"}}>
             <h1><strong> Make<br/>remote work</strong></h1>
             </div>
             <div style={{marginBottom:"30px"}}>
             <h6 style={{color:"grey"}}>
            <small>
        Get your team in sync, no matter yout locaation <br/>
        Streamline processes, create team rituals,<br/> and watch productivity soar.
           </small></h6>
           </div>
           <div style={{marginBottom:"140px"}}>
              <button  type="button" class="btn btn-dark">Learn more</button>
            </div>
            <div className='d-flex'>
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
    <div className="col-6">
    
       <div >
        <img style={{width:"600px", height:"605px"}} src="/../images/heroDesktop.png" alt='bg picture' />
        </div>
       
    </div>
  </div>
</div>
  </>
  
  )
}

export default Hero