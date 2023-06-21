import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHomeMultidataAction = createAsyncThunk(
  "fetch/homemultidata",
  async (extraInfo, { dispatch, getState }) => {
    const res = await axios.get("http://123.207.32.32:8000/home/multidata");
    return res.data;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    banners: [],
    recommends: [],
  },
  // 同步Action
  reducers: {
    changeBanners(state, { payload }) {
      state.banners = payload;
    },
    changeRecommends(state, { payload }) {
      state.recommends = payload;
    },
  },
  // 异步Action
  // object nation
  // extraReducers: {
  //   [fetchHomeMultidataAction.pending](state, action) {
  //     console.log("fetchHomeMultidataAction pending");
  //   },
  //   [fetchHomeMultidataAction.fulfilled](state, { payload }) {
  //     console.log("fetchHomeMultidataAction fulfilled");
  //     state.banners = payload.data.banner.list;
  //     state.recommends = payload.data.recommend.list;
  //   },
  //   [fetchHomeMultidataAction.rejected](state, action) {
  //     console.log("fetchHomeMultidataAction rejected");
  //   },
  // },
  // builder callback
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeMultidataAction.pending, (state, action) => {
        console.log("fetchHomeMultidataAction pending");
      })
      .addCase(fetchHomeMultidataAction.fulfilled, (state, { payload }) => {
        state.banners = payload.data.banner.list;
        state.recommends = payload.data.recommend.list;
      });
  },
});

export const { changeBanners, changeRecommends } = homeSlice.actions;

export default homeSlice.reducer;
