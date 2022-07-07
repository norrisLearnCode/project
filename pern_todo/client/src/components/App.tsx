import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewTodo from "./NewTodo";
import Todos from "./Todos";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/new" element={<NewTodo />} />
          <Route path="/" element={<Todos />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
