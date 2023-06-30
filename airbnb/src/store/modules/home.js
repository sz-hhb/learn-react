import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHomeGoodPriceInfoData } from "@/services/modules/home";

export const fetchHomeGoodPriceInfoAction = createAsyncThunk(
  "fetchdata",
  async () => {
    const res = await getHomeGoodPriceInfoData();
    return res;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchHomeGoodPriceInfoAction.fulfilled,
      (state, { payload }) => {
        state.goodPriceInfo = payload;
      }
    );
  },
});

export default homeSlice.reducer;
