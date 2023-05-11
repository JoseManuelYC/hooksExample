export const todoReducer = (initialvalue = [], action) => {
  switch (action.type) {
    case "Add todo":
      return [...initialvalue, action.payload];

    case "Remove todo":
      return initialvalue.filter((todo) => todo.id !== action.payload);

    case "Check todo":
      return initialvalue.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });

    default:
      return initialvalue;
  }
};
