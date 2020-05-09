import React, {Component} from 'react';
import './App.css';
import CarCard from './Components/CarCard/Card';
import Beat from "./Beat.jpg"
import Altroz from "./Altroz.jpg"
import Dzire from "./Dzire.jpg"
import Hyundai from "./Hyundai.jpg"
import Nano from "./Nano.jpg"
import Nexon from "./Nexon.jpg"
import Swift  from "./Swift.jpg"
import Verna from "./Verna.jpg"
import {cars} from "./cars"
import Book from './Components/Book/Book';

class App extends Component {
  constructor(){
    super();
    this.state = {
      route:'home'
    }

  


  }


onRouteChange = (route ) => {
    this.setState({route: route});
   }


  

  render(){
  return (
    <div className="App">


 {this.state.route === 'home' 
 ? <div >
 <CarCard name={cars[0].car} image={Beat} onRouteChange={this.onRouteChange} /> 
   <CarCard name={cars[1].car} image={Altroz} onRouteChange={this.onRouteChange} /> 
 <CarCard name={cars[2].car} image={Dzire} onRouteChange={this.onRouteChange} /> 
 <CarCard name={cars[3].car} image={Dzire} onRouteChange={this.onRouteChange}/> 
  <CarCard  name={cars[4].car} image={Hyundai} onRouteChange={this.onRouteChange}/> 
   <CarCard name={cars[5].car} image={Nano} onRouteChange={this.onRouteChange}/> 
    <CarCard name={cars[6].car} image={Nexon} onRouteChange={this.onRouteChange}/> 
     <CarCard name={cars[7].car} image={Swift} onRouteChange={this.onRouteChange}/> 
  </div>
 : <Book /> 

}  

   </div>

  
  );
}
}

export default App;
 