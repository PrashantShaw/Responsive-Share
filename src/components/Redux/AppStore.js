import { configureStore } from "@reduxjs/toolkit";
import usersSlice from './Slice'

export default configureStore({
    reducer: {
        usersList: usersSlice
    }
})