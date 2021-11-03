import React, {useEffect} from "react";  
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Button, Card } from 'antd';  

const DetalheClima = ({ resultado }) => {      
  useEffect(()=>{           
   console.log(resultado);
  },[resultado])  
  const history = useHistory();

    return (
      
      <div align="center"> <br/>  
      <Card hoverable style={{ width: 240 }} >
        <div><h1>     {resultado === undefined? "": resultado.cidade}</h1> </div>          
        <div><h3>Max: {resultado === undefined? "": resultado.maxima}  °C </h3></div>
        <div><h3>Min: {resultado === undefined? "": resultado.minima } °C </h3></div> 
        <br/> 
        </Card><br/>  
        <Button onClick={() => history.push('/')}>Voltar</Button> 
      </div> 
    )
}

const mapStateToProps = (state) => ({
  resultado: state.clima.resultado,  
}); 
 
export default connect(mapStateToProps, null)(DetalheClima);