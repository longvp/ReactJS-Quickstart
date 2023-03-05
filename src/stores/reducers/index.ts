import { combineReducers } from 'redux';

import uiReducer from './ui-reducer';

const rootReducer = combineReducers({
  screen: uiReducer,
});

export default rootReducer;
