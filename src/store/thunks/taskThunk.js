import { createAsyncThunk } from "@reduxjs/toolkit";
import Parse from 'parse/react-native';

export const addNewTask = createAsyncThunk('task/create', async ({ title, description }) => {

  const task = await Parse.Cloud.run("addNewTask", { title, description });

  return JSON.parse(task);
});

export const fetchTasks = createAsyncThunk('task/fetch', async () => {

  const taskList = await Parse.Cloud.run("fetchUserTasks");

  return JSON.parse(taskList);
});

export const deleteTask = createAsyncThunk('task/delete', async (taskId) => {

  const status = await Parse.Cloud.run("removeTask", { taskId });

  return JSON.parse(status);

})