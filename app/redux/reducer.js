import { combineReducers } from 'redux';

import accordeon from './modules/accordeon';
import auth from './modules/auth';

export default combineReducers({
  accordeon,
  auth
});
