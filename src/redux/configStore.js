import {createStore,compose,applyMiddleware} from "redux";
import rootReducer from "../reducers/index";

const composeEnhancer=process.env.NODE_ENV!=="production"&&
typeof window==="object"&&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    shouldHotReload:false
}):compose;


const configStore=()=>{
    const middleWares=[];
    const enhancer=[applyMiddleware(...middleWares)];
   
    const store=createStore(rootReducer,composeEnhancer(...enhancer));
    
    return store;
    
};

export default configStore;