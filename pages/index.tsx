import { Box, Center, Heading } from "@chakra-ui/react";
import CreateTodoModal from "../components/create-todo-modal";
import TodoOverview from "../components/todo-overview";

const Home = () => {
  return (
    <Box>
      <Center flexDir="column" gap="5">
        <Heading>Your TODOs</Heading>
        <CreateTodoModal />
      </Center>

      <TodoOverview />
    </Box>
  );
};

export default Home;
