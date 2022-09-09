import { Todo } from "@prisma/client";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import {
  Heading,
  Text,
  Flex,
  IconButton,
  Button,
  Spacer,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const TodoBox = ({ initTodo }: { initTodo: Todo }) => {
  const [todo, setTodo] = useState<Todo>(initTodo);

  const handleUpdate = async () => {
    const updatedTodo = { ...todo, completed: !todo.completed };

    await axios.put("/api/todo", updatedTodo);

    setTodo(updatedTodo);
  };

  const handleDelete = async () => {
    await axios.delete("/api/todo", {
      data: {
        id: todo.id,
      },
    });

    window.location.reload();
  };

  return (
    <Flex
      direction="column"
      gap="3"
      p="5"
      bg="white"
      rounded="xl"
      textColor="black"
    >
      <Heading>{todo.title}</Heading>
      <Text>{todo?.content}</Text>
      <Spacer />
      <Flex gap="3">
        <IconButton
          icon={todo.completed ? <AiOutlineCheck /> : <AiOutlineClose />}
          aria-label={todo.completed ? "Mark as not done" : "Mark as done"}
          colorScheme={todo.completed ? "green" : "red"}
          onClick={() => void handleUpdate()}
        />
        <Button onClick={() => void handleDelete()} colorScheme="red">
          Delete
        </Button>
      </Flex>
    </Flex>
  );
};

export default TodoBox;
