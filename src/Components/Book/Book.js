import React from 'react';




const Book = ({onRouteChange}) => {


  return (





  <div> <h3> Booking Details </h3> 
  <div>






        <div className="lh-copy mt3">
              <p
                className="b ph3 pv2 input-reset ba b--white  bg-gray grow pointer f6 link dib white "
              >
                Book!

              </p>
              </div>
               <div className="lh-copy mt">



              <p   onClick = {() => onRouteChange('home')}
                className="b link ph2 pv2 input-reset ba b--white   grow pointer f6 dib black ">
                Back
                
              </p>
              </div>
      </div>
      </div>


    );
  
}

export default Book;
