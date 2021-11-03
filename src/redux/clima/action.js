
export const GET_CLIMA_REQUEST = "GET_CLIMA_REQUEST";
export const GET_CLIMA_SUCCESS = "GET_CLIMA_SUCCESS";
export const GET_CLIMA_ERROR = "GET_CLIMA_ERROR";

export function getClimaRequest(indicadores) {
    return {
      type: GET_CLIMA_REQUEST,
      payload: indicadores,
    };
}

export function getClimaSuccess(dados) {
    return {
      type: GET_CLIMA_SUCCESS,
      data: dados,
      
    };
}

export function getClimaError(error) {
    return {
      type: GET_CLIMA_ERROR,
      message: error,
    };
} 