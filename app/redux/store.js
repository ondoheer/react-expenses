/* global window */
/* eslint-disable no-underscore-dangle */
import {
  createStore,
  applyMiddleware,
  compose,
}                             from 'redux';
import thunk                  from 'redux-thunk';
import reducer                from './reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

// const defaultMiddleware = (action, next) => {
//   next(action);
// };

// const thunkMiddleware = (action, next) => {
//   if (typeof action === 'function' {
//     action((realAction) => {
//       next(realAction)
//     })
//   })
// }


// const scrollHandler = {};
// const throttle = (fn, time) => {
//   let run = true;

//   return (...args) => {
//     if (run) {
//       fn(...args);
//       run = false;
//       setTimeout(() => run = true, time);
//     }
//   }
// }
// const throttledScrollhandler = throttle(scrollHandler, 1000);


