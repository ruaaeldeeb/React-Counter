import { createSlice } from "@reduxjs/toolkit";

//intialstate
const initialState = {
  counter: 0,
};
//reducer
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increamentCount: (state, action) => {
      state.counter = state.counter + 1;
    },
    decreamentCount: (state, action) => {
      if (state.counter > 0) {
        state.counter = state.counter - 1;
      }
    },
  },
});
//action
console.log(counterSlice);
export const { increamentCount } = counterSlice.actions;
export const { decreamentCount } = counterSlice.actions;
