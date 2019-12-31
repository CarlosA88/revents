import { createStore } from "redux"
import rootReducer from '../reducers/rootReducer'
 import { compose } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";

export const configureStore = () => {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//This line allow redux devtools to work

    const store = createStore( rootReducer, composeEnhancers() );

    return store;
}