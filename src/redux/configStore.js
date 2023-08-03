import { configureStore } from "@reduxjs/toolkit";
import nguoiDungSlice from "./slices/nguoiDungSlice";
import loadingSlice from "../pages/LoaDing/LoadingSlice";

export const store = configureStore({
  reducer: {
    nguoiDung: nguoiDungSlice,
    loading: loadingSlice,
  },
});
