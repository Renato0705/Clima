import React from "react";  
import { connect } from "react-redux"; 
import { Card } from 'antd';  
 
const Clima = ({resultado}) => {   
    return (
    <div aling="center">        
      <Card
        hoverable
        style={{ width: 240 }} 
      >   
      {<img src={`http://openweathermap.org/img/wn/${resultado === undefined ?"": resultado.icone}@2x.png`} />}    
        <h1> {resultado === undefined ? "":resultado.cidade}         </h1>
        <h1> {resultado === undefined ? "":resultado.temperatura} °C </h1>   
        <div>Max: {resultado === undefined ? "":resultado.maxima} °C</div>
        <div>Min: {resultado === undefined ? "":resultado.minima} °C</div>
      </Card> 
      
      </div> 
    )
}
   
const mapStateToProps = state =>  {
  return {
    resultado: state.clima.resultado, 
  }
}; 

export default connect(mapStateToProps, null)(Clima); 