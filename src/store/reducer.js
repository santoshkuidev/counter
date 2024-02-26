// reducer.js
import { INCREASE_COUNTER, DECREASE_COUNTER, RESET_COUNTER } from './actions';

const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return { ...state, count: state.count + 1 };
    case DECREASE_COUNTER:
      return { ...state, count: state.count - 1 };
    case RESET_COUNTER:
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export default counterReducer;
