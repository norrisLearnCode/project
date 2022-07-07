import React, { useState } from "react";

import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useMutation } from "react-query";
import { client } from "../utils/client";
import { useNavigate } from "react-router-dom";

const NewTodo: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  const mutation = useMutation(
    (newTodo: { todo: { title: string } }) => client.post("todos", newTodo),
    {
      onSuccess: () => {
        navigate("/");
      },
    }
  );

  return (
    <Box mt="24">
      <Box w="384px" mx="auto">
        <Text fontSize="18px" fontWeight="bold" color="gray.default">
          Title
        </Text>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          mt="4"
          name="title"
          borderColor="gray.light"
          borderWidth="2px"
          focusBorderColor="gray.light_dark"
        />
        <Button
          mt="6"
          color="gray.dark"
          bgColor="yellow.default"
          _hover={{ bgColor: "yellow.dark" }}
          _active={{ bgColor: "yellow.light" }}
          onClick={() => mutation.mutate({ todo: { title } })}
        >
          Add New Todo
        </Button>
      </Box>
    </Box>
  );
};

export default NewTodo;
