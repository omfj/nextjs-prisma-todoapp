import {
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Spacer,
  IconButton,
  Button,
  GridItem,
  Center,
  useColorModeValue,
  Tag,
} from "@chakra-ui/react";
import { Todo } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const TodoOverview = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const bgColor = useColorModeValue("gray.100", "gray.700");

  const cols = [1, null, 2, null, 3];

  useEffect(() => {
    const getTodos = async () => {
      const { data } = await axios.get("/api/todo");

      setTodos(data);
    };

    void getTodos();
  });

  const handleUpdate = async (todo: Todo) => {
    const updatedTodo = { ...todo, completed: !todo.completed };

    await axios.put("/api/todo", updatedTodo);
  };

  const handleDelete = async (todo: Todo) => {
    await axios.delete("/api/todo", {
      data: {
        id: todo.id,
      },
    });
  };

  return (
    <SimpleGrid gap="5" columns={cols} maxW="1300px" mx="auto" my="10" p="5">
      {todos.length > 0 ? (
        todos.map((todo: Todo) => (
          <Flex
            direction="column"
            gap="3"
            p="5"
            rounded="xl"
            key={todo.id}
            bg={bgColor}
          >
            <Heading>{todo.title}</Heading>
            <Tag w="fit-content" border="1px solid" borderColor="gray.400">
              Created: {new Date(todo.createdAt).toLocaleDateString("no-NO")}
            </Tag>
            <Text>{todo?.content}</Text>
            <Spacer />
            <Flex gap="3">
              <IconButton
                icon={todo.completed ? <AiOutlineCheck /> : <AiOutlineClose />}
                aria-label={
                  todo.completed ? "Mark as not done" : "Mark as done"
                }
                colorScheme={todo.completed ? "green" : "red"}
                onClick={() => void handleUpdate(todo)}
              />
              <Button onClick={() => void handleDelete(todo)} colorScheme="red">
                Remove
              </Button>
            </Flex>
          </Flex>
        ))
      ) : (
        <GridItem colSpan={cols} my="10">
          <Center>
            <Heading fontFamily="serif">No TODOs found.</Heading>
          </Center>
        </GridItem>
      )}
    </SimpleGrid>
  );
};

export default TodoOverview;
