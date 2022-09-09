import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import TodoAPI from "../lib/todo";

interface FormValues {
  title: string;
  content: string;
}

const CreateTodoModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const { register, handleSubmit, reset } = useForm<FormValues>();

  const submitForm: SubmitHandler<FormValues> = async (values) => {
    const isSuccess = await TodoAPI.createTodo(values.title, values.content);

    toast({
      title: isSuccess ? "Todo created" : "Failed to create todo",
      status: isSuccess ? "success" : "error",
      duration: 3000,
      isClosable: true,
    });

    if (isSuccess) {
      onClose();
      reset();
    }
  };

  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>
        Create a Todo
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a Todo</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(submitForm)}>
            <ModalBody>
              <VStack spacing={4}>
                <FormControl id="title" isRequired>
                  <FormLabel fontWeight="bold">Title</FormLabel>
                  <Input {...register("title")} />
                </FormControl>
                <FormControl id="content">
                  <FormLabel fontWeight="bold">Content</FormLabel>
                  <Textarea {...register("content")} />
                </FormControl>
              </VStack>
            </ModalBody>
            <ModalFooter
              justifyContent={["center", "right"]}
              flexWrap="wrap"
              gap="3"
            >
              <Button type="submit" colorScheme="green">
                Send inn
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Lukk
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateTodoModal;
