import { Todo } from "@prisma/client";
import axios from "axios";

const TodoAPI = {
  getTodos: async (): Promise<Array<Todo>> => {
    const { data } = await axios.get("/api/todo");

    return data;
  },

  createTodo: async (title: string, content: string): Promise<boolean> => {
    const { status } = await axios.post("/api/todo", {
      title,
      content,
    });

    return status === 200;
  },
};

export default TodoAPI;
