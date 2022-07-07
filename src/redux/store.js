import { configureStore } from "@reduxjs/toolkit";
import { moodSlice } from './data';
export const store = configureStore({reducer: moodSlice.reducer})