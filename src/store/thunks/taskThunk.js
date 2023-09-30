import { createAsyncThunk } from "@reduxjs/toolkit";
import Parse from 'parse/react-native';

export const addNewTask = createAsyncThunk('task/create', async ({ title, description }) => {

  const task = await Parse.Cloud.run("addNewTask", { title, description });

  return JSON.parse(task);

})