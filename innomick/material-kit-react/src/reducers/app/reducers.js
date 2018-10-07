import { combineReducers } from "redux";
import { routerReducer as router } from "react-router-redux";
import { reducer as reduxFormReducer } from "redux-form";


export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    form: reduxFormReducer, // mounted under "form",
    router,
    ...asyncReducers,
  });
};

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
