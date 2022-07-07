import { Box, Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { FiCheckSquare, FiPlus, FiSquare, FiTrash } from "react-icons/fi";
import { client } from "../utils/client";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

type Todo = {
  id: string;
  title: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
};

const Todos: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoading, data: todos } = useQuery<Todo[]>("todos", () =>
    client.get("todos").then((res) => res.data.todos)
  );

  const toggleMutation = useMutation(
    (todo: Todo) =>
      client.patch(`/todos/${todo.id}`, {
        todo: { title: todo.title, done: !todo.done },
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );

  const deleteMutation = useMutation(
    (todo: Todo) => client.delete(`/todos/${todo.id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );

  if (isLoading) {
    return null;
  }

  if (todos) {
    return (
      <Box mt="24" mx="auto">
        <Flex alignItems="center" justifyContent="center" pos="relative">
          <Box
            px="8"
            pt="6"
            pb="10"
            bgColor="gray.light"
            borderRadius="16px"
            experimental_spaceY="4"
          >
            {todos.map((todo) => (
              <Flex
                alignItems="center"
                justifyContent="space-between"
                experimental_spaceX="4"
              >
                <Icon
                  onClick={() => toggleMutation.mutate(todo)}
                  fontSize="2xl"
                  color="gray.light_dark"
                  cursor="pointer"
                  _hover={{ color: "gray.dark" }}
                  as={todo.done ? FiCheckSquare : FiSquare}
                />
                <Text color="gray.dark" fontSize="xl">
                  {todo.title}
                </Text>

                <Icon
                  onClick={() => deleteMutation.mutate(todo)}
                  color="red.300"
                  _hover={{ color: "red.700" }}
                  fontSize="2xl"
                  cursor="pointer"
                  as={FiTrash}
                />
              </Flex>
            ))}
            <IconButton
              color="gray.dark"
              bgColor="yellow.default"
              borderRadius="100%"
              aria-label="add-new-todo"
              size="lg"
              p="4px"
              pos="absolute"
              // left="calc(50%-24px)"
              cursor="pointer"
              _hover={{ bgColor: "yellow.dark" }}
              _active={{ bgColor: "yellow.light" }}
              as={FiPlus}
              onClick={() => navigate("/new")}
            />
          </Box>
        </Flex>
      </Box>
    );
  }

  return null;
};

export default Todos;
