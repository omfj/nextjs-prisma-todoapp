import { SimpleGrid } from "@chakra-ui/react";
import { Todo } from "@prisma/client";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import TodoBox from "./todo-box";

const TodoOverview = () => {
  const { data, error } = useSWR("/api/todo", fetcher);
  if (error) return <div>An error occured.</div>;
  if (!data) return <div>Loading ...</div>;

  return (
    <SimpleGrid
      gap="5"
      columns={[1, null, 2, null, 3]}
      maxW="1000px"
      mx="auto"
      my="5"
    >
      {data.map((todo: Todo) => (
        <TodoBox initTodo={todo} key={todo.id} />
      ))}
    </SimpleGrid>
  );
};

export default TodoOverview;
