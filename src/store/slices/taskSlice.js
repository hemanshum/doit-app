import { createSlice } from '@reduxjs/toolkit';
import { addNewTask } from '../thunks/taskThunk';

const initialState = {
  tasks: [],
  taskStatus: null,
  isLoading: false,
  isError: false,
  error: null
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    clearMessage: (state) => {
      state.taskStatus = null;
      state.isError = false;
      state.error = null;
    }
  },
  extraReducers(builder) {
    // Create New Task
    builder.addCase(addNewTask.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addNewTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.taskStatus = action.payload;
    });
    builder.addCase(addNewTask.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    })
  }

})


export const { clearMessage } = taskSlice.actions;
export default taskSlice.reducer;

