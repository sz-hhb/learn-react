import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import countReducer from "./counter";
import homeReducer from "./home";
import userReducer from "./user";

// 正常情况下: store.dispatch(object)
// 想要派发函数: store.dispatch(function)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// function reducer(state = {}, action) {
//   return {
//     counter: countReducer(state.counter, action),
//     home: homeReducer(state.counter, action),
//     user: userReducer(state.userReducer, action),
//   };
// }

const reducer = combineReducers({
  counter: countReducer,
  home: homeReducer,
  user: userReducer,
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

// function thunk(store) {
//   const next = store.dispatch;

//   function dispatchThunk(action) {
//     if (typeof action === "function") {
//       next(store.dispatch, store.getState);
//     } else {
//       next(action);
//     }
//   }

//   store.dispatch = dispatchThunk;
// }

// thunk(store);

export default store;
