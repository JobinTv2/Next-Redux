export const addTodo: (payload: { id: number; name: string }) => {
  type: string;
} = (payload) => {
  return {
    type: 'ADD TODO',
    payload,
  };
};
