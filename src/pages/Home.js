import React,{useState, useEffect} from "react"; 
import { useHistory } from 'react-router-dom';
import MuiAlert from "@material-ui/lab/Alert";
import { connect } from "react-redux"; 
import { getClimaRequest } from "../redux/clima/action";
import Clima from "../components/Clima";
import { Button } from 'antd'; 
import Progress from '../components/Progress'; 
{document.title = 'Clima'} 

function Alert(props) {
  return <MuiAlert elevation={6} 
                   variant="filled" {...props} />;
}

const Home = ({ dispatch, carregando, mensagem }) => {    
  const [coordenadas,setCoordenadas] = useState()   
  const history = useHistory();

  useEffect(()=>{           
    if(coordenadas !== undefined){
      dispatch(getClimaRequest(coordenadas));      
    }
  },[coordenadas,dispatch])    

  return (    
      <div class="primaria" align="center" >
        <br/>
        <Button onClick={() =>  setCoordenadas([-16.67861,-49.25389])  }> Goiânia </Button>  
        <Button onClick={() =>  setCoordenadas([-23.54750,-46.63611])  }> São Paulo </Button>  
        <Button onClick={() =>  setCoordenadas([-3.718390,-38.54340])  }> Fortaleza </Button>   
        <br/><br/>
        {carregando && <Progress />} 
        {coordenadas !== undefined && !carregando  && <Clima />} 
        <br/>       
        {coordenadas !== undefined && !carregando && <Button onClick={() =>  history.push("/DetalheClima")}>Mostrar Min/Max</Button> }           
        {mensagem!== undefined && <Alert severity="error">{mensagem}</Alert>}
        
      </div>
    )
}

const mapStateToProps = (state) => ({ 
  carregando: state.clima.carregando,
  mensagem: state.clima.mensagem,
}); 
 
export default connect(mapStateToProps, null)(Home);

 