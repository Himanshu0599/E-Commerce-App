import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import favReducer from "./favReducer";
import cartReducer from "./cartReducer";
import { persistStore,persistReducer, FLUSH ,REHYDRATE ,REGISTER,PAUSE,PURGE,PERSIST} from "redux-persist";

const favPersistConfig ={
    key: "fav",
    version: 1,
    storage,
}
const cartPersistConfig ={
    key: "cart",
    version: 1,
    storage,
}
const persistedFavReducer = persistReducer(favPersistConfig, favReducer);
const persistedCartReducer= persistReducer(cartPersistConfig,cartReducer);

export const store = configureStore({
    reducer:{
        fav:persistedFavReducer,
        cart:persistedCartReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
       serializableCheck:{
         ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
       }
    })
})
export let persistor = persistStore(store);