import React from 'react';




const Cars = ({image,name,onRouteChange}) => {
  return (

 


     <div className='tc grow bg-white br3 pa3 ma2 dib bw2 shadow-5'>

  


      <img alt='Cars' src={image} />
      <h2>{name}</h2>
      <div>
        <div className="lh-copy mt3">
              <input  
              onClick = {onRouteChange}
                className="b ph3 pv2 input-reset ba b--white  bg-red grow pointer f6 link dib white "
            
              type="submit"
              value = "Book!"
              />
              </div>
               <div className="lh-copy mt">
              <p 
                className="b link ph2 pv2 input-reset ba b--white  bg-green grow pointer f6 dib white "
              >
                Learn More!
                
              </p>
              </div>
      </div>
    </div>

  );
}

export default Cars
   