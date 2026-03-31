import { configureStore } from "@reduxjs/toolkit";

import  MenuReducer  from "../Slice/Menus";
import CartReducer from "../Slice/Menus";
import DeleteReducer from "../Slice/Menus";

const store=configureStore({
    reducer:{
        MenuInfo:MenuReducer,
        CartInfo:CartReducer,
        DeleteInfo:DeleteReducer,
    }
});

export default store;