import { configureStore } from "@reduxjs/toolkit";
import theme from "./slices/theme";
import tasks from "./slices/tasks";

export const store = configureStore({
  reducer: {
    theme,
    tasks,
  },
});
