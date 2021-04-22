import axiosInstance from '../config/axios';

export const getTasks = async () => {
  return axiosInstance
    .get('/tasks')
    .then(res => res.data)
    .catch(err => err);
};

export const addTask = async data => axiosInstance.post('/tasks', data);

export const getTaskById = async id =>
  axiosInstance
    .get(`/tasks/${id}`)
    .then(res => res.data)
    .catch(err => err);

export const updateTaskById = async (id, data) =>
  axiosInstance.patch(`/tasks/${id}`, data);

export const deleteTask = async id => {
  axiosInstance.delete(`/tasks/${id}`);
};
