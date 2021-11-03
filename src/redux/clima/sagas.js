import { call, put, takeLatest, all } from 'redux-saga/effects' 
import axios from "axios"; 
import { getClimaError, getClimaSuccess, GET_CLIMA_REQUEST } from './action';

export const getDadosTemperatura = (params) => axios.get("http://api.openweathermap.org/data/2.5/weather",{params});

export function* getClima({payload}) { 
    try {
     const params = {
         lat: payload[0],
         lon: payload[1],
         appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
         lang: 'pt',
         units: 'metric'
      };  

      const result = yield call(getDadosTemperatura, params); 
      const {main, name} = result.data;
      const {weather} = result.data;
      const resultado = {
         temperatura:  main.temp,
         maxima: main.temp_max,
         minima: main.temp_min,
         cidade: name,
         icone:  weather[0].icon
      }
      console.log(resultado);
      yield put(getClimaSuccess(resultado));

    } catch (e) {  
       const {cod, message} = e.response;
       yield put(getClimaError("CodError: "+cod+" Message: "+message));
    }
 } 

export default all([takeLatest(GET_CLIMA_REQUEST, getClima)]);