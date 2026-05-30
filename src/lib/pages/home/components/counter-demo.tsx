import { Box, Button, Flex, Text } from '@chakra-ui/react';

import { useAppStore } from '@/lib/stores/app-store';

export const CounterDemo = () => {
  const counter = useAppStore((state) => state.counter);
  const increment = useAppStore((state) => state.increment);
  const decrement = useAppStore((state) => state.decrement);
  const reset = useAppStore((state) => state.reset);

  return (
    <Box borderRadius="md" borderWidth={1} p={4} textAlign="center">
      <Text fontWeight="bold" mb={2}>
        Zustand Counter Demo
      </Text>
      <Text fontSize="3xl" mb={4}>
        {counter}
      </Text>
      <Flex gap={2} justifyContent="center">
        <Button onClick={decrement} size="sm" variant="outline">
          - Decrement
        </Button>
        <Button onClick={reset} size="sm" variant="ghost">
          Reset
        </Button>
        <Button onClick={increment} size="sm" variant="outline">
          + Increment
        </Button>
      </Flex>
    </Box>
  );
};
