import produce from 'immer';
import { GET_CLIMA_ERROR, GET_CLIMA_REQUEST, GET_CLIMA_SUCCESS } from "./action";

const INITIAL_STATE = {
  resultado: undefined,
  carregando: false,
  mensagem: undefined,
};

export default function indicador(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_CLIMA_REQUEST: {
        draft.carregando = true;
        draft.mensagem = undefined;
        break;
      }
      case GET_CLIMA_SUCCESS: {
        draft.resultado = action.data;
        draft.carregando = false;
        draft.mensagem = undefined;
        break;
      }
      case GET_CLIMA_ERROR: {
        draft.carregando = false;
        draft.mensagem = action.message
        break;
      }
      default:
    }
  });
}
