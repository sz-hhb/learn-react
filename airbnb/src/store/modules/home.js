import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getHomeGoodPriceInfoData,
  getHomeHighScoreInfoData,
} from "@/services/modules/home";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  // 第二个参数是store对象
  (payload, { dispatch, getState }) => {
    getHomeGoodPriceInfoData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });
    getHomeHighScoreInfoData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
  //     state.goodPriceInfo = payload;
  //   });
  // },
});

export const { changeGoodPriceInfoAction, changeHighScoreInfoAction } =
  homeSlice.actions;

export default homeSlice.reducer;
