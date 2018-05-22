import { combineReducers } from 'redux';
import counterReducer from './counter_reducer';
import resultReducer from './result_reducer';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

export default rootReducer;
