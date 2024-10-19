import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import wishlistSlice from "./wishlistSlice";


export const store = configureStore({
  reducer: {
    users: usersSlice,
    wishlist: wishlistSlice,
  },
});
