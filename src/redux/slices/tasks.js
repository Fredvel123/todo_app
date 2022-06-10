import { createSlice } from "@reduxjs/toolkit";

export const tasksSlices = createSlice({
  name: "tasks",
  initialState: {
    value: [],
  },
  reducers: {
    setTasks: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setTasks } = tasksSlices.actions;
export default tasksSlices.reducer;
