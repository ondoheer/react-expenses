import { combineReducers } from 'redux';

import accordeon from './modules/accordeon';
import auth from './modules/auth';
import expenses from './modules/expenses';
import categories from './modules/categories';
import homepage from './modules/homepage';

export default combineReducers({
  accordeon,
  auth,
  expenses,
  categories,
  homepage
});
