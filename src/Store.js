import {configureStore} from "@reduxjs/toolkit"

import { rootReducer } from "./Slices/Reducer"

export const store=configureStore({
    reducer:rootReducer
})