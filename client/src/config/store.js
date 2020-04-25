
import { createStore, applyMiddleware, combineReducers } from "redux";
import {  persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import authReducer from "../redux/reducers/auth";
import { connectRouter,routerMiddleware } from 'connected-react-router'
import {composeWithDevTools} from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory({});

const authPersistConfig = {
    key: "auth",
    storage
  };

  const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth: persistReducer(authPersistConfig, authReducer),
  })


export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        thunk 
      ),
    ),
  )
    return store
      }
