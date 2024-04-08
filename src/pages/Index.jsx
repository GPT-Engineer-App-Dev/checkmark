// Complete the Index page component here
// Use chakra-ui
import { useState } from "react";
import { Heading, Box, UnorderedList, ListItem, Input, Button, HStack } from "@chakra-ui/react";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      setInputValue("");
    }
  };

  return (
    <Box maxW="400px" mx="auto" mt={8}>
      <Heading mb={4}>My Todos</Heading>
      <HStack mb={4}>
        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter a new todo" />
        <Button onClick={handleAddTodo} colorScheme="blue">
          Add
        </Button>
      </HStack>
      <UnorderedList>
        {todos.map((todo) => (
          <ListItem key={todo.id}>{todo.text}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default Index;
