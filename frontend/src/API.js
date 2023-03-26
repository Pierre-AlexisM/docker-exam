import axios from "axios";

export const getTodos = async () => {
  try {
    const response = await axios.get("/todos");
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const createTodo = async (formData) => {
  try {
    const response = await axios.post("http://localhost:4001/todos", formData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (todoId) => {
  try {
    const response = await axios.delete(`http://localhost:4001/todos/todos/${todoId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error deleting todo");
  }
};
