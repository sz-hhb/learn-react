import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getHomeGoodPriceInfoData,
  getHomeHighScoreInfoData,
  getHomeDiscountInfoData,
  getHomeRecommendInfoData,
  getHomeLongforInfoData,
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
    getHomeDiscountInfoData().then((res) => {
      dispatch(changeDiscountInfoAction(res));
    });
    getHomeRecommendInfoData().then((res) => {
      dispatch(changeRecommendInfoAction(res));
    });
    getHomeLongforInfoData().then((res) => {
      dispatch(changeLongForInfoAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload;
    },
    changeLongForInfoAction(state, { payload }) {
      state.longforInfo = payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
  //     state.goodPriceInfo = payload;
  //   });
  // },
});

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongForInfoAction,
} = homeSlice.actions;

export default homeSlice.reducer;
