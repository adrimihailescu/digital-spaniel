/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CardProps } from "../types/card";

enum LoadingState {
  idle,
  pending,
  fulfilled,
  failed,
}

export interface TestimonialsState {
  cardsData: CardProps[];
  loading: LoadingState;
}

const initialState: TestimonialsState = {
  cardsData: [],
  loading: LoadingState.idle,
};

export const getCardsData = createAsyncThunk(
  "testimonials/getCardsData",
  async (url: string) => {
    const res = await fetch(url).then((data) => data.json());
    return res;
  }
);

export const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCardsData.fulfilled, (state, { payload }) => {
      state.cardsData = payload.data;
      state.loading = LoadingState.fulfilled;
    }),
      builder.addCase(getCardsData.pending, (state, { payload }) => {
        state.loading = LoadingState.pending;
      }),
      builder.addCase(getCardsData.rejected, (state, { payload }) => {
        state.loading = LoadingState.failed;
        console.log(payload);
      });
  },
});

export default testimonialsSlice.reducer;
