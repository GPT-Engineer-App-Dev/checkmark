// Complete the Index page component here
// Use chakra-ui
import { Heading, Box, UnorderedList, ListItem } from "@chakra-ui/react";

const Index = () => {
  const todos = [
    { id: 1, text: "Buy groceries" },
    { id: 2, text: "Do laundry" },
    { id: 3, text: "Clean bathroom" },
    { id: 4, text: "Walk the dog" },
  ];

  return (
    <Box maxW="400px" mx="auto" mt={8}>
      <Heading mb={4}>My Todos</Heading>
      <UnorderedList>
        {todos.map((todo) => (
          <ListItem key={todo.id}>{todo.text}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default Index;
